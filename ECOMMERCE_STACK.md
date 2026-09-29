# FM E-commerce — Stack & Architecture Lock

## Project status
- Standalone repository: `hidayattubeofficial-ai/E-commerce`
- Production deployment: OFF
- Human approval: ON
- Automatic public publishing: OFF
- Scope: FM E-commerce only

## Open-source foundation research
- Bagisto — MIT; Laravel/PHP; commerce foundation with marketplace, B2B and multi-vendor capabilities.
- Medusa — core MIT; TypeScript/Node.js; modular commerce architecture. Enterprise components may have separate licensing.
- TailAdmin — MIT/open-source admin dashboard options.
- Strapi — core open-source/MIT areas; Enterprise features have separate licensing terms.

## Proposed architecture
1. Commerce core: evaluate Bagisto first for the Laravel-based path.
2. Alternative headless path: Medusa if TypeScript/Node modularity is preferred.
3. Admin UI: TailAdmin-compatible UI patterns/components where appropriate.
4. CMS/content: Strapi only where its licensing boundaries fit the required features.
5. Deployment: Cloudflare-compatible production target, but deployment remains disabled until explicit approval.

## Guardrails
- Do not claim implementation until code exists in this repository.
- Do not enable production deployment automatically.
- Do not enable automatic public publishing.
- Preserve a human approval gate for production-impacting changes.
- Keep licensing boundaries documented before adopting any Enterprise/proprietary component.

## Next implementation phase
- Establish the selected commerce core.
- Add product/catalog, categories, inventory, customers and orders.
- Add admin dashboard.
- Add payment/shipping integration points without hard-coding secrets.
- Add CI/security checks.
- Add approval-gated deployment workflow.

This file is a planning/architecture lock; it does not claim that the above stack has already been implemented.
