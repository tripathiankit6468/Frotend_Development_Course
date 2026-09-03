# Events Practice

## Beginner

1. What does `addEventListener` do?
2. Add a click listener to a button.
3. Which event fires while a user types in a text field?
4. Which event fires when a form is submitted?
5. What does `preventDefault` do?

## Intermediate

1. Read `event.target` and display its text.
2. Explain event bubbling.
3. Create a delegated click listener for a list.
4. Compare `input` and `change` events.
5. Add a keydown listener that responds to Enter.

## Mini-Project

Build a feedback form that validates its fields, prevents the default reload, displays a success message, and records submitted entries in a list. Use event delegation to remove entries.

```js
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Validate and render the submission.
});
```
