# Hidayat Commerce Platform — WordPress + WooCommerce Architecture Lock

## Target

Hidayat Commerce Platform is a standalone WordPress + WooCommerce enterprise multi-vendor marketplace.

## Runtime baseline

- PHP 8.3+
- MySQL 8.0+ or MariaDB 10.6+
- REST API
- English + Urdu
- Mobile-ready
- AI-ready

## Core modules

- Vendor dashboard
- Admin dashboard
- Customer dashboard
- Products and categories
- Orders
- Inventory
- Wallet
- Commissions
- Reports
- Notifications
- WhatsApp integration point
- Payment integration points
- Shipping integration point
- Tax integration point
- Hidayat AI integration point

## Payment integration plan

Pakistan:
- JazzCash
- EasyPaisa
- Bank Transfer

International:
- Stripe
- PayPal

Credentials must remain server-side and must never be committed to Git.

## Governance

- Hidayat Home is the canonical control plane.
- Default access is read-only.
- Production actions require explicit human approval.
- Destructive actions require confirmation.
- Automatic public publishing remains OFF.

## Repository safety

This architecture document is configuration/planning only. It does not claim that WordPress, WooCommerce, payment providers, marketplace plugins, or production hosting have already been installed or activated.

The existing Hidayat E-commerce foundation remains preserved. WordPress implementation should be added without deleting or bypassing existing safety gates.
