# FM E-commerce — Admin Access Setup

## Target
Protect /admin/* and /api/admin/* with Cloudflare Access before enabling write operations.

## Current state
- Admin API middleware: fail-closed
- Admin role guard: enabled
- Trusted role mapping contract: enabled
- Persistent audit storage: not enabled
- Product writes: OFF
- Inventory writes: OFF
- Order mutations: OFF
- Payment processing: OFF
- Production deployment: OFF
- Human approval: ON

## Trusted identity flow
1. Cloudflare Access authenticates the administrator.
2. The trusted edge/server boundary validates the Access identity/JWT.
3. That trusted boundary maps the authenticated identity to the configured administrator role.
4. Admin write endpoints check the trusted role before performing mutations.
5. Audit logging records the action without secrets.

The repository does not treat a browser-controlled role header as proof of authorization. The role header is only an internal contract between trusted layers.

## Configuration
The intended administrator role can be supplied as protected runtime configuration (FM_ADMIN_ROLE). Do not expose it in frontend code.

## Approval gate
Do not enable production deployment, payments, or write endpoints merely by completing this documentation/configuration step.
