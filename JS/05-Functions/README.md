# JavaScript Functions

## 1. Topic Overview

A function is a reusable block of code. Functions can accept parameters, return values, use default parameters, and be passed as callbacks.

## 2. Why It Is Important

Functions keep applications understandable and reduce duplication. They are the foundation of event handlers, array methods, modules, and reusable UI behavior.

## 3. Important Concepts

```js
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
```

Cover declarations, expressions, arrow functions, parameters, return values, default values, scope, hoisting, callbacks, and closures. A closure remembers variables from its creation scope, as shown by `createCounter` in `script.js`.

## 4. Folder Structure

```text
JS/05-Functions/
├── index.html
├── styles.css
├── script.js
├── practice-questions.md
└── README.md
```

## 5. Complete Code

Enter a name and press **Create greeting**. The click callback calls an arrow function, which calls the reusable `createGreeting` function.

## 6. Code Explanation

`createGreeting` has a default parameter and returns a template literal. `announceGreeting` receives a callback argument from the click event. `createCounter` demonstrates closure because the returned function retains access to `count`.

Function declarations are hoisted, but function expressions and arrow functions should be used after their declaration.

## 7. Common Mistakes

- Forgetting `return` when a value is needed.
- Confusing a parameter with the argument passed at call time.
- Expecting an arrow function with braces to return implicitly.
- Creating global variables accidentally.
- Calling a function immediately instead of passing it as an event callback.

## 8. Practice Task

Create a reusable `calculateTip(total, percentage)` function and connect it to a form. Add a second function that formats the result as currency.

## 9. README Update

Add: **Functions:** declarations, expressions, arrow functions, parameters, return values, scope, callbacks, hoisting, and closures.
