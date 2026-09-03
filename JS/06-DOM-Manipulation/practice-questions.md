# DOM Manipulation Practice

## Beginner

1. Select an element by ID.
2. Select the first element matching `.card`.
3. Change an element's text with `textContent`.
4. Create a new paragraph node.
5. Append a node to a list.

## Intermediate

1. Build a list from an array of strings.
2. Toggle a `completed` class on a list item.
3. Explain the difference between `textContent` and `innerHTML`.
4. Add a remove button to each generated item.
5. Count the children in a list.

## Mini-Project

Build a task list with add, complete, and delete actions. Keep user-entered content safe by writing it with `textContent`.

```js
const item = document.createElement('li');
item.textContent = userText;
list.append(item);
```
