// function

function greets()
{
    console.log("Hello, Ankit Tripathi");
}

function sum(num1,num2)
{
    const sum = num1 + num2;
    console.log(sum);
}

greets();
sum(10,20);
sum(99,88);

// rest operator
function addSum(...num)
{
    let sum = 0;
    for(let val of num)
    {
        sum += val;
    }
    console.log(sum);
}

addSum(2);
addSum(20,30);
addSum(22,44,96);
addSum(20,40,60,80);

// function expression 
const multiply = function(n1,n2)
{
   return n1 * n2;
}

console.log(multiply(5,4));

// arrow function
const add = (num1,num2) => {
    return num1 + num2;
}
console.log(add(50,100));

const sqNumber = num => num * num;

console.log(sqNumber(19));

// For objects
const user = () => ({name:"John",age:24});
console.log(user());

// IIFE --> Immediately Invoked Function 
(function printStars() {
    console.log("*****");
})();

// callback function

function greet() {
    console.log("Hello How are you ?");
}

function meet(callback){
    console.log("Main badhiyan hoon...");
    callback();
}

meet(greet);
