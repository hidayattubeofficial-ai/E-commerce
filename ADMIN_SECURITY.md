# FM E-commerce Admin Security Boundary

- Static admin pages: enabled
- Read-only admin APIs: enabled
- Authentication: not enabled yet
- Write operations: disabled
- Payment processing: disabled
- Production deployment: disabled
- Human approval: required

## Security rule
No credentials, API keys, payment secrets, or write-capable endpoints belong in browser code.

## Next security phase
1. Authentication/access layer.
2. Server-side identity validation.
3. Role checks before writes.
4. Audit logging.
5. Approval gate before production changes.
