# FM E-commerce — EmDash 1.0 Scaffold

Primary platform: EmDash 1.0 + Astro + Cloudflare.

## Verified upstream baseline

EmDash 1.0 is the selected CMS direction. Cloudflare documents EmDash as a full-stack TypeScript CMS built on Astro, with Cloudflare D1/R2/Workers support, API/CLI/MCP workflows and sandboxed plugins.

## FM boundary

This directory is an isolated integration boundary. Existing FM storefront/API code remains untouched.

Planned integration:
- EmDash content/admin
- FM catalog collections
- FM commerce plugin boundary
- FM AI server-side integration
- Cloudflare D1 data
- Cloudflare R2 media
- approval-gated production deployment

## Safety

Production deployment: OFF
Automatic public publishing: OFF
Human approval: ON

Do not add secrets, payment credentials or production customer data here.
