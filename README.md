### SHORT EXERCISES
# EXERCISES 1
```bash
comparing var with let
WHEN using var for declaring a variable THEN the scope of the variable is the surrounding function
    if (true) {
     var varX = true;
    }
    assert.equal(varX, true);
```
# EXERCISES 2
```bash
WHEN declaring a variable using let THEN the scope is limited to the surrounding block (enclosed in { and })
    if (true) {
    let letX = true;
    }
assert.throws(() => letX, ReferenceError);
```
# EXERCISES 3

```bash
using let
WHEN using let in a for loop THEN the variable is only "visible" inside this loop
    let obj = {x: 1};
for (let key in obj) {}
assert.throws(() => key, ReferenceError);
```
# EXERCISES 4

```bash
WHEN embedding a let variable in a block (using curly braces) THEN the variable is not "visible" outside of it
let variable ;
assert.strictEqual(variable, undefined);
```

# EXERCISES 5

```bash
``` 

