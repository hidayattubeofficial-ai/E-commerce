# FM E-commerce Admin Security Boundary

- Static admin pages: enabled
- Read-only admin APIs: enabled
- Authentication boundary page: enabled
- Admin API middleware: fail-closed
- Expected access layer: Cloudflare Access
- JWT verification: delegated to the deployed Access boundary
- Authentication provider: not configured for production
- Write operations: disabled
- Payment processing: disabled
- Production deployment: disabled
- Human approval: required

## Access rule
Admin API requests require both a Cloudflare Access identity header and Access JWT assertion. Missing either header returns HTTP 401.

The application does not accept a frontend password or browser-supplied identity as authentication.

## Deployment requirement
Configure Cloudflare Access on the actual production hostname and protect both /admin/* and /api/admin/*. The Access policy must restrict access to the intended administrator identity.

## Next security phase
1. Configure and test Cloudflare Access.
2. Verify JWT signature, issuer and audience at the Access/edge boundary.
3. Add role checks before any write endpoint.
4. Add audit logging.
5. Keep production publishing approval-gated.
