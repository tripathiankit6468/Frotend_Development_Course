# Functions Practice

## Beginner

1. Write a function named `double` that returns twice a number.
2. What is the difference between a parameter and an argument?
3. Convert a regular function into an arrow function.
4. Add a default value to a function parameter.
5. Why is `return` useful?

## Intermediate

1. Write a function that accepts an array and returns its largest number.
2. Pass a function as a callback to `setTimeout`.
3. Explain local scope and global scope.
4. Show the difference between an arrow function with an implicit return and one with an explicit return.
5. Build a closure that remembers a private score.

## Mini-Project

Build a reusable quiz engine. Create functions to select a question, check an answer, update the score, and render feedback. Keep the score private inside a closure.

```js
const createScore = () => {
    let score = 0;
    return {
        addPoint: () => score += 1,
        getScore: () => score
    };
};
```
