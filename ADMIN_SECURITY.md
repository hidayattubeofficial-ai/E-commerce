# FM E-commerce Admin Security Boundary

- Static admin pages: enabled
- Read-only admin APIs: enabled
- Authentication boundary page: enabled
- Admin API middleware: fail-closed
- Expected access layer: Cloudflare Access
- Authentication provider: not configured for production
- Write operations: disabled
- Payment processing: disabled
- Production deployment: disabled
- Human approval: required

## Access rule
Admin API requests must arrive through an authenticated Cloudflare Access session and include the Access identity/JWT headers. Requests without them receive HTTP 401.

No credentials, API keys, payment secrets, or write-capable operations belong in browser code.

## Important
The middleware does not trust a browser form or a password stored in frontend code. Cloudflare Access must be configured at the deployment/access layer before admin API access is enabled for a live environment.

## Next security phase
1. Configure Cloudflare Access for the admin/API routes.
2. Validate the Access JWT at the edge/server boundary.
3. Add role checks before writes.
4. Add audit logging.
5. Keep production publishing approval-gated.
