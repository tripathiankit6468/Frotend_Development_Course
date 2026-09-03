# CSS Basics & Selectors - Practice Questions

This file contains practice questions for the CSS Basics & Selectors topic. Questions are organized into three difficulty levels with detailed answer keys.

## Level 1: Beginner Questions

### Question 1.1: What is CSS?
**Difficulty:** ⭐ Easy

Write a brief explanation (2-3 sentences) of what CSS is and why it's important.

**Answer:**
CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and animations. CSS is important because it separates styling from HTML structure, making code cleaner and easier to maintain.

---

### Question 1.2: Three Ways to Add CSS
**Difficulty:** ⭐ Easy

Name and describe the three ways to add CSS to an HTML page.

**Answer:**

1. **Inline CSS** - CSS is written directly in HTML tags using the `style` attribute
   ```html
   <p style="color: red;">Red text</p>
   ```
   - Quick but not recommended for large projects
   - Makes HTML messy

2. **Internal CSS** - CSS is written inside `<style>` tags in the HTML head
   ```html
   <head>
       <style>
           p { color: red; }
       </style>
   </head>
   ```
   - Better than inline
   - Limited to one page only

3. **External CSS** - CSS is in a separate `.css` file linked to HTML
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
   - Best practice
   - Reusable across multiple pages
   - Better performance (browser caching)

---

### Question 1.3: CSS Rule Structure
**Difficulty:** ⭐ Easy

Write the correct CSS rule structure and identify the parts.

**Answer:**

```css
selector {
    property: value;
}
```

Example:
```css
p {
    color: blue;
    font-size: 16px;
}
```

**Parts:**
- **selector** (`p`) - Targets which elements to style
- **property** (`color`, `font-size`) - What to style
- **value** (`blue`, `16px`) - The style value
- **declaration** - Property and value together (`color: blue;`)

---

### Question 1.4: Element vs Class vs ID Selector
**Difficulty:** ⭐ Easy

Write one CSS rule for each selector type (element, class, ID) and explain when to use each.

**Answer:**

```css
/* Element Selector - targets all <p> elements */
p {
    color: blue;
}

/* Class Selector - targets all elements with class "highlight" */
.highlight {
    background-color: yellow;
}

/* ID Selector - targets element with ID "header" */
#header {
    background-color: navy;
}
```

**When to use:**
- **Element** - Style all instances of an element (p, h1, button, etc.)
- **Class** - Style multiple different elements the same way (reusable)
- **ID** - Style one unique element on the page (use sparingly)

---

### Question 1.5: Box Model Components
**Difficulty:** ⭐ Easy

Name and describe the four parts of the CSS box model.

**Answer:**

1. **Content** - The actual content (text, image)
   - Innermost layer

2. **Padding** - Space INSIDE between content and border
   - Creates space within the element
   - Included in background color

3. **Border** - Line around the element
   - Optional, can be any color and style
   - Separates padding from margin

4. **Margin** - Space OUTSIDE between border and other elements
   - Separates elements from each other
   - Transparent (shows background behind)

**Visual:**
```
┌─────────────────────────┐
│      MARGIN             │
│  ┌─────────────────┐    │
│  │     BORDER      │    │
│  │  ┌───────────┐  │    │
│  │  │ PADDING   │  │    │
│  │  │ CONTENT   │  │    │
│  │  └───────────┘  │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

---

### Question 1.6: Calculate Box Width
**Difficulty:** ⭐ Easy

If an element has:
- Content width: 200px
- Padding: 10px on each side
- Border: 5px on each side
- Margin: 15px on each side

What is the total width?

**Answer:**

Total Width = Content + (Padding × 2) + (Border × 2) + (Margin × 2)
Total Width = 200 + (10 × 2) + (5 × 2) + (15 × 2)
Total Width = 200 + 20 + 10 + 30
**Total Width = 260px**

Note: Margin is outside the box, so sometimes it's not included in the actual element width, but it affects spacing.

---

## Level 2: Intermediate Questions

### Question 2.1: CSS Specificity
**Difficulty:** ⭐⭐ Medium

Rank these selectors by specificity (highest to lowest):
```
a) p { }
b) .highlight { }
c) #main { }
d) p.highlight { }
e) #main p { }
```

**Answer:**

**Ranking (highest to lowest specificity):**
1. **e) #main p { }** - 101 points (1 ID + 1 element)
2. **c) #main { }** - 100 points (1 ID)
3. **d) p.highlight { }** - 11 points (1 element + 1 class)
4. **b) .highlight { }** - 10 points (1 class)
5. **a) p { }** - 1 point (1 element)

**Rule:** The selector with highest specificity wins.

---

### Question 2.2: Cascade Rule
**Difficulty:** ⭐⭐ Medium

What color will the paragraph be?

```css
p { color: blue; }
p { color: red; }
```

Why?

**Answer:**

The paragraph will be **red**.

**Reason:** This is the **cascade rule**. When two selectors have the same specificity, the last rule wins because it comes later in the CSS file and overrides the previous rule.

```css
p { color: blue; }   /* First rule */
p { color: red; }    /* WINS - comes last */
```

---

### Question 2.3: Box-sizing Property
**Difficulty:** ⭐⭐ Medium

What's the difference between `box-sizing: content-box;` and `box-sizing: border-box;`?

**Answer:**

**`box-sizing: content-box;` (DEFAULT)**
```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px;
}
/* Total width = 200 + (20×2) + (5×2) = 250px */
```
- Width property = content width ONLY
- Padding and border are added to the width

**`box-sizing: border-box;` (RECOMMENDED)**
```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px;
}
/* Total width = 200px (includes padding and border) */
```
- Width property = content + padding + border
- Total size stays 200px

**Best Practice:**
```css
* {
    box-sizing: border-box;
}
```
This makes it easier to predict element sizes.

---

### Question 2.4: Hover Pseudo-class
**Difficulty:** ⭐⭐ Medium

Write CSS that changes a button to red when hovered over, with a smooth transition.

**Answer:**

```css
button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;  /* Smooth transition */
}

button:hover {
    background-color: red;
}
```

**Explanation:**
- `transition: background-color 0.3s;` - Makes the color change smooth over 0.3 seconds
- `:hover` - Pseudo-class that applies when user hovers over element
- `cursor: pointer;` - Changes mouse cursor to pointer when hovering

---

### Question 2.5: Attribute Selectors
**Difficulty:** ⭐⭐ Medium

Write CSS to style different input types:
- Text inputs: blue border
- Email inputs: green border
- Password inputs: red border

**Answer:**

```css
input[type="text"] {
    border: 2px solid blue;
    padding: 8px;
    border-radius: 4px;
}

input[type="email"] {
    border: 2px solid green;
    padding: 8px;
    border-radius: 4px;
}

input[type="password"] {
    border: 2px solid red;
    padding: 8px;
    border-radius: 4px;
}
```

**Usage:**
```html
<input type="text" placeholder="Username">
<input type="email" placeholder="Email">
<input type="password" placeholder="Password">
```

---

### Question 2.6: CSS Shorthand Properties
**Difficulty:** ⭐⭐ Medium

Rewrite this CSS using shorthand properties:

```css
.box {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
}
```

**Answer:**

```css
.box {
    margin: 10px 20px;      /* top/bottom left/right */
    padding: 5px 10px;      /* top/bottom left/right */
}
```

**Or with 4 values:**
```css
.box {
    margin: 10px 20px 10px 20px;    /* top right bottom left */
    padding: 5px 10px 5px 10px;     /* top right bottom left */
}
```

**Shorthand rules:**
- 1 value: applies to all sides
- 2 values: first to top/bottom, second to left/right
- 4 values: top, right, bottom, left (clockwise)

---

## Level 3: Advanced Challenges

### Challenge 3.1: Create a Styled Card Component
**Difficulty:** ⭐⭐⭐ Advanced

Create HTML and CSS for a professional looking card that:
1. Has a title, subtitle, and description
2. Has a hover effect that lifts the card
3. Has a button at the bottom
4. Uses a box shadow
5. Has a gradient background for the title

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Card Component</title>
    <link rel="stylesheet" href="card.css">
</head>
<body>
    <div class="card">
        <div class="card-header">
            <h2>Card Title</h2>
            <p class="card-subtitle">Subtitle text</p>
        </div>
        <div class="card-body">
            <p>This is the description of the card. It can contain any content you want to display.</p>
        </div>
        <div class="card-footer">
            <button class="card-button">Learn More</button>
        </div>
    </div>
</body>
</html>
```

**CSS (card.css):**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #f5f5f5;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);  /* Lift effect */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
}

.card-header h2 {
    margin-bottom: 5px;
    font-size: 1.5em;
}

.card-subtitle {
    font-size: 0.9em;
    opacity: 0.9;
}

.card-body {
    padding: 20px;
}

.card-footer {
    padding: 0 20px 20px;
}

.card-button {
    background-color: #667eea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
    width: 100%;
}

.card-button:hover {
    background-color: #764ba2;
}
```

**Key Features:**
- Gradient header background
- Shadow effect with hover enhancement
- Smooth transform on hover (lifts up)
- Responsive padding
- Styled button that spans full width
- Clean, professional look

---

### Challenge 3.2: CSS Layout with Flexbox Basics
**Difficulty:** ⭐⭐⭐ Advanced

Create a simple navigation bar using CSS with:
1. Logo on the left
2. Menu items in the center
3. Login button on the right
4. Hover effects on menu items
5. Responsive (stacks on mobile)

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Navigation Bar</title>
    <link rel="stylesheet" href="navbar.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">MyBrand</div>
            <ul class="nav-menu">
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#" class="nav-link">About</a></li>
                <li><a href="#" class="nav-link">Services</a></li>
                <li><a href="#" class="nav-link">Contact</a></li>
            </ul>
            <button class="login-btn">Login</button>
        </div>
    </nav>
</body>
</html>
```

**CSS (navbar.css):**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar {
    background-color: #333;
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

.logo {
    color: white;
    font-size: 1.5em;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 3px;
}

.login-btn {
    background-color: #667eea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-btn:hover {
    background-color: #764ba2;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-menu {
        gap: 15px;
    }
    
    .nav-container {
        flex-wrap: wrap;
    }
}
```

**Key Features:**
- Flexbox layout for alignment
- Sticky positioning
- Hover effects on navigation links
- Responsive design
- Clean, modern look

---

### Challenge 3.3: Debugging CSS Issues
**Difficulty:** ⭐⭐⭐ Advanced

Here's HTML and CSS with several bugs. Identify and fix them.

**Broken HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Buggy Page</title>
    <link href="styles.css">
</head>
<body>
    <div class="box">
        <h1>Title</h1>
        <p>Some text here</p>
    </div>
</body>
</html>
```

**Broken CSS:**
```css
.box {
    width: 100;
    padding: 10px;
    margin 20px;
    background-color: red;
    border: solid blue;
}

p {
    color: 123456;
}

h1
    font-size: 2em;
}
```

**Issues Found and Fixed:**

**HTML Issues:**
1. **Missing `rel` attribute** - `<link>` should have `rel="stylesheet"`
   ```html
   <!-- WRONG -->
   <link href="styles.css">
   
   <!-- CORRECT -->
   <link rel="stylesheet" href="styles.css">
   ```

**CSS Issues:**
1. **Missing unit on width** - `width: 100;` should be `width: 100px;`
2. **Missing colon** - `margin 20px;` should be `margin: 20px;`
3. **Wrong color format** - `color: 123456;` should be `color: #123456;` (hex color)
4. **Missing opening brace** - `h1` should be `h1 {`

**Corrected Code:**

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Buggy Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="box">
        <h1>Title</h1>
        <p>Some text here</p>
    </div>
</body>
</html>
```

**CSS:**
```css
.box {
    width: 100px;           /* Fixed: added unit */
    padding: 10px;
    margin: 20px;           /* Fixed: added colon */
    background-color: red;
    border: solid blue;
}

p {
    color: #123456;         /* Fixed: added # for hex color */
}

h1 {                        /* Fixed: added opening brace */
    font-size: 2em;
}
```

---

## Self-Check Quiz

Answer these questions to check your understanding:

1. ✅ Can you explain the difference between padding and margin?
2. ✅ Do you understand CSS specificity and how it works?
3. ✅ Can you write and link an external CSS file correctly?
4. ✅ Can you use different selector types (element, class, ID)?
5. ✅ Can you calculate total box width including box model properties?
6. ✅ Do you know when to use inline, internal, and external CSS?
7. ✅ Can you use pseudo-classes like :hover and :first-child?
8. ✅ Can you debug common CSS errors?

If you answered "yes" to all questions, you've mastered CSS Basics & Selectors! 🎉

---

## Practice Exercises

### Exercise 1: Fix the Box Layout
Create a webpage that shows the box model with proper spacing.

### Exercise 2: Style Multiple Elements
Create a page with at least 5 different selector types being used.

### Exercise 3: Create a Mini Portfolio
Build a simple portfolio with styled sections using CSS.

### Exercise 4: Implement Hover Effects
Create interactive elements with smooth hover effects.

---

**Created:** 2024  
**Topic:** CSS Basics & Selectors  
**Difficulty:** Beginner to Intermediate
