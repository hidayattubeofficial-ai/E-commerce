# Hidayat E-commerce

Standalone FM marketplace foundation.

## Current implementation

- Responsive storefront with catalog search/filter
- Local cart with stock-limited quantity controls
- Server-side catalog API
- Server-side Hidayat AI shopping assistant
- Read-only admin Products, Inventory and Orders surfaces
- Health endpoint
- Security response headers
- Automated catalog, API-contract and safety-gate tests
- GitHub Actions CI
- Human approval gate

## Automation

GitHub Actions runs the Hidayat short-code automation system.

Short commands:

`H:INIT` · `H:UI` · `H:CMS` · `H:SHOP` · `H:SELL` · `H:AI` · `H:TEST` · `H:FIX` · `H:BUILD` · `H:DEPLOY`

AI planning can use the repository secret `OPENAI_API_KEY`; secrets remain server-side.

## Production gate

Production deployment is **OFF** and requires explicit human approval.

The following are intentionally inactive until their real integrations are configured, tested and approved:

- Payment processing
- Real order creation/mutations
- Customer accounts
- Seller onboarding and payouts
- Shipping integrations
- Tax integrations
- Automated public publishing

No storefront code should bypass these gates.

## Supporting workspace tools

Optional tools such as Canva, Google Colab, draw.io, CloudConvert, Photopea and GPT Workspace remain supporting utilities rather than core runtime dependencies.

## Hidayat AI

The storefront calls `/api/ai`. The API reads the active catalog server-side and keeps the OpenAI API key out of the browser. AI responses must not invent catalog, order, payment, seller, shipping or delivery facts.

## Readiness

The implementation foundation is complete and documented in `docs/PRODUCTION_READINESS.md`. Production commerce is a separate integration phase and is not represented as complete until the required external services, storage, security controls, testing and approval are in place.
