const UNAUTHORIZED = new Response(
  JSON.stringify({ ok: false, error: "Admin authentication required" }),
  { status: 401, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } }
);

export async function onRequest(context) {
  const email = context.request.headers.get("CF-Access-Authenticated-User-Email");
  const jwt = context.request.headers.get("Cf-Access-Jwt-Assertion");

  // Fail closed. These headers are expected only after Cloudflare Access
  // authenticates the request. No browser-supplied credentials are accepted.
  if (!email || !jwt) return UNAUTHORIZED;

  return context.next();
}
