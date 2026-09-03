# JavaScript Fundamentals

## 1. Topic Overview

This module introduces the building blocks of JavaScript: variables, primitive data types, objects, operators, expressions, template literals, and explicit type conversion.

## 2. Why It Is Important

Every interactive web application depends on values and operations. Understanding these basics helps you read code, prevent type-related bugs, and prepare for conditions, loops, functions, and DOM programming.

## 3. Important Concepts

### Variables

Use `const` when the variable binding should not be reassigned. Use `let` when it will change. Avoid `var` in new code because its function scope can make code harder to reason about.

```js
const courseName = 'Frontend Development';
let lessonNumber = 3;
lessonNumber += 1;
```

### Data Types

Common primitive types are `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`. Objects and arrays store collections of values.

```js
const title = 'JavaScript';
const score = 95;
const isPublished = true;
const missingValue = undefined;
const emptyValue = null;
```

### Operators

Arithmetic operators calculate values, comparison operators compare values, and logical operators combine conditions.

```js
const total = 10 + 5;
const isPassing = total >= 10;
const canContinue = isPassing && total < 20;
```

Prefer strict equality (`===`) because it compares both value and type.

### Type Conversion

Form input values are strings. Convert them before doing numeric calculations.

```js
const quantity = Number('3');
const label = String(42);
```

## 4. Folder Structure

```text
JS/03-Basics-Fundamentals/
├── index.html
├── styles.css
├── script.js
├── practice-questions.md
└── README.md
```

## 5. Complete Code

Open `index.html` in a browser and press **Run example**. The HTML links `styles.css` and loads `script.js` at the end of the body.

The JavaScript creates a learner object, calculates the next lesson with arithmetic, checks the name with a boolean expression, and displays a template literal through the DOM.

## 6. Code Explanation

- `querySelector` finds the button and output elements.
- `const learner` stores related values in an object.
- `formatSummary` groups reusable logic into a function.
- `completedLessons + 1` demonstrates arithmetic.
- The conditional expression prevents an empty name from producing a misleading message.
- `textContent` safely writes plain text into the output element.
- `addEventListener` runs the function after a click.

## 7. Common Mistakes

- Reassigning a `const` variable. Use `let` if reassignment is required.
- Using `==` when the type matters. Prefer `===`.
- Adding strings instead of numbers: `"2" + "3"` produces `"23"`.
- Forgetting that `typeof null` is the historical value `"object"`.
- Trusting form values to already be numbers. Use `Number(value)`.
- Trying to access an element before the browser has parsed it.

## 8. Practice Task

Build a small expense calculator. Store an item name, price, quantity, and tax rate in variables. Convert numeric strings with `Number`, calculate the final cost, and show the result in an `<output>` element.

## 9. README Update

Add this entry to the course README:

- **JavaScript Fundamentals:** variables, data types, operators, template literals, objects, strict equality, and type conversion.
