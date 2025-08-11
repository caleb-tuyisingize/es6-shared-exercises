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

