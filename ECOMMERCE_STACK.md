# FM E-commerce — Stack & Architecture Lock

## Project status
- Standalone repository: `hidayattubeofficial-ai/E-commerce`
- Primary CMS/runtime direction: **EmDash 1.0 + Astro + Cloudflare**
- Production deployment: OFF
- Human approval: ON
- Automatic public publishing: OFF
- Scope: FM E-commerce only

## Architecture decision

The previous WordPress/WooCommerce direction is **superseded as the primary runtime** by EmDash 1.0.

EmDash 1.0 is a stable, free/open-source CMS built on Astro, with Cloudflare deployment support, APIs, CLI, built-in MCP, localization/media/editorial workflows and sandboxed plugins.

## Proposed FM architecture

1. **CMS / application foundation:** EmDash 1.0 + Astro.
2. **Cloud platform:** Cloudflare Workers/Pages-compatible EmDash deployment.
3. **Data:** EmDash-supported SQL layer, with Cloudflare D1 as the preferred Cloudflare-native target.
4. **Media:** Cloudflare R2 target.
5. **Commerce:** custom FM commerce layer/plugin architecture; evaluate the emerging EmDash eCommerce plugin before adopting it.
6. **AI:** FM AI through EmDash API/MCP/agent workflows, with secrets server-side.
7. **Source control:** GitHub.
8. **Production control:** human approval gate; no automatic public publishing.

## Commerce modules

- Products and categories
- Inventory
- Customers
- Orders
- Sellers / marketplace
- Wallet / commissions
- Payments
- Shipping
- Tax
- Notifications
- Analytics
- Audit

Payment/provider integrations remain disabled until real credentials, sandbox tests, security review and explicit approval exist.

## Plugin security rule

Prefer EmDash sandboxed plugins with declared capabilities. Do not install an unverified plugin merely because it appears in a registry. Review package identity, requested capabilities, checksum/provenance and required access before approval.

## Migration rule

The existing FM E-commerce storefront/API foundation remains preserved. WordPress planning files are retained as historical/reference material and are not the production architecture.

## Guardrails

- Do not claim implementation until code exists in this repository.
- Do not enable production deployment automatically.
- Do not enable automatic public publishing.
- Preserve human approval for production-impacting changes.
- Never commit secrets, payment credentials or customer data.
- Keep licensing and plugin capability boundaries documented.

## Next implementation phase

- Scaffold an EmDash 1.0 site in an isolated path/branch.
- Connect the FM catalog model to EmDash collections.
- Port the current storefront experience to Astro/EmDash.
- Define the FM commerce plugin boundary.
- Integrate FM AI through server-side API/MCP capabilities.
- Add tests/security checks.
- Validate Cloudflare D1/R2 deployment in a non-production environment.
- Only after validation, prepare an approval-gated production deployment.

This document supersedes the earlier Bagisto/Medusa/WordPress-first architecture proposal.
