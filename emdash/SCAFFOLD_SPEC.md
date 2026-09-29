# FM E-commerce — EmDash Scaffold Specification

## Upstream

EmDash 1.0 is the selected platform. The upstream project provides the `create-emdash` scaffolder (current package version verified from the upstream repository), and supports Astro + Cloudflare with D1/R2.

## Local scaffold target

The first real EmDash application should be generated from the upstream scaffold rather than copied manually.

Expected bootstrap:

```bash
npm create emdash@latest
```

Then select/configure:
- FM E-commerce
- Astro
- Cloudflare
- D1
- R2

## Repository integration

Keep the generated application isolated under `emdash/app/` or a dedicated migration branch until:

1. the scaffold installs successfully;
2. the Astro build succeeds;
3. EmDash admin opens;
4. D1 database binding works;
5. R2 media binding works;
6. authentication/RBAC is verified;
7. the FM catalog can be represented without changing the current production foundation.

## FM content model

Initial EmDash collections:

- products
- categories
- inventory
- customers
- orders
- sellers
- commissions
- payments
- shipping
- tax
- notifications
- site_settings
- audit_events

## Safety

The scaffold is development-only until explicitly promoted.

Production deployment: OFF

Automatic publishing: OFF

Human approval: ON

No secrets or production customer/payment data in Git.
