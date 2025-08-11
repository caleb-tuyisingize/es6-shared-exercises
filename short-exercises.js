const assert = require("assert");
if (true) {
  var varX = true;
}
assert.equal(varX, true);
if (true) {
  let letX = true;
}
assert.throws(() => letX, ReferenceError);

let obj = {x: 1};
for (let key in obj) {}
assert.throws(() => key, ReferenceError);