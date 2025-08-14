
Array.prototype.myMaps = function(callback){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(i in this){
      result.push(callback(this[i], i, this));
    }
  }
  return result;
}
const nyesa = [2,3,4,8,1,2,2];
console.log(nyesa.myMaps(a => a*2));

Array.prototype.myFilters = function(callback){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(i in this && callback(this[i], i, this)){
      result.push(this[i]);
    }
  }
  return result;
} 

console.log(nyesa.myFilters((a, b)=> nyesa.indexOf(a) === b))


Array.prototype.myForEachs = function(callback){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(i in this){
      callback(this[i], i, this);
    }
  }
}
nyesa.myForEachs((itema, index) => console.log(`Index: ${index}, Items: ${itema}`))



console.log(nyesa.reduce((a,b) => a+b,0));

var a = 1, b = 2;
[a, b] = [b, a]
console.log(a)
console.log(b)

console.log("--------_______________--------");

const counterFunction = ()=>{
    let counter = 0;

    return function callback(){
     counter += 1;
     return counter;
    };
}
const counter = counterFunction();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());