//  for each 

const arr = [10,20,30,5,90];

// arr.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
// })

// let sum = 0;
// arr.forEach((value)=>{
//     sum += value;
// })

// console.log(sum);

// filter

// const newarr = arr.filter((value)=> value >20);
// console.log(newarr);

// arr.filtering = function(compare)
// {
//     const ans = [];
//     for(let num of this){
//         if(compare(num))
//         {
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newarr = arr.filtering((value)=> value >20);
// console.log(newarr);

// not recommended to modify the prototype of built-in objects like Array, as it can lead to unexpected behavior in your code and conflicts with other libraries. Instead, you can create a separate function or use existing methods like `filter`.
// Array.prototype.filtering = function(compare)
// {
//     const ans = [];
//     for(let num of this){
//         if(compare(num))
//         {
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newarr = arr.filtering((value)=> value >20);
// console.log(newarr);

// map()

const arr1 = [1,2,3,4,5,6,7,8,9];

const square = arr1.map((num) => num*num);
console.log(square);