# Original image archive

This directory contains the source-quality images retained before the website switched to smaller WebP delivery assets.

- `zoho/backgrounds`: original Zoho hero backgrounds
- `zoho/dashboards`: original Zoho dashboard PNG files
- `netsuite/backgrounds`: original NetSuite hero backgrounds
- `netsuite/hero`: original NetSuite hero and dashboard visuals
- `odoo/hero`: original Odoo hero photography
- `shared/backgrounds`: original backgrounds shared across landing pages
- `shared/modules`: original square module PNG files used across multiple product pages

These files intentionally live outside `public`, so visitors do not download them and they are not directly addressable as website assets. Copy an original back into the corresponding `public/images` folder only when a future redesign needs the source-resolution file.

The active module WebP files preserve the original square composition. The separate `*-card.webp` files are 4:3 derivatives used only by the Odoo landing-page cards.
