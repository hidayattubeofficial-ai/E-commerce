import products from "../../data/products.json";

const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff"
};

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const query = url.searchParams.get("q")?.trim().toLowerCase() || "";
  const category = url.searchParams.get("category")?.trim() || "";

  const active = products.filter(product => product && product.active === true);
  const filtered = active.filter(product => {
    const matchesCategory = !category || product.category === category;
    const haystack = [product.name, product.category, product.slug].filter(Boolean).join(" ").toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });

  return new Response(JSON.stringify({
    ok: true,
    count: filtered.length,
    categories: [...new Set(active.map(product => product.category).filter(Boolean))].sort(),
    products: filtered
  }), { headers });
}
