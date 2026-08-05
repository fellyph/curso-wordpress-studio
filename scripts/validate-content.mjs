import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const studioDir = path.join(root, 'studio');
const locales = ['pt-BR', 'en', 'es'];
const canonicalLocale = 'en';
const allowed = {
  stability: new Set(['stable', 'beta', 'volatile']),
  source_status: new Set(['aligned', 'official_conflict', 'needs_local_test']),
  workshop_track: new Set(['core', 'challenge', 'facilitator', 'advanced']),
  ui_variant: new Set(['classic', 'agentic', 'both']),
};
const errors = [];

function parseFrontMatter(text, file) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    errors.push(`${file}: missing front matter`);
    return {};
  }

  return Object.fromEntries(
    match[1]
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(':');
        if (separator === -1) return [line.trim(), ''];
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
        return [key, value];
      }),
  );
}

function headingShape(text) {
  return text
    .split('\n')
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) => line.match(/^(#+)/)[1].length)
    .join(',');
}

function contentShape(text) {
  const lines = text.split('\n');
  return {
    bullets: lines.filter((line) => /^\s*-\s/.test(line)).length,
    numbered: lines.filter((line) => /^\s*\d+\.\s/.test(line)).length,
    tableRows: lines.filter((line) => /^\|/.test(line)).length,
    fences: lines.filter((line) => /^```/.test(line)).length,
  };
}

function externalUrls(text) {
  return [...new Set(text.match(/https:\/\/[^)\]"\s`]+/g) ?? [])].sort().join('|');
}

function agendaMinutes(text) {
  return text
    .split('\n')
    .map((line) => line.match(/^\|\s*\d{2}:\d{2}[–-]\d{2}:\d{2}\s*\|\s*(\d+)\s*\|/))
    .filter(Boolean)
    .reduce((sum, match) => sum + Number(match[1]), 0);
}

function agendaRows(text) {
  return text
    .split('\n')
    .map((line) => line.match(/^\|\s*(\d{2}):(\d{2})[–-](\d{2}):(\d{2})\s*\|\s*(\d+)\s*\|/))
    .filter(Boolean)
    .map((match) => ({
      start: Number(match[1]) * 60 + Number(match[2]),
      end: Number(match[3]) * 60 + Number(match[4]),
      minutes: Number(match[5]),
    }));
}

function slideRows(text) {
  return text
    .split('\n')
    .map((line) => line.match(/^\|\s*(\d{1,2})\s*\|/))
    .filter(Boolean)
    .map((match) => Number(match[1]));
}

async function validateInternalLinks(text, relative) {
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    const absolute = path.resolve(path.dirname(path.join(root, relative)), target);
    try {
      await access(absolute);
    } catch {
      errors.push(`${relative}: broken internal link ${target}`);
    }
  }
}

async function validateLinks(urls) {
  for (const url of urls) {
    try {
      let response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (response.status === 405 || response.status === 403) {
        response = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      }
      if (response.status < 200 || response.status >= 400) {
        errors.push(`${url}: HTTP ${response.status}`);
      }
    } catch (error) {
      errors.push(`${url}: ${error.message}`);
    }
  }
}

const manifestPath = path.join(studioDir, 'sources.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
if (JSON.stringify(manifest.supported_locales) !== JSON.stringify(locales)) {
  errors.push(`studio/sources.json: supported_locales must be ${locales.join(', ')}`);
}
const entries = new Map(manifest.sources.map((entry) => [entry.id, entry]));
const readmePath = path.join(studioDir, 'README.md');
await validateInternalLinks(await readFile(readmePath, 'utf8'), path.relative(root, readmePath));

const rootMarkdown = (await readdir(studioDir)).filter((file) => file.endsWith('.md')).sort();
if (rootMarkdown.join('|') !== 'README.md') errors.push('studio root must contain only README.md as Markdown');

if (entries.size !== manifest.sources.length) errors.push('studio/sources.json: duplicate source id');

for (const entry of manifest.sources) {
  for (const [field, values] of Object.entries(allowed)) {
    if (!values.has(entry[field])) errors.push(`${entry.id}: invalid ${field} "${entry[field]}"`);
  }
  if (!Array.isArray(entry.official_urls) || entry.official_urls.length === 0) {
    errors.push(`${entry.id}: official_urls must not be empty`);
  }
  for (const url of entry.official_urls ?? []) {
    if (!/^https:\/\//.test(url)) errors.push(`${entry.id}: invalid official URL ${url}`);
  }
}

const localeFiles = {};
const docs = new Map();
for (const locale of locales) {
  localeFiles[locale] = (await readdir(path.join(studioDir, locale)))
    .filter((file) => file.endsWith('.md'))
    .sort();

  for (const fileName of localeFiles[locale]) {
    const absolute = path.join(studioDir, locale, fileName);
    const relative = path.relative(root, absolute);
    const text = await readFile(absolute, 'utf8');
    const meta = parseFrontMatter(text, relative);
    const source = entries.get(meta.source_id);

    if (!source) errors.push(`${relative}: unknown source_id "${meta.source_id}"`);
    if (meta.locale !== locale) errors.push(`${relative}: locale must be ${locale}`);
    if (source && meta.workshop_track !== source.workshop_track) errors.push(`${relative}: workshop_track differs from manifest`);
    if (source && meta.stability !== source.stability) errors.push(`${relative}: stability differs from manifest`);
    if (!meta.counterpart) errors.push(`${relative}: missing counterpart`);
    if (!meta.section_order) errors.push(`${relative}: missing section_order`);

    await validateInternalLinks(text, relative);

    docs.set(`${locale}/${fileName}`, { text, meta, relative });
  }
}

const expectedFiles = [...entries.keys()].map((id) => `${id}.md`).sort();
for (const locale of locales) {
  if (localeFiles[locale].join('|') !== localeFiles[canonicalLocale].join('|')) {
    errors.push(`${locale}: studio locale does not contain the same Markdown files as ${canonicalLocale}`);
  }
  if (localeFiles[locale].join('|') !== expectedFiles.join('|')) {
    errors.push(`${locale}: locale file set differs from sources.json\nexpected: ${expectedFiles.join(', ')}\nactual: ${localeFiles[locale].join(', ')}`);
  }
}

for (const fileName of expectedFiles) {
  const canonical = docs.get(`${canonicalLocale}/${fileName}`);
  if (!canonical) continue;
  for (const locale of locales) {
    const doc = docs.get(`${locale}/${fileName}`);
    if (!doc) continue;
    if (doc.meta.section_order !== canonical.meta.section_order) errors.push(`${fileName}: section_order differs in ${locale}`);
    if (headingShape(doc.text) !== headingShape(canonical.text)) errors.push(`${fileName}: heading-level sequence differs in ${locale}`);
    if (JSON.stringify(contentShape(doc.text)) !== JSON.stringify(contentShape(canonical.text))) errors.push(`${fileName}: list/table/code-fence structure differs in ${locale}`);
    if (externalUrls(doc.text) !== externalUrls(canonical.text)) errors.push(`${fileName}: external URL set differs in ${locale}`);

    const counterpart = path.resolve(path.dirname(path.join(root, doc.relative)), doc.meta.counterpart);
    const validCounterparts = locales
      .filter((candidate) => candidate !== locale)
      .map((candidate) => path.join(root, docs.get(`${candidate}/${fileName}`)?.relative ?? ''));
    if (!validCounterparts.includes(counterpart)) errors.push(`${doc.relative}: counterpart does not resolve to another supported locale`);
  }
}

const obsoletePatterns = [
  [/Studio 1\.15/gi, 'obsolete Studio 1.15 baseline'],
  [/GPT[ -]?5\.5/gi, 'obsolete GPT 5.5 model'],
  [/1\.18\.0-dev/gi, 'development build must not appear in localized references'],
  [/\/preview[^.\n]{0,120}(slash command|comando)[^.\n]{0,120}desktop/gi, 'incorrect /preview surface'],
  [/desktop[^.\n]{0,120}\/preview[^.\n]{0,120}(slash command|comando)/gi, 'incorrect /preview surface'],
];
for (const doc of docs.values()) {
  for (const [pattern, label] of obsoletePatterns) {
    if (pattern.test(doc.text)) errors.push(`${doc.relative}: ${label}`);
    pattern.lastIndex = 0;
  }
}

const plans = {};
for (const locale of locales) {
  const file = path.join(root, 'workshop', locale, 'plan.md');
  const relative = path.relative(root, file);
  const text = await readFile(file, 'utf8');
  const meta = parseFrontMatter(text, relative);
  plans[locale] = { text, meta, relative };
  if (meta.locale !== locale) errors.push(`${relative}: locale must be ${locale}`);
  if (Number(meta.duration_minutes) !== 240) errors.push(`${relative}: duration_minutes must be 240`);
  if (agendaMinutes(text) !== 240) errors.push(`${relative}: agenda must total 240 minutes, found ${agendaMinutes(text)}`);
  const rows = agendaRows(text);
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    if (row.end - row.start !== row.minutes) errors.push(`${relative}: agenda row ${index + 1} has a time/minute mismatch`);
    if (index > 0 && rows[index - 1].end !== row.start) errors.push(`${relative}: agenda rows ${index} and ${index + 1} are not contiguous`);
  }
  if (rows.length !== 10 || rows[0]?.start !== 0 || rows.at(-1)?.end !== 240) {
    errors.push(`${relative}: agenda must contain 10 contiguous rows from 00:00 to 04:00`);
  }
  const slides = slideRows(text);
  if (slides.length !== 38 || slides.some((slide, index) => slide !== index + 1)) {
    errors.push(`${relative}: slide migration map must contain slides 1 through 38 exactly once`);
  }
  await validateInternalLinks(text, relative);
}
for (const locale of locales) {
  const plan = plans[locale];
  const canonical = plans[canonicalLocale];
  if (plan.meta.section_order !== canonical.meta.section_order) errors.push(`workshop plans: section_order differs in ${locale}`);
  if (headingShape(plan.text) !== headingShape(canonical.text)) errors.push(`workshop plans: heading-level sequence differs in ${locale}`);
  if (JSON.stringify(contentShape(plan.text)) !== JSON.stringify(contentShape(canonical.text))) errors.push(`workshop plans: list/table/code-fence structure differs in ${locale}`);
  if (externalUrls(plan.text) !== externalUrls(canonical.text)) errors.push(`workshop plans: external URL set differs in ${locale}`);
  const counterpart = path.resolve(path.dirname(path.join(root, plan.relative)), plan.meta.counterpart);
  const validCounterparts = locales
    .filter((candidate) => candidate !== locale)
    .map((candidate) => path.join(root, plans[candidate].relative));
  if (!validCounterparts.includes(counterpart)) errors.push(`${plan.relative}: counterpart does not resolve to another supported locale`);
}

if (process.argv.includes('--check-links')) {
  const urls = [...new Set(manifest.sources.flatMap((entry) => entry.official_urls))];
  await validateLinks(urls);
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content validation passed: ${expectedFiles.length} references × ${locales.length} locales; workshop agenda = 240 minutes.`);
