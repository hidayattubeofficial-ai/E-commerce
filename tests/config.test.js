import { strict as assert } from "node:assert";
import config from "../fm.config.json" with { type: "json" };

assert.equal(config.approvalGate, true);
assert.equal(config.deploy, false);
assert.equal(config.mode, "foundation");
assert.equal(config.commands["FM:DEPLOY"], "approval-required");

console.log("FM safety configuration tests passed");
