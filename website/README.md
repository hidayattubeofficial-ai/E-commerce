# FM E-commerce website AI

`ai-chat.html` is the first website-facing FM AI component.

## Connect it

1. Deploy `ai/worker.js` as the FM AI Cloudflare Worker.
2. Set the Worker secret `OPENAI_API_KEY`.
3. Set `ALLOWED_ORIGIN` to the production storefront origin.
4. Point `FM_AI_ENDPOINT` to the deployed Worker URL, or route `/ai` to that Worker.
5. Embed the chat component into the real storefront when the storefront UI is ready.

The browser sends only the user's message. The OpenAI key stays server-side.

Live catalog/order tools can be connected later to the server-side AI layer without exposing credentials in the browser.

Production deployment remains human-approved.
