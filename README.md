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
