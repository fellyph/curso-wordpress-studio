---
source_id: import-export
locale: en
counterpart: ../pt-BR/import-export.md
workshop_track: facilitator
stability: stable
section_order: formats|new-site|existing-site|export|workshop|conflict
---
# Import and export in WordPress Studio

## Formats

For creating a site from a backup, the documentation lists `.tar.gz`, `.zip`, `.wpress`, Local exports, and WordPress Playground exports. An existing site can also receive a `.sql` file.

The 1.17 changelog adds WordPress export import in WXR/XML format. When this project was verified, the dedicated Import & Export page had not yet incorporated that option.

## Create a site from an import

Select **Add site**, choose the import option, provide the file, name the site, and review its settings. Studio 1.17 also integrates imports into the new site-creation flow.

## Update an existing site

In the **Import / Export** tab, drag or select the file and confirm. ZIP or TAR can replace local content; SQL changes the existing database. Export the site before testing an unfamiliar file.

## Export

**Export entire site** creates a site archive; **Export database** creates SQL. Site exports exclude `.git` and `node_modules`. Review the archive before sending it to another party.

## Workshop use

Import and export are not part of the participant path. The facilitator uses an import or Blueprint to recover the starter site quickly and keeps an export of the finished result as an offline fallback.

## Official documentation conflict

WXR/XML remains marked `official_conflict` until the Import & Export page and changelog align. Demonstrate it only after a test on the event's 1.17.x build.

