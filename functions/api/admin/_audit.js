export function auditEvent(request, event, details = {}) {
  const identity = request.headers.get("CF-Access-Authenticated-User-Email") || "unknown";
  return {
    timestamp: new Date().toISOString(),
    event,
    identity,
    details
  };
}

export function auditResponse(request, event, details = {}) {
  const record = auditEvent(request, event, details);
  return new Response(JSON.stringify({ ok: true, audit: record }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
