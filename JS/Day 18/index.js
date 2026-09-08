```javascript
/*
===========================================================
        CALLBACK HELL IN JAVASCRIPT
===========================================================

Topics Covered:
1. What is a Callback?
2. Synchronous Callback
3. Asynchronous Callback
4. Multiple Callbacks
5. Callback Hell / Pyramid of Doom
6. Error Handling with Callbacks
7. Solving Callback Hell using Promises
8. Solving Callback Hell using Async/Await
9. Complete Comparison

You can save this file as:

    callback-hell.js

Run it using:

    node callback-hell.js
===========================================================
*/


// ========================================================
// 1. WHAT IS A CALLBACK?
// ========================================================

/*
A callback is a function that is passed as an argument
to another function and is executed later.
*/

console.log("\n========== 1. CALLBACK ==========");

function greet(name, callback) {

    console.log("Hello " + name);

    // Calling the callback function
    callback();
}

function goodbye() {

    console.log("Goodbye!");
}

// Passing goodbye function as a callback
greet("Ankit", goodbye);


// ========================================================
// 2. ASYNCHRONOUS CALLBACK
// ========================================================

/*
JavaScript uses callbacks heavily with asynchronous operations.

setTimeout() is an example of an asynchronous operation.

The callback inside setTimeout() executes after the timer
finishes.
*/

console.log("\n========== 2. ASYNCHRONOUS CALLBACK ==========");

function getUser(callback) {

    setTimeout(() => {

        console.log("User data received");

        // Execute callback after getting user data
        callback();

    }, 1000);
}

getUser(() => {

    console.log("Now we can process the user");

});


// ========================================================
// 3. MULTIPLE ASYNCHRONOUS OPERATIONS
// ========================================================

/*
Suppose we have the following operations:

1. Get User
2. Get Orders
3. Get Order Details
4. Make Payment

Each operation depends on the previous operation.

Therefore, we need to execute them one after another.
*/

console.log("\n========== 3. MULTIPLE OPERATIONS ==========");


function getUserData(callback) {

    setTimeout(() => {

        console.log("1. User received");

        callback();

    }, 1000);
}


function getOrders(callback) {

    setTimeout(() => {

        console.log("2. Orders received");

        callback();

    }, 1000);
}


function getOrderDetails(callback) {

    setTimeout(() => {

        console.log("3. Order details received");

        callback();

    }, 1000);
}


function makePayment(callback) {

    setTimeout(() => {

        console.log("4. Payment completed");

        callback();

    }, 1000);
}


// ========================================================
// 4. CALLBACK HELL
// ========================================================

/*
When callbacks are nested inside one another repeatedly,
the code becomes difficult to read and maintain.

This is called CALLBACK HELL.

It is also called:

        Pyramid of Doom

Structure:

getUserData()
    ↓
getOrders()
    ↓
getOrderDetails()
    ↓
makePayment()
*/

console.log("\n========== 4. CALLBACK HELL ==========");


getUserData(() => {

    getOrders(() => {

        getOrderDetails(() => {

            makePayment(() => {

                console.log("All operations completed!");

            });

        });

    });

});


// ========================================================
// 5. REAL-LIFE CALLBACK HELL EXAMPLE
// ========================================================

/*
Imagine an e-commerce application.

We want to perform:

Login
   ↓
Get Profile
   ↓
Get Cart
   ↓
Get Products
   ↓
Make Payment
   ↓
Send Confirmation
*/

console.log("\n========== 5. REAL-LIFE CALLBACK HELL ==========");


function loginUser(username, password, callback) {

    setTimeout(() => {

        console.log("User logged in");

        const user = {
            id: 101,
            username: username
        };

        callback(null, user);

    }, 1000);
}


function getProfile(userId, callback) {

    setTimeout(() => {

        console.log("Profile received");

        const profile = {
            id: userId,
            name: "Ankit"
        };

        callback(null, profile);

    }, 1000);
}


function getCart(userId, callback) {

    setTimeout(() => {

        console.log("Cart received");

        const cart = {
            userId: userId,
            items: ["Laptop", "Mouse", "Keyboard"]
        };

        callback(null, cart);

    }, 1000);
}


function getProducts(cart, callback) {

    setTimeout(() => {

        console.log("Products received");

        const products = cart.items;

        callback(null, products);

    }, 1000);
}


function processPayment(products, callback) {

    setTimeout(() => {

        console.log("Payment processed");

        const payment = {
            amount: 50000,
            status: "success"
        };

        callback(null, payment);

    }, 1000);
}


function sendConfirmation(payment, callback) {

    setTimeout(() => {

        console.log("Confirmation sent");

        callback(null);

    }, 1000);
}


// ========================================================
// 6. CALLBACK HELL WITH ERROR HANDLING
// ========================================================

/*
Node.js commonly uses this callback pattern:

callback(error, result)

If there is no error:

callback(null, result)

If there is an error:

callback(error, null)

Now look at how complicated the code becomes.
*/

console.log("\n========== 6. CALLBACK HELL + ERROR HANDLING ==========");


loginUser("ankit", "1234", (error, user) => {

    if (error) {

        console.log("Login Error:", error);
        return;
    }


    getProfile(user.id, (error, profile) => {

        if (error) {

            console.log("Profile Error:", error);
            return;
        }


        getCart(profile.id, (error, cart) => {

            if (error) {

                console.log("Cart Error:", error);
                return;
            }


            getProducts(cart, (error, products) => {

                if (error) {

                    console.log("Product Error:", error);
                    return;
                }


                processPayment(products, (error, payment) => {

                    if (error) {

                        console.log("Payment Error:", error);
                        return;
                    }


                    sendConfirmation(payment, (error) => {

                        if (error) {

                            console.log("Confirmation Error:", error);
                            return;
                        }


                        console.log("Order completed successfully!");

                    });

                });

            });

        });

    });

});


// ========================================================
// 7. PROBLEMS WITH CALLBACK HELL
// ========================================================

/*
Callback Hell creates several problems:

1. Code becomes difficult to read.
2. Code becomes difficult to maintain.
3. Debugging becomes difficult.
4. Error handling becomes complicated.
5. Adding new operations increases nesting.
6. Code starts looking like a pyramid.

Example:

a(() => {

    b(() => {

        c(() => {

            d(() => {

                e(() => {

                    // Callback Hell

                });

            });

        });

    });

});
*/


// ========================================================
// 8. SOLVING CALLBACK HELL USING PROMISES
// ========================================================

/*
A Promise represents the eventual completion or failure
of an asynchronous operation.

A Promise can be in three states:

1. Pending
2. Fulfilled
3. Rejected
*/

console.log("\n========== 8. PROMISES ==========");


function promiseGetUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("User received");

            resolve();

        }, 1000);

    });
}


function promiseGetOrders() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Orders received");

            resolve();

        }, 1000);

    });
}


function promiseGetOrderDetails() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Order details received");

            resolve();

        }, 1000);

    });
}


function promiseMakePayment() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Payment completed");

            resolve();

        }, 1000);

    });
}


// ========================================================
// 9. PROMISE CHAINING
// ========================================================

/*
Instead of nesting callbacks:

getUser(() => {
    getOrders(() => {
        getOrderDetails(() => {
            makePayment();
        });
    });
});

We can use Promise chaining.
*/

console.log("\n========== 9. PROMISE CHAINING ==========");


promiseGetUser()

    .then(() => {

        return promiseGetOrders();

    })

    .then(() => {

        return promiseGetOrderDetails();

    })

    .then(() => {

        return promiseMakePayment();

    })

    .then(() => {

        console.log("All operations completed using Promises!");

    })

    .catch((error) => {

        console.log("Something went wrong:", error);

    });


// ========================================================
// 10. SHORTER PROMISE CHAIN
// ========================================================

/*
We can make the Promise chain shorter:

promiseGetUser()
    .then(promiseGetOrders)
    .then(promiseGetOrderDetails)
    .then(promiseMakePayment)
    .then(...)
    .catch(...);
*/

console.log("\n========== 10. SHORT PROMISE CHAIN ==========");


promiseGetUser()

    .then(promiseGetOrders)

    .then(promiseGetOrderDetails)

    .then(promiseMakePayment)

    .then(() => {

        console.log("Promise chain completed!");

    })

    .catch((error) => {

        console.log("Error:", error);

    });


// ========================================================
// 11. SOLVING CALLBACK HELL USING ASYNC/AWAIT
// ========================================================

/*
Async/Await is built on top of Promises.

async:

    Used to declare an asynchronous function.

await:

    Pauses execution of that async function until the
    Promise is resolved or rejected.

It makes asynchronous code look like synchronous code.
*/

console.log("\n========== 11. ASYNC/AWAIT ==========");


async function processOrder() {

    try {

        await promiseGetUser();

        await promiseGetOrders();

        await promiseGetOrderDetails();

        await promiseMakePayment();

        console.log("All operations completed using Async/Await!");

    }

    catch (error) {

        console.log("Something went wrong:", error);

    }

}

processOrder();


// ========================================================
// 12. REAL-LIFE ASYNC/AWAIT EXAMPLE
// ========================================================

/*
The callback version looked like this:

loginUser()
    ↓
getProfile()
    ↓
getCart()
    ↓
getProducts()
    ↓
processPayment()
    ↓
sendConfirmation()

With Async/Await, the code becomes much easier to understand.
*/

console.log("\n========== 12. REAL-LIFE ASYNC/AWAIT ==========");


function loginUserPromise(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Login successful");

            resolve({
                id: 101,
                username: username
            });

        }, 1000);

    });

}


function getProfilePromise(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Profile received");

            resolve({
                id: userId,
                name: "Ankit"
            });

        }, 1000);

    });

}


function getCartPromise(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Cart received");

            resolve({
                userId: userId,
                items: ["Laptop", "Mouse", "Keyboard"]
            });

        }, 1000);

    });

}


function getProductsPromise(cart) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Products received");

            resolve(cart.items);

        }, 1000);

    });

}


function processPaymentPromise(products) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Payment successful");

            resolve({
                amount: 50000,
                status: "success"
            });

        }, 1000);

    });

}


function sendConfirmationPromise(payment) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Confirmation email sent");

            resolve();

        }, 1000);

    });

}


// ========================================================
// ASYNC/AWAIT ORDER PROCESS
// ========================================================


async function completeOrder() {

    try {

        // Step 1
        const user = await loginUserPromise(
            "ankit",
            "1234"
        );


        // Step 2
        const profile = await getProfilePromise(
            user.id
        );


        // Step 3
        const cart = await getCartPromise(
            profile.id
        );


        // Step 4
        const products = await getProductsPromise(
            cart
        );


        // Step 5
        const payment = await processPaymentPromise(
            products
        );


        // Step 6
        await sendConfirmationPromise(
            payment
        );


        console.log("\nOrder completed successfully!");

    }

    catch (error) {

        console.log("Order failed:", error);

    }

}

completeOrder();


// ========================================================
// 13. CALLBACK vs PROMISE vs ASYNC/AWAIT
// ========================================================

/*

CALLBACK:

getUser(() => {

    getOrders(() => {

        getPayment(() => {

            console.log("Done");

        });

    });

});


PROMISE:

getUser()

    .then(getOrders)

    .then(getPayment)

    .then(() => {

        console.log("Done");

    })

    .catch(error => {

        console.log(error);

    });


ASYNC/AWAIT:

async function process() {

    try {

        await getUser();

        await getOrders();

        await getPayment();

        console.log("Done");

    }

    catch(error) {

        console.log(error);

    }

}

*/


// ========================================================
// 14. FINAL CONCEPT
// ========================================================

/*

The overall evolution of asynchronous JavaScript is:

        CALLBACK
           ↓
    Multiple Callbacks
           ↓
      CALLBACK HELL
           ↓
        PROMISE
           ↓
    PROMISE CHAINING
           ↓
      ASYNC/AWAIT


IMPORTANT:

Callbacks are NOT bad.

The problem is excessive callback nesting.

Simple callback:

setTimeout(() => {

    console.log("Hello");

}, 1000);

This is completely fine.


Callback Hell:

a(() => {

    b(() => {

        c(() => {

            d(() => {

                e(() => {

                    console.log("Callback Hell");

                });

            });

        });

    });

});


Modern solution:

async function process() {

    try {

        await a();

        await b();

        await c();

        await d();

        await e();

    }

    catch(error) {

        console.log(error);

    }

}


INTERVIEW DEFINITION:

"Callback Hell is a situation where multiple asynchronous
callbacks are nested inside one another, resulting in
deeply indented, difficult-to-read and difficult-to-maintain
code. Promises and async/await are commonly used to solve
callback hell."

===========================================================
END
===========================================================
*/
```
