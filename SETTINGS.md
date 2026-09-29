# FM E-commerce — Settings Specification

## Status
- Settings is a first-class FM E-commerce module.
- Production deployment: OFF.
- Human approval gate: ON.
- Automatic public publishing: OFF.
- Payment processing: OFF until explicitly configured and approved.
- Secrets must never be stored in frontend code or committed to the repository.

## Settings sections
1. General — store name, branding assets, default currency, locale and timezone.
2. Store — storefront status, maintenance mode and public-store controls.
3. Catalog — products, categories, attributes, inventory rules and low-stock thresholds.
4. Orders — order statuses, workflow rules and cancellation/return configuration.
5. Customers — customer accounts, roles and account policies.
6. Sellers — seller onboarding, seller roles and permissions, marketplace controls.
7. Payments — payment methods and provider configuration; credentials remain server-side.
8. Shipping — shipping methods, regions, rates and fulfillment configuration.
9. Tax — tax regions, rates and calculation rules.
10. AI — FM AI automation controls, approval requirements and automation mode.
11. Security — Cloudflare Access boundary, admin roles, authentication checks and audit logging.
12. Notifications — transactional/system notification controls and provider configuration.
13. Analytics — store metrics and reporting configuration.
14. Deployment — Cloudflare deployment controls; production deploy remains disabled until human approval.
15. Backup & Audit — protected audit records, retention and recovery controls.

## Access rules
- Public storefront settings must not expose administrator controls.
- Administrative settings belong under the protected admin boundary.
- Write-capable settings require trusted administrator authorization.
- Security-sensitive changes must create an audit event.
- Secrets, tokens, payment credentials and authentication material must never be written to audit logs.
- The browser cannot self-assign an administrator role.

## Approval gate
Changes that can affect production, public storefront behavior, payment processing, security boundaries or automatic publishing remain approval-gated.

## Implementation rule
This specification defines the target Settings module. It does not claim that every listed setting is already implemented. Each setting should be marked implemented only after corresponding code and tests exist.
