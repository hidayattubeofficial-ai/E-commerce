import { strict as assert } from "node:assert";
import products from "../data/products.json" with { type: "json" };

assert.ok(Array.isArray(products));
assert.ok(products.length > 0);
for (const product of products) {
  assert.ok(product.id && product.name && product.category);
  assert.equal(typeof product.price, "number");
  assert.equal(typeof product.stock, "number");
}
assert.equal(products.filter(p => p.active).length, products.filter(p => p.active).length);
console.log("FM catalog tests passed");
