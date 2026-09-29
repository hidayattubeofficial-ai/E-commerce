import assert from "node:assert/strict";
import products from "../../../data/products.json" with { type: "json" };

assert.equal(products.length, 2);
assert.ok(products.every((p) => p.id && p.slug && p.name));
assert.ok(products.every((p) => typeof p.price === "number"));
assert.ok(products.every((p) => typeof p.stock === "number"));
assert.ok(products.every((p) => typeof p.active === "boolean"));
console.log("FM Commerce plugin catalog contract passed.");
