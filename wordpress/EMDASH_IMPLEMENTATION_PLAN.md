# FM E-commerce — EmDash 1.0 Implementation Plan

## Decision

**Primary platform: EmDash 1.0 + Astro + Cloudflare.**

Cloudflare announced EmDash 1.0 as a stable, free/open-source CMS on September 28, 2026. It provides an Astro-based CMS, API, CLI, built-in MCP and sandboxed plugins. This makes it the selected direction for FM E-commerce.

## Phase 0 — Preserve current foundation

- Keep current catalog, API, AI, tests and approval gates intact.
- Do not continue the old Cloudflare Pages deployment troubleshooting.
- Do not activate production deployment.
- Do not delete existing FM commerce code.

## Phase 1 — Isolated EmDash scaffold

Create the EmDash site in an isolated branch/path first.

Target:
- EmDash 1.0
- Astro
- TypeScript
- Cloudflare
- D1 database
- R2 media

Success criteria:
- Site boots locally.
- EmDash admin works.
- Authentication/RBAC is available.
- Content collections work.
- Build and tests pass.

## Phase 2 — FM content model

Create collections/models for:

- Products
- Categories
- Inventory
- Customers
- Orders
- Sellers
- Commissions
- Payments
- Shipping
- Tax
- Notifications
- Site settings
- Audit events

Keep payment/order mutation capabilities disabled until integration approval.

## Phase 3 — FM storefront

Port the current FM storefront to Astro/EmDash:

- Responsive storefront
- Search
- Category filtering
- Product pages
- Local cart initially
- Urdu/English content
- Mobile-first layout

## Phase 4 — Commerce plugin boundary

Build commerce functionality as an EmDash plugin/integration rather than coupling business logic to the CMS core.

Capabilities must be explicit and minimal.

Before adopting any third-party eCommerce plugin, verify:
- publisher identity
- package/release signature
- checksum
- requested capabilities
- build provenance
- data access
- network access
- maintenance status
- license

## Phase 5 — FM AI

Use EmDash API/MCP/agent capabilities for approved workflows.

FM AI may:
- read approved catalog data
- assist with content
- assist with product discovery
- prepare administrative changes

FM AI must not silently:
- publish
- activate payments
- mutate real orders
- expose secrets
- invent stock/payment/shipping/order facts

## Phase 6 — Cloudflare non-production

Validate:

- Workers runtime
- D1
- R2
- caching
- security headers
- authentication
- logging/audit
- backup/recovery

No public production release.

## Phase 7 — Production approval

Production remains OFF until:

1. All required tests pass.
2. Security checks pass.
3. Commerce integrations are configured and sandbox-tested.
4. Secrets are stored outside Git.
5. Backup/recovery is tested.
6. Human reviews the release.
7. Explicit approval is given.

## Rollback

The current FM E-commerce foundation remains the rollback baseline. EmDash migration must be isolated until it is proven stable.

## Status

**Planning: LOCKED**

**Implementation: NOT YET CLAIMED**

**Production: OFF**

**Human approval: ON**
