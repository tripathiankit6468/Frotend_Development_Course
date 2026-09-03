# JavaScript Fundamentals Practice

## Beginner

1. When should you use `const` and when should you use `let`?
2. What is the type of `42`, `'42'`, `true`, `null`, and `undefined`?
3. Write a template literal that says `Hello, Ada!` using a `name` variable.
4. What is the difference between `===` and `==`?
5. Convert the string `'19.5'` into a number.
6. Calculate the total price of three items costing 12 each.

## Intermediate

1. Explain why `'5' + 2` and `'5' - 2` produce different results.
2. Create an object named `student` with `name`, `age`, and `isEnrolled` properties.
3. Use `&&` to check whether a user is logged in and has an administrator role.
4. Write a function that returns the next lesson number.
5. Safely display a calculated result using `textContent`.
6. Explain why `var` is generally avoided in modern JavaScript.

## Advanced Mini-Project

Create an expense calculator with inputs for description, amount, quantity, and tax percentage. Validate that the numeric values are finite, calculate the total, and display a readable message. Do not use `innerHTML` for the result.

## Answer Examples

```js
const name = 'Ada';
console.log(`Hello, ${name}!`);

const amount = Number('12');
const quantity = Number('3');
const total = amount * quantity;

const student = {
    name: 'Ada',
    age: 20,
    isEnrolled: true
};
```
