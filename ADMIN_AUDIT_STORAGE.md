# FM E-commerce — Protected Audit Storage

## Target storage
Use a server-side Cloudflare binding for audit records (for example, D1) when production storage is approved.

## Record contract
- timestamp
- event
- authenticated identity
- non-secret details
- request/result status where applicable

## Protection
- Never store passwords, OAuth tokens, API keys, payment credentials, or raw authentication assertions.
- Audit writes must happen server-side.
- Admin UI must not be able to delete or rewrite audit history directly.
- Retention and access policy must be defined before production activation.

## Current state
- Audit event helper: enabled
- Persistent audit storage: NOT ENABLED
- Production deployment: OFF
- Human approval: ON
