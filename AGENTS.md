# Project rules

These instructions apply to the entire repository.

## Bilingual content is one deliverable

Portuguese (`pt-BR`) and English (`en`) are counterparts, not independent editions. A content update is incomplete until the equivalent change is made in every supported language in the same change set.

Mandatory mappings:

- `studio/pt-BR/<slug>.md` ↔ `studio/en/<slug>.md`
- `workshop/pt-BR/plan.md` ↔ `workshop/en/plan.md`
- `slides/videos/shared/content.js`: every changed module under `locales["pt-BR"]` ↔ the same module under `locales.en`
- Bilingual Markdown files such as `README.md`, `studio/README.md`, and `slides/videos/README.md`: update both language sections together

When adding a supported locale, update the manifest, validators, indexes, entry files, documentation, and this mapping.

## Required workflow for content changes

1. Identify every affected language counterpart before editing.
2. Apply equivalent factual and structural changes in all supported languages. The wording may be localized naturally; literal translation is not required.
3. Preserve matching slugs, module order, heading levels, list/table structure, external links, and observable outcomes.
4. Keep product names and interface labels in English, adding a localized explanation when useful.
5. When a source, version, model, limit, or command changes, update `studio/sources.json` and both `current-state.md` files when applicable.
6. Run both required validators before considering the work complete:

   ```sh
   node scripts/validate-content.mjs
   node scripts/validate-video-slides.mjs
   ```

7. For a pull request or a commit based on another revision, also run:

   ```sh
   node scripts/validate-bilingual-changes.mjs <base-commit>
   ```

Do not bypass a bilingual validation failure by weakening the validator or making an unrelated counterpart edit. Fix the missing equivalent update.

## Scope and source safety

- Treat `ref/` as preserved source material. Do not edit the original PPTX or PDF unless the user explicitly requests it.
- Use WordPress Studio 1.17.x as the editorial baseline until the project explicitly adopts another stable version.
- Keep volatile details centralized in the current-state references instead of duplicating them throughout the project.
- Preview must remain described as public and temporary, not permanent hosting.
- Do not add real credentials, private data, production operations, or unauthorized assets to examples or Preview instructions.

## Definition of done

A content change is complete only when:

- every supported language contains the equivalent update;
- structural parity and counterpart metadata remain valid;
- the bilingual-diff validator confirms that paired files or video modules changed together;
- the content and video validators pass;
- relevant indexes and README guidance remain accurate.
