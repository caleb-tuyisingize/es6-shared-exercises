//Exercises 1
/*
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

console.log(arrayStats([1, 2, 3, 4, 5])); 

// EXERCISES 2

const oddSquares = (arr)=>{
    const arr2 = [];
    arr.map((a)=>a % 2 !==0 ? arr2.push(a*a): "");
    return arr2;
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));

// EXERCISES 3
const sortProducts = (obj)=>{
    return obj.sort((a,b)=> a.price - b.price)
}
const items = [
    { name: "Laptops", price: 3220 },
    { name: "Phones", price: 1800 },
    { name: "Tablets", price: 2500 },
    { name: "Monitors", price: 3300 }
];
console.log(sortProducts(items));

// EXERCISES 4
 
const nullables = (data)=>{
    for(let item in data){
        if(data[item] === null){
            data[item] = 0;
    }else if(data[item] === undefined){
      data[item] = "";
    }
}
  return data;
}

let nullableData = {
  name: undefined,
  age: null,
  city: "Kigali",
  score: null,
  status: undefined
};

console.log(nullables(nullableData));


// EXERCISES 5

const arrMethods = [0,1,2,3,4]

Array.prototype.myMap= function(callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        if(i in this){
           result.push(callback(this[i],i,this));
        }
    }
return result;
};
console.log("My map:", arrMethods.myMap(x => x*2));
Array.prototype.myForEach = function(callback){
        const result = [];
    for(let i = 0; i < this.length; i++){
        if(i in this){
           callback(this[i],i,this);
        }
    }
}

arrMethods.myForEach((val, i) => console.log(`Index: ${i}: ${val}`));

Array.prototype.myFilter = function(callback){
        const result = [];
    for(let i = 0; i < this.length; i++){
        if(i in this && callback(this[i],i,this)){
           result.push(this[i]);
        }
    }
    return result;
}

console.log("myFilter:", arrMethods.myFilter(x => x % 2 === 0));

const transformKeys = (obj, transformFn)=>{
  const result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = transformFn(key);
      result[newKey] = obj[key];
    }
  }
 
  return result;

}

const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
 const transformKey = (key) => key.toUpperCase();
 const transformObject = transformKeys(inputObject, transformKey);
console.log(transformObject);

const validatePhoneNumber = (number)=>{
  const pattern = /^(\d{10}|\d{3}[- ]\d{3}[- ]\d{4})$/;
  return pattern.test(number)
}
console.log(validatePhoneNumber("1234567890"));
console.log(validatePhoneNumber("123-456-7890"));
console.log(validatePhoneNumber("123 456 7890"));
console.log(validatePhoneNumber("123-45-67890")); 
console.log(validatePhoneNumber("1234-567890"));

//Priority 2 - useful, if you have time

const dupplicatedArray = [1,2,3,3,4,2,4,5,6,4,6];
const duplicatesRemover = (arr)=>{
  return arr.filter((a,b)=> arr.indexOf(a) === b);
}
console.log(duplicatesRemover(dupplicatedArray));

// Refering to the Grobal object by using this keyword
const theObj = {
  name: "GIHUGU",
  age: 23,
  setter: (v) =>{
      this.name = v;
      console.log(`Hello ${this.name} How are you doing??`);
  },
  greet: function(){
    console.log(`Hello ${this.name} How are you doing??`);
  }
}
theObj.greet();

theObj.setter("Mevis");

// Priority 3 - less important Counting Zeros

const countZeros = (n)=>{
  let counter = 0;
  let divisor = 10;

  while(divisor <= n){
    counter += Math.floor(n / divisor);
    divisor *= 10;
  }
  return counter;
}

console.log(countZeros(100));

const mixed = {
  name: "Caleb Mevis",
  name: "Samuel",
  age: 30,
  age: 20,
  isStudent: true,
  isStudent: false,
  courses: ["Math", "Science", "History"]
}
const mapd = new Map()
mapd.set("Object of Caleb",mixed);
console.log(mapd);



const stringConcateFunction = (money = "Two Tousands", curency = "Dollars")=>{
 console.log(`${money} ${curency}`);
}
stringConcateFunction();
*/
/*
const stringCompression = (string)=>{
// const dups = string.split("");
let countLetters = 0;
let compressedLetter = "";
for(let i = 0; i <= string.length; i++){
   if(string[i] === string[i+1]){
     countLetters++;
   }else{
    compressedLetter += string[i] + countLetters;
    countLetters = 1;
   }
}
console.log(compressedLetter)
}
stringCompression("AAAABBBCCDAA");

*/
/*
const reverseText = (text)=>{
  console.log(text.split(" ").map(a=>a.split("").reverse().join("")).join(" "));
}
reverseText("Mevis Tuyisingize")
reverseText("I am the good boy")

*/

const gcd = (a,b)=>{
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}
gcd(2,3);

const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log([].concat(...nestedArray))
console.log(nestedArray.flat())
console.log(nestedArray.flat(Infinity))

const objects = { // Object notation
  name : "Calen"
}

// DOT NOTATION

objects.age = 21;
console.log(objects)

// BLACKETS NOTATION
objects['Who'] = "Ish Kevin";

console.log(objects)

// ONJECT DOT ASSIGN
Object.assign(objects, {City: "Kigali", College: "RP Tumba College"});
console.log(objects)

console.log(objects.hasOwnProperty)