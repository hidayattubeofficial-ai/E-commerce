# FM E-commerce — WordPress / WooCommerce Configuration

This directory is the WordPress deployment/configuration contract for FM E-commerce.

## Target stack

- WordPress + WooCommerce
- PHP 8.3+
- MySQL 8.0+ or MariaDB 10.6+
- HTTPS required
- English + Urdu
- Pakistan + international commerce
- Multi-vendor architecture remains an integration phase
- FM AI remains server-side; API keys never enter browser code

WooCommerce's current server recommendations call for WordPress 6.9+, PHP 8.3+, MySQL 8.0+ or MariaDB 10.6+, HTTPS, and a 256 MB+ WordPress memory limit.

## Configuration boundary

WordPress is the commerce/CMS runtime. GitHub remains the source-control and automation layer.

Production deployment is OFF until the human approval gate is explicitly cleared.

Automatic public publishing is OFF.

Payment processing, real order mutations, seller payouts, shipping and tax integrations remain disabled until their real providers, credentials, tests and approval are in place.

## Required WordPress settings

- Site URL: HTTPS production domain
- Site language: English initially; Urdu enabled for bilingual content
- Timezone: Asia/Karachi
- Permalinks: Post name
- HTTPS enforced
- WooCommerce currency: PKR for the Pakistan store context
- Customer accounts: controlled through WooCommerce settings
- Storefront/admin separation: public storefront must not expose administrative controls
- REST/API credentials: server-side only
- Debugging: disabled in production; enabled only in controlled development environments
- WordPress/WooCommerce core files must not be modified directly

## WooCommerce modules

1. Products and categories
2. Inventory
3. Customers
4. Orders
5. Payments
6. Shipping
7. Tax
8. Sellers / marketplace
9. Notifications
10. Analytics
11. Security
12. Backup and audit

## FM AI boundary

FM AI may read approved catalog data and assist with product discovery/content workflows.

It must not invent:

- price
- stock
- order status
- refunds
- payment state
- seller data
- shipping/delivery facts

Secrets remain server-side.

## GitHub safety

Do not commit:

- `wp-config.php`
- database passwords
- API keys
- payment credentials
- WordPress salts
- OAuth tokens
- production exports containing customer data

Use `wp-config.example.php` only as a non-secret template.

## Current status

WordPress/WooCommerce target configuration: **DEFINED**

WordPress installation and production commerce activation: **NOT CLAIMED**

Production deployment: **OFF**

Human approval gate: **ON**
