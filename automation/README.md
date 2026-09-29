# FM Automation

Short-code workflow:

- `FM:INIT` foundation
- `FM:UI` storefront
- `FM:CMS` CMS
- `FM:SHOP` commerce
- `FM:SELL` seller
- `FM:AI` AI planning
- `FM:TEST` validation
- `FM:FIX` safe fixes
- `FM:BUILD` build
- `FM:DEPLOY` approval-gated only

Rules:
1. Existing projects are isolated.
2. No automatic production deployment.
3. AI may plan and validate; human approval is required for release.
4. Keep changes small and rollback-friendly.
