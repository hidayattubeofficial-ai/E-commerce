export async function onRequestGet() {
  return Response.json({
    ok: true,
    service: "FM E-commerce",
    ai: Boolean(globalThis?.process) ? false : "configured-by-runtime",
    catalog: "data/products.json",
    productionDeployment: false,
    approvalGate: true
  }, { headers: { "cache-control": "no-store" } });
}
