export function fmCommercePlugin() {
  return {
    id: "fm-commerce",
    version: "0.1.0",
    entrypoint: new URL("./fm-commerce-runtime.ts", import.meta.url).pathname
  };
}
