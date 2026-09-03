# Control Flow and Loops

## 1. Topic Overview

Control flow determines which statements run and in what order. JavaScript uses `if`, `else`, `switch`, and loops to make decisions and repeat work.

## 2. Why It Is Important

Applications constantly react to conditions: permissions, validation, loading states, prices, and user choices. Loops also prevent repetitive code when processing lists.

## 3. Important Concepts

- `if`, `else if`, and `else` choose between conditions.
- `switch` is useful when comparing one value against several known cases.
- `for`, `for...of`, and `while` repeat work.
- `break` exits a loop; `continue` skips the current iteration.
- Validate values before comparing them.

```js
for (const topic of ['HTML', 'CSS', 'JavaScript']) {
    console.log(topic);
}
```

## 4. Folder Structure

```text
JS/04-Control-Flow/
├── index.html
├── styles.css
├── script.js
├── practice-questions.md
└── README.md
```

## 5. Complete Code

Open `index.html`, enter a score, and select **Check score**. The script converts the input string into a number and uses an `if` chain to select the result.

## 6. Code Explanation

`getGrade` is a reusable decision function. `Number.isFinite` rejects invalid numeric input. The comparisons are ordered from highest score to lowest. The `for...of` loop demonstrates reading each item in an array.

## 7. Common Mistakes

- Writing `if (score = 80)` instead of a comparison.
- Creating an infinite `while` loop by never changing its condition.
- Forgetting `break` in a `switch` statement.
- Comparing raw input without converting it from a string.
- Using `for...in` for array values instead of `for...of`.

## 8. Practice Task

Create a shipping calculator with free shipping above a threshold, different prices for regions, and a loop that lists each item in an order.

## 9. README Update

Add: **Control Flow and Loops:** conditions, switch statements, `for`, `while`, `for...of`, `break`, `continue`, and input validation.
