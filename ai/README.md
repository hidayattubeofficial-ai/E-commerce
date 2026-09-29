# FM AI backend

This is the server-side AI layer for the FM E-commerce website.

## What it does

- Keeps `OPENAI_API_KEY` on the server; it is never placed in browser code.
- Provides a simple POST `/ai` endpoint for the storefront assistant.
- Gives the model a marketplace-specific system policy.
- Rejects empty/oversized requests.
- Uses CORS so the website can call the service.
- Does not claim live product/order data unless that data is actually supplied.

## Environment

Configure these Cloudflare Worker secrets/variables:

- `OPENAI_API_KEY` — secret.
- `OPENAI_MODEL` — optional model name.
- `ALLOWED_ORIGIN` — the production website origin.

## Request

```json
{ "message": "Find me a luxury watch under my budget." }
```

## Response

```json
{ "ok": true, "reply": "..." }
```

## Website integration

The storefront should call the deployed Worker endpoint with POST JSON and render the returned `reply`.

The API key must never be added to HTML, JavaScript bundles, localStorage, or public repository files.

Production deployment is intentionally separate from this code addition and remains human-approved.


## Live catalog connection

Set the optional Worker variable `CATALOG_URL` to a trusted HTTPS JSON endpoint owned by the FM marketplace. The Worker fetches the catalog server-side and supplies up to 100 products to FM AI.

Supported JSON shapes:
- Array of products: `[{ "name": "...", "price": 0, "stock": 0 }]`
- Object: `{ "products": [{ "name": "...", "price": 0, "stock": 0 }] }`

Keep the catalog endpoint server-controlled and do not put credentials in the storefront. The AI only treats data returned by this endpoint as live catalog information.
