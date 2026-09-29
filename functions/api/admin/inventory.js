import products from "../../../data/products.json";

export async function onRequestGet() {
  return new Response(JSON.stringify({
    ok: true,
    mode: "read-only",
    inventory: products.map(p => ({
      id: p.id,
      name: p.name,
      stock: p.stock,
      active: p.active
    }))
  }), {
    headers: {"content-type":"application/json; charset=utf-8","cache-control":"no-store"}
  });
}
