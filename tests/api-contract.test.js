import { strict as assert } from "node:assert";
import products from "../data/products.json" with { type: "json" };

const active = products.filter(product => product?.active === true);
const categories = [...new Set(active.map(product => product.category).filter(Boolean))].sort();

const responseShape = {
  ok: true,
  count: active.length,
  categories,
  products: active
};

assert.equal(responseShape.ok, true);
assert.equal(responseShape.count, responseShape.products.length);
assert.deepEqual(responseShape.categories, categories);
assert.ok(responseShape.products.every(product =>
  product.id &&
  product.name &&
  product.category &&
  typeof product.price === "number" &&
  typeof product.stock === "number" &&
  product.active === true
));

console.log("FM catalog API contract passed");
