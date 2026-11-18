# Live image usage survey

- Survey date: 2026-11-18
- Production sitemap URLs checked: 166 of 166
- Crawl errors: 0
- Unique production image URLs observed: 456
- Proposed local image candidates compared: 592

## Result

One proposed candidate is still used by a production page and must be kept:

| Image | Live page | Status | Action |
|---|---|---|---|
| `public/images/Services/zoho_digital_transformation_overview.png` | `https://www.agsuitetech.com/zoho/digital-transformation` | Referenced by the live page | Keep until the new WebP replacement is deployed and the live page is rechecked |

The current working tree changes this page to:

`public/images/Services/zoho_digital_transformation_overview_no_logo.webp`

The old PNG is therefore a production-only dependency until that change is deployed.

## Remaining candidates

- 591 files, approximately 237.01 MB, were not referenced by any of the 166 production sitemap pages.
- This means removing them should not affect images rendered by the currently indexed website pages.
- It does not prove that an asset is unused by an external email, an old direct URL, a third-party hotlink, an unpublished route, or a page outside the production sitemap.

## Extra-risk groups to review before deletion

| Group | Files | Reason |
|---|---:|---|
| `public/email/**` | 6 | May be embedded in sent or externally managed email/CRM templates that are not visible in the website sitemap |
| `public/android-chrome-*.png` | 7 | May be requested directly by browsers, saved manifests, or older favicon configurations |

For maximum safety, exclude these 13 files from the first deletion pass unless their external uses are also checked.

## Recommended deletion scope

1. Do not delete the live old overview PNG yet.
2. Keep the 6 email assets and 7 Android icon assets for a separate external-use review.
3. The first low-risk deletion pass is the remaining 578 files.
4. Deploy the new overview WebP, recheck the live page, and only then remove the old PNG.
5. Keep the Git deletion in its own commit so every file remains easy to restore.

## Method

The audit compared every path in `docs/unused-images-deleted-2026-11-18.md` with all image URLs observed while crawling every URL in the production sitemap. Shared navigation/footer images were included. Local source references and known dynamically generated Odoo app-logo paths had already been excluded during the original candidate scan.
