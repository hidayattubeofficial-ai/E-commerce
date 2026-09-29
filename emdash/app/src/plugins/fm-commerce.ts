import { definePlugin } from "emdash";
import products from "../../../../data/products.json";

export function fmCommercePlugin() {
  return definePlugin({
    id: "fm-commerce",
    version: "0.1.0",
    routes: {
      status: {
        handler: async () => ({
          ok: true,
          service: "FM E-commerce",
          mode: "foundation",
          productionDeployment: false,
          approvalGate: true,
          automaticPublishing: false,
          checkout: false,
          payments: false,
          orderMutations: false,
          catalogCount: products.length
        })
      },
      catalog: {
        handler: async () => ({
          ok: true,
          count: products.length,
          products: products.map((product) => ({
            id: product.id,
            slug: product.slug,
            name: product.name,
            category: product.category,
            price: product.price,
            currency: product.currency,
            stock: product.stock,
            active: product.active
          }))
        })
      }
    }
  });
}
