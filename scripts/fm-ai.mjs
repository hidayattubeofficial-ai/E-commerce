import fs from "node:fs";

const cmd = process.argv[2] || "FM:TEST";
const key = process.env.OPENAI_API_KEY;

if (!key) {
  console.log("FM AI: OPENAI_API_KEY not configured; fast local mode.");
  process.exit(0);
}

const body = {
  model: process.env.OPENAI_MODEL || "gpt-5-mini",
  input: [
    {
      role: "system",
      content: "You are FM E-commerce build planner. Return concise, actionable steps only. Never deploy or publish. Respect human approval."
    },
    {
      role: "user",
      content: `Command: ${cmd}. Inspect repository context and propose the smallest safe next action.`
    }
  ]
};

const res = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${key}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
});

if (!res.ok) {
  console.error("FM AI request failed:", res.status);
  process.exit(1);
}

const data = await res.json();
const text = data.output_text || JSON.stringify(data);
fs.mkdirSync("automation", { recursive: true });
fs.writeFileSync("automation/ai-plan.md", `# FM AI Plan\n\nCommand: ${cmd}\n\n${text}\n`);
console.log(text);
