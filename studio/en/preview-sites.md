---
source_id: preview-sites
locale: en
counterpart: ../pt-BR/preview-sites.md
workshop_track: core
stability: stable
section_order: purpose|requirements|lifecycle|limits|deployignore|safety|test
---
# Preview Sites in WordPress Studio

## Purpose

A Preview Site is a public, temporary snapshot of the local site at a `wp.build` address. It supports review with clients, peers, or participants. It is not permanent hosting and does not follow local changes automatically.

## Requirements

Preview requires a WordPress.com account connected to Studio. Current documentation does not say that the site must be running before creation; confirm that behavior during the smoke test for the event build.

## Create, update, and close

In the **Preview** tab, create the Preview, give it a clear name, and copy its URL. After local changes, use **Update** to replace the snapshot. The interface can also rename a Preview, delete one Preview, or delete all Previews on the account.

## Current limits

- The URL is public to anyone who has the link.
- A Preview expires after seven days without an update.
- Updating restarts the seven-day period.
- Each account can maintain up to ten simultaneous Previews.

## `.deployignore`

Studio sends `wp-content`. A `.deployignore` file at the site root excludes paths using syntax similar to `.gitignore`. Exclude caches, large files, backups, secrets, and anything unnecessary.

## Workshop safety

Use only fictional, owned, or authorized content. Do not include personal data, credentials, or confidential material. Feedback is exchanged through the URL, but all corrections are made on the local site first.

## Pre-event test

Create, rename, update, and delete a test Preview. Confirm login, account limits, stopped-site behavior, public URL access, and expiration in the Studio 1.17.x build used for the workshop.

