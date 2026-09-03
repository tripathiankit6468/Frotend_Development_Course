// Closure in JS

let a = 10;
const b = 20;


console.log(a);
console.log(b);

if(true)
{
    let c = 30;
    console.log(c);
    // console.log(a);
    // console.log(b);
}
// console.log(c);

function greet(){
    let d = 40;
    console.log(d);
    // console.log(a);
    // console.log(b);
}
// console.log(d);

greet();

// global scope --> let,const, var all are allowed
// functional --> let,const and var are not allowed
// conditional --> let,const and var are allowed