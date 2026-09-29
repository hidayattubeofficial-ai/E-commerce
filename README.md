# FM E-commerce

New standalone FM marketplace project.

## Automation

GitHub Actions runs the FM short-code automation system.

Use Actions → **FM E-commerce Automation** → Run workflow.

Short commands:

`FM:INIT` · `FM:UI` · `FM:CMS` · `FM:SHOP` · `FM:SELL` · `FM:AI` · `FM:TEST` · `FM:FIX` · `FM:BUILD` · `FM:DEPLOY`

AI planning is enabled when the repository secret `OPENAI_API_KEY` exists. Without it, the workflow stays in fast local validation mode.

Production deployment is intentionally disabled until human approval.

## Goal

Build an independent FM marketplace using reusable open-source foundations, with storefront, CMS, commerce, seller tools, AI automation, testing and Cloudflare-ready deployment.

## Recommended workspace tooling

Keep Google Workspace Marketplace integrations optional and use them only where they reduce real work.

- **Canva** — brand assets, banners and presentation/design work.
- **Google Colab** — isolated Python/AI experiments and data processing.
- **draw.io** — architecture, ERD and workflow diagrams.
- **CloudConvert** — media/document format conversion when required.
- **Photopea** — PSD/XCF and browser-based image editing.
- **GPT Workspace** — optional Google Workspace AI assistance.

### Integration rule

These tools are supporting utilities, not core runtime dependencies. The core FM E-commerce application remains independent and GitHub-controlled. Do not add a Marketplace app as a production dependency unless the integration is explicitly needed, documented, tested and reversible.

Production deployment remains human-approved.

## Storefront AI status

FM AI is now wired into the storefront at `/api/ai`. It receives the active catalog from `data/products.json` server-side and answers customer questions using that catalog. The storefront contains the customer chat UI; the API key remains a server-side Cloudflare Pages secret. Payment, checkout, real order mutations, seller payouts and production deployment are intentionally not activated until their respective integrations are configured and human-approved.

## FM AI website layer

The server-side AI foundation is now in `ai/worker.js`. The website can call its POST `/ai` endpoint without exposing `OPENAI_API_KEY` to visitors. Setup and request/response details are documented in `ai/README.md`. Deployment/routing is intentionally separate and remains human-approved.
