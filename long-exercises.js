//Exercises 1

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

const theObj = {
  name: "GIHUGU",
  age: 23,
  greet: function(){
    console.log(`Hello ${this.name} How are you doing??`);
  }
}
theObj.greet();