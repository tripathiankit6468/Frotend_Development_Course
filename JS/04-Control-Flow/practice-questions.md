# Control Flow and Loops Practice

## Beginner

1. Write an `if` statement that checks whether `age` is at least 18.
2. Write an `if...else` statement that reports whether a number is even.
3. Use a `for` loop to print numbers 1 through 5.
4. What does `break` do inside a loop?
5. What does `continue` do inside a loop?
6. When is `switch` useful?

## Intermediate

1. Write a grade function with A, B, C, and failing ranges.
2. Use `for...of` to calculate the sum of an array of prices.
3. Write a `while` loop that stops after three attempts.
4. Validate that a score is finite and between 0 and 100.
5. Explain the difference between `for...of` and `for...in`.

## Mini-Project

Build a checkout summary. Loop through an array of products, calculate the subtotal, apply a discount with conditionals, and show the final amount in the page.

```js
const prices = [12, 8, 15];
let subtotal = 0;
for (const price of prices) subtotal += price;
const total = subtotal >= 30 ? subtotal * 0.9 : subtotal;
```
