const unauthorized = (message = "Admin authentication required") =>
  new Response(JSON.stringify({ ok: false, error: message }), {
    status: 401,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });

export async function onRequest(context) {
  const request = context.request;

  // Cloudflare Access must authenticate the request before it reaches the
  // admin API. The middleware intentionally fails closed.
  const email = request.headers.get("CF-Access-Authenticated-User-Email");
  const jwt = request.headers.get("Cf-Access-Jwt-Assertion");

  if (!email || !jwt) return unauthorized();

  // Do not treat a browser-supplied email alone as proof of identity.
  // Full JWT signature/audience validation belongs at the deployed Access
  // boundary; this repository does not contain an Access signing secret.
  return context.next();
}
