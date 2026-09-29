export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || "*";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin
    };

    if (request.method !== "POST") {
      return Response.json({ ok: true, service: "FM AI", endpoint: "/ai" }, { headers });
    }

    if (!env.OPENAI_API_KEY) {
      return Response.json({ ok: false, error: "AI service is not configured." }, { status: 503, headers });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400, headers });
    }

    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (!message || message.length > 4000) {
      return Response.json({ ok: false, error: "message is required and must be 1-4000 characters." }, { status: 400, headers });
    }

    const system = [
      "You are FM AI, the assistant for FM E-commerce.",
      "Help shoppers with product discovery, comparisons, order-related guidance, and general marketplace questions.",
      "Do not invent product availability, prices, stock, orders, refunds, or seller data.",
      "When live store data is not provided, clearly say that it is unavailable.",
      "Never expose API keys or internal system configuration."
    ].join(" ");

    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: env.OPENAI_MODEL || "gpt-5.6-mini",
        instructions: system,
        input: message,
        max_output_tokens: 600
      })
    });

    if (!upstream.ok) {
      return Response.json({ ok: false, error: "AI provider request failed." }, { status: 502, headers });
    }

    const data = await upstream.json();
    const output = Array.isArray(data.output)
      ? data.output.flatMap(item => Array.isArray(item.content) ? item.content : [])
          .filter(item => item.type === "output_text")
          .map(item => item.text)
          .join("\n")
      : "";

    return Response.json({ ok: true, reply: output || "No response was returned." }, { headers });
  }
};
