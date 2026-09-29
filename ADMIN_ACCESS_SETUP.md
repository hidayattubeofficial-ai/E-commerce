# FM E-commerce — Admin Access Setup

## Target
Protect /admin and /api/admin/* with Cloudflare Access before enabling any write operation.

## Current repository state
- Admin API middleware: fail-closed
- Authentication provider: Cloudflare Access (target)
- Product writes: OFF
- Inventory writes: OFF
- Order mutations: OFF
- Payment processing: OFF
- Production deployment: OFF
- Human approval: ON

## Cloudflare Access checklist
1. Create a Zero Trust Access application for the future production hostname.
2. Protect the /admin/* path.
3. Protect /api/admin/*.
4. Create an allow policy for the intended administrator identity.
5. Require an authenticated session.
6. Keep write endpoints disabled until the policy is tested.
7. Verify unauthenticated API requests return HTTP 401.
8. Verify an authenticated administrator can reach read-only admin APIs.
9. Record the Access application/policy identifiers in deployment secrets or protected configuration, never in frontend code.

## Security note
This repository does not claim that Cloudflare Access is configured. The configuration must be completed in the Cloudflare dashboard for the actual production hostname.

## Approval gate
Do not enable production deployment, payment processing, or write-capable admin endpoints as part of this setup.
