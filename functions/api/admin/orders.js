export async function onRequestGet() {
  return new Response(JSON.stringify({
    ok: true,
    mode: "read-only",
    orders: []
  }), {
    headers: {"content-type":"application/json; charset=utf-8","cache-control":"no-store"}
  });
}
