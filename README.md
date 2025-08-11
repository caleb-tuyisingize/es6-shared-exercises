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
const is like let plus read-only
scalar values are read-only
e.g. a number
const constNum = 0;


🍀 A new find or treasured gem, cherish it!

or a string
const constString = 'I am a const';


🍀 A new find or treasured gem, cherish it!

complex types are NOT fully read-only
array`s items can be changed
arr[0] = 42;


🎈 Mastery in every glimpse.

object`s can be modified
``` 

# EXERCISES ON JSHERO

```bash 
Several variables
Several variables are declared and initialized in 2 program lines:
let city = 'Lubumbashi';
let country = 'Congo';
Exercise
Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.
+ Solution
let flower = 'rose';
let tree = 'maple';
Tests

Reading your code successfully.

flower has a value.

flower has value of 'rose'.

tree has a value.

tree has value of 'maple'.

All tests passed!

Continue
What is x?
Let's practice what we've just learned. Here you have to read code.
Exercise
Which value does x have after execution of the following code?
let x = 'Geeta';
+ Solution
'Geeta'
Tests

Variables
JavaScript programs consist of a series of statements. Each statement performs an elementary operation. By executing many instructions you can finally solve complex tasks. Each statement is written in a line and closed with a semicolon.

An elementary statement is the declaration and initialization of a variable. A variable is a container for a value. The statement
let city = 'Porbandar';
declares a variable with the name city and initializes it with the value 'Porbandar'. The variable is declared with the keyword let. Use the equals sign, the assignment operator, to assign a value to the variable. Note: JavaScript is case-sensitive. city and City are two different variables.
Exercise
Declare a variable firstname and initialize it with the value 'Lata'.
+ Hint
+ Solution
let firstname  = 'Lata'
Tests
```
### LONG EXERCISES

# EXERCISES 1
```bash
 Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }

const arrayStats = (arr)=>{
 let sum = 0;
 for(let num of arr){
 sum +=num;
 }
 let avg = sum/arr.length;
 return {
    sum: sum,
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr)
 }
}

console.log(arrayStats([1, 2, 3, 4, 5]))

```

# EXERCISES 2

```bash
```

