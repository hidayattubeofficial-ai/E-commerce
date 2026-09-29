# FM E-commerce — Production Readiness

## Implemented foundation

- Storefront catalog and local cart
- Catalog API with search and category filtering
- Server-side FM AI endpoint
- Read-only admin Products, Inventory and Orders surfaces
- Health endpoint
- Automated catalog, API-contract and safety-gate tests
- GitHub Actions test workflow
- Security response headers
- Human approval gate
- Production deployment flag locked OFF

## Intentionally not activated

These require real provider configuration, credentials, data storage, operational policies and an explicit human approval step:

- Payment processing
- Real order creation/mutation
- Customer accounts
- Seller onboarding and payouts
- Shipping carrier integrations
- Tax calculation/filing integrations
- Production deployment/public release
- Automated public publishing

## 100% definition

The repository foundation can be considered complete when every planned foundation module has a tested, documented interface and safe disabled state.

Production commerce is only 100% after the required external integrations are configured, tested in their respective sandbox/production environments, secured, audited and explicitly approved.

## Safety rule

No code in this repository should bypass the approval gate or silently activate payments, order mutations, seller payouts or production deployment.
