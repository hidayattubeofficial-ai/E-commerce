const FORWARDED_ROLE = "X-FM-Admin-Role";
const ACCESS_EMAIL = "CF-Access-Authenticated-User-Email";
const ACCESS_JWT = "Cf-Access-Jwt-Assertion";

export function requireAdminRole(request, env) {
  const email = request.headers.get(ACCESS_EMAIL);
  const jwt = request.headers.get(ACCESS_JWT);

  if (!email || !jwt) {
    return new Response(JSON.stringify({ ok: false, error: "Admin authentication required" }), {
      status: 401,
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
    });
  }

  // Role mapping must be supplied by a trusted edge/server layer.
  // A public browser request must never be allowed to set this header.
  const role = request.headers.get(FORWARDED_ROLE);
  const expectedRole = env?.FM_ADMIN_ROLE || "admin";

  if (role !== expectedRole) {
    return new Response(JSON.stringify({ ok: false, error: "Admin role required" }), {
      status: 403,
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
    });
  }

  return null;
}
