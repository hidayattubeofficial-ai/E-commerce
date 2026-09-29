# FM E-commerce — EmDash application

Isolated EmDash + Astro + Cloudflare application boundary.

## Implemented

- Astro server application
- EmDash integration with live collection loader
- Cloudflare Worker adapter
- D1 binding
- R2 media binding
- FM product collection seed
- Read-only adapter from existing `data/products.json`
- Product list and detail routes
- Catalog bridge test

## Boundary

The adapter is intentionally read-only. It does not mutate the existing catalog and does not publish products automatically.

## Safety

- Production deployment: OFF
- Automatic public publishing: OFF
- Human approval: ON
- Checkout/payment/order mutations: OFF

The existing FM storefront/API remains untouched.