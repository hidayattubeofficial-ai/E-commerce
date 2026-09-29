# FM E-commerce Admin Security Boundary

- Static admin pages: enabled
- Read-only admin APIs: enabled
- Authentication boundary page: enabled
- Admin API middleware: fail-closed
- Admin role guard foundation: enabled
- Expected access layer: Cloudflare Access
- Authentication provider: not configured for production
- Write operations: disabled
- Payment processing: disabled
- Production deployment: disabled
- Human approval: required

## Access rule
Admin API requests require Cloudflare Access identity/JWT headers. Missing authentication returns HTTP 401.

## Role rule
Write-capable endpoints must require an explicit server-side admin role. The role guard foundation returns HTTP 403 when the admin role is absent.

The browser must never be trusted to self-assign an administrator role. The role header is only a placeholder contract for trusted edge/server identity mapping and is not, by itself, production authentication.

## Next security phase
1. Configure Cloudflare Access on /admin/* and /api/admin/*.
2. Map authenticated identity to an administrator role at a trusted server/edge boundary.
3. Validate Access JWT issuer, audience, and signature.
4. Add write endpoints only after role enforcement and audit logging are tested.
5. Keep production publishing approval-gated.
