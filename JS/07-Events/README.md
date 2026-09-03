# Events and Event Handling

## 1. Topic Overview

An event is something that happens in the browser, such as a click, input, form submission, key press, scroll, or change. Event listeners connect those actions to JavaScript behavior.

## 2. Why It Is Important

Events are the bridge between a user and an interface. They let applications respond immediately while keeping behavior separate from HTML markup.

## 3. Important Concepts

- Register listeners with `addEventListener`.
- Read the event object for details such as `target`, `key`, and pointer information.
- Use `preventDefault` when a browser default should be replaced, such as form navigation.
- Events usually bubble from a target toward its ancestors.
- Event delegation listens on a parent and checks `event.target`, which works well for dynamic lists.
- Common events include `click`, `input`, `change`, `submit`, `keydown`, and `scroll`.

## 4. Folder Structure

```text
JS/07-Events/
├── index.html
├── styles.css
├── script.js
├── practice-questions.md
└── README.md
```

## 5. Complete Code

Type feedback to trigger `input`. Submit the form to trigger `submit`. Click a log entry to remove it through event delegation on the list.

## 6. Code Explanation

The `input` listener updates live character feedback. The submit listener prevents a page reload. The list has one listener for all current and future `li` elements; this is event delegation.

## 7. Common Mistakes

- Calling a handler while registering it: use `addEventListener('click', handleClick)`.
- Forgetting `preventDefault` for a custom form workflow.
- Reading `event.target` as though it is always the element with the listener.
- Adding duplicate listeners every time a component renders.
- Ignoring keyboard and focus behavior for interactive controls.

## 8. Practice Task

Build an accessible counter with increment, decrement, and reset buttons. Add keyboard support and log each action with event delegation.

## 9. README Update

Add: **Events and Event Handling:** event listeners, event objects, click/input/change/submit events, preventDefault, bubbling, and event delegation.
