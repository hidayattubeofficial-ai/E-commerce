import assert from "node:assert/strict";
import products from "../../../data/products.json" with { type: "json" };

assert.ok(Array.isArray(products));
assert.equal(products.length, 2);
assert.equal(products[0].id, "fm-001");
assert.equal(products[1].id, "fm-002");

for (const product of products) {
  assert.ok(product.slug);
  assert.ok(product.name);
  assert.equal(product.currency, "PKR");
  assert.equal(typeof product.price, "number");
  assert.equal(typeof product.stock, "number");
  assert.equal(typeof product.active, "boolean");
}

console.log("EmDash catalog bridge tests passed.");