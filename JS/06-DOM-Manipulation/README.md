# DOM Manipulation

## 1. Topic Overview

The Document Object Model (DOM) is the browser's object representation of an HTML document. JavaScript can find, read, create, update, and remove DOM nodes.

## 2. Why It Is Important

DOM manipulation turns a static page into an interface. It powers lists, messages, forms, menus, and any content that changes without a full page reload.

## 3. Important Concepts

- Select with `getElementById`, `querySelector`, and `querySelectorAll`.
- Read or update plain text with `textContent`.
- Create nodes with `document.createElement`.
- Add nodes with `append` or `appendChild`.
- Prefer `textContent` for user input; avoid inserting untrusted input with `innerHTML`.
- Use `classList` to add, remove, and toggle classes.

## 4. Folder Structure

```text
JS/06-DOM-Manipulation/
├── index.html
├── styles.css
├── script.js
├── practice-questions.md
└── README.md
```

## 5. Complete Code

Enter an item and press **Add item**. The script creates an `li`, writes safe text into it, and appends it to the list.

## 6. Code Explanation

`querySelector` returns the first matching element. `trim` removes accidental whitespace. `createElement` creates a node that is not visible until appended. `textContent` treats the value as text, so HTML typed by a user is not interpreted as markup.

## 7. Common Mistakes

- Selecting an element before it exists.
- Using `innerHTML` with untrusted user input.
- Forgetting to append a newly created element.
- Replacing the whole list when only one item needs updating.
- Assuming `querySelectorAll` returns a live collection.

## 8. Practice Task

Create a reading list where each book can be added and removed. Use `createElement`, `textContent`, `append`, and a remove button for each book.

## 9. README Update

Add: **DOM Manipulation:** selecting nodes, reading and writing text, creating elements, appending nodes, class manipulation, and safe user content.
