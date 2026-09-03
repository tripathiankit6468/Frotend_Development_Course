const user = 
{
    name : "Ankit",
    age : 22,
    emailID : "tripathi@gmail.com",
    amount : 1000,
    greeting : function()
    {
        console.log("Hello! Ankit , How are you ?");
        return 7;
    }
}

// console.log(user);

// console.log(typeof user);

// console.log(user.age);

user.pincode = 111002;
// console.log(user);

user.amount = 2000;
// console.log(user);

delete user.pincode;
// console.log(user);

// console.log(Object.keys(user));

// console.log(Object.values(user));

// for(let keys in user)
// {
//     console.log(keys, user[keys]);
// }

// destructuring
const {name, age, emailID, amount} = user;
// console.log(name, age, emailID, amount);

const nums = [10,20,30,40,50];
const [first,second] = nums;

// console.log(first,second);

// for of loop 

// for(let keys of Object.keys(user))
// {
//     console.log(keys);
// }

// for(let values of Object.values(user))
// {
//     console.log(values);
// }

// for(let [keys, values] of Object.entries(user))
// {
//     console.log(keys,values);
// }

// calling the function
const val = user.greeting();
console.log(val);
