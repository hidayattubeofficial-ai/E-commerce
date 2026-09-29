export async function onRequestGet(context) {
  const hasAiKey = Boolean(context.env?.OPENAI_API_KEY);
  return Response.json({
    ok: true,
    service: "FM E-commerce",
    catalog: "data/products.json",
    catalogActiveCount: "server-runtime",
    aiConfigured: hasAiKey,
    productionDeployment: false,
    approvalGate: true,
    paymentProcessing: false,
    orderMutations: false,
    sellerPayouts: false
  }, { headers: { "cache-control": "no-store", "x-content-type-options": "nosniff" } });
}
