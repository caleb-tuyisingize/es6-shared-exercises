const assert = require("assert");
if (true) {
  var varX = true;
}
assert.equal(varX, true);
if (true) {
  let letX = true;
}
assert.throws(() => letX, ReferenceError);