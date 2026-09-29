# FM E-commerce — actual EmDash application scaffold

This is the isolated EmDash + Astro + Cloudflare application boundary.

Upstream basis: EmDash starter Cloudflare template, adapted for FM commerce.

## Stack

- Astro
- EmDash CMS
- Cloudflare Workers
- D1
- R2
- FM product collection

## Safety

- Production deployment: OFF
- Automatic public publishing: OFF
- Human approval: ON
- Product seed starts as draft content

## Admin

After local setup, EmDash admin is available at:

`/_emdash/admin`

## Next integration

The existing FM storefront/API remains outside this directory. The next migration step is an explicit adapter between `data/products.json` and the EmDash `products` collection; no production data is migrated automatically.
