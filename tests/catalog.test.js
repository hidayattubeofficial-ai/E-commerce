import { strict as assert } from "node:assert";
import products from "../data/products.json" with { type: "json" };

assert.ok(Array.isArray(products));
assert.ok(products.length > 0);

for (const product of products) {
  assert.ok(product.id && product.name && product.category);
  assert.equal(typeof product.price, "number");
  assert.equal(typeof product.stock, "number");
  assert.equal(typeof product.active, "boolean");
  assert.ok(product.price >= 0);
  assert.ok(product.stock >= 0);
}

const ids = products.map(product => product.id);
assert.equal(new Set(ids).size, ids.length);
assert.ok(products.some(product => product.active));

console.log("FM catalog tests passed");
