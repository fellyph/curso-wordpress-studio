---
source_id: sync
locale: en
counterpart: ../pt-BR/sync.md
workshop_track: advanced
stability: stable
section_order: rule|requirements|connect|pull|push|database|deployignore|guardrails|workshop
---
# Studio Sync

## Core rule

**Sync replaces selected items; it does not merge them.** This applies to Pull and Push. Parallel changes can be lost.

## Requirements

WordPress.com requires a site on a compatible plan and administrator access. Pressable requires a compatible Jetpack connection. Confirm eligibility, the 5 GB limit, and backup behavior on the demonstration account.

## Connect a site

In the **Sync** tab, log in, select **Connect site**, choose the remote environment, and confirm. Use only staging or a disposable site.

## Pull

Pull replaces selected files, folders, or the database on the local site. Make a local copy and check recent remote changes before the operation.

## Push

Push replaces selected items in the remote environment. Select only the changed theme, plugin, or folder. Confirm the destination and backup before continuing.

## Database

Including Database replaces the remote database, with documented exceptions for user tables. In WooCommerce, this can erase orders, customers, and inventory created after the last Pull. A production database never enters the exercise.

## `.deployignore`

Sync respects `.deployignore` at the site root and also excludes internal Studio files. Review the actual file set before sending it.

## Guardrails

- Use disposable staging.
- Perform a recent Pull and verify the backup.
- Send one component at a time without Database.
- Coordinate parallel changes.
- Know how to restore before executing.

## Workshop use

There is no hands-on Sync in the four-hour session. The closing only maps the options after Preview and reinforces that publishing requires hosting and a separate approval flow.

