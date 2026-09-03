# Practice Questions - HTML Basics & Document Structure

## Level 1: Beginner (Easy)

### 1. HTML Structure Quiz
**Question:** What are the four main parts of an HTML document?

**Answer:** DOCTYPE, `<html>`, `<head>`, and `<body>`

---

### 2. Tag Purpose
**Question:** What is the purpose of the `<head>` tag?

**Answer:** The `<head>` tag contains metadata about the page that is NOT visible to users, such as:
- Page title (`<title>`)
- Character encoding (`<meta>`)
- Links to CSS files
- JavaScript code
- Viewport settings for responsive design

---

### 3. Heading Hierarchy
**Question:** What is the difference between h1, h2, and h3?

**Answer:**
- `<h1>` - Main heading (most important, use once per page)
- `<h2>` - Subheading
- `<h3>` - Sub-subheading

---

### 4. Tag Types
**Question:** Identify which of the following are self-closing tags:
- a) `<p>`
- b) `<img>`
- c) `<input>`
- d) `<div>`

**Answer:** b) `<img>` and c) `<input>`

---

### 5. DOCTYPE Importance
**Question:** Why is `<!DOCTYPE html>` necessary?

**Answer:**
- Tells the browser this is an HTML5 document
- Ensures the page renders in standards mode
- Improves cross-browser compatibility
- Helps with SEO

---

### 6. Basic Tag Matching
**Question:** Match each tag to its purpose:

| Tag | Purpose |
|-----|---------|
| `<ul>` | A) Paragraph |
| `<p>` | B) Link |
| `<a>` | C) Unordered list |
| `<strong>` | D) Bold/Important text |

**Answer:** ul→C, p→A, a→B, strong→D

---

## Level 2: Intermediate

### 7. Create a Simple HTML Page
**Question:** Create an HTML page with:
- Proper document structure
- A heading "Welcome to My Page"
- A paragraph explaining who you are
- A list of your skills
- A link to Google

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>I am a web developer learning HTML, CSS, and JavaScript.</p>
    
    <h2>My Skills</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
    
    <a href="https://www.google.com">Visit Google</a>
</body>
</html>
```

---

### 8. Attribute Values
**Question:** For each attribute, provide what it does:
- `href`
- `alt`
- `src`
- `class`
- `id`

**Answer:**
- `href` - Specifies URL for links
- `alt` - Alternative text for images
- `src` - Source path for images
- `class` - CSS class for styling multiple elements
- `id` - Unique identifier for a single element

---

### 9. Nesting Errors
**Question:** Identify and fix the nesting errors:

```html
<p>This is <strong>bold text</p></strong>
<div>
  <p>Paragraph</div>
</p>
```

**Answer:**
```html
<!-- Correct version -->
<p>This is <strong>bold text</strong></p>
<div>
  <p>Paragraph</p>
</div>
```

---

### 10. Semantic HTML
**Question:** Which of the following is MORE semantic (better) for a main article?
- a) `<div class="article">`
- b) `<article>`

**Answer:** b) `<article>` - It clearly describes the content to browsers and assistive technologies.

---

### 11. Linking External Files
**Question:** How do you correctly link an external CSS file and JavaScript file?

**Answer:**
```html
<!-- CSS in head -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>

<!-- JavaScript at end of body -->
<body>
    <!-- Content -->
    <script src="script.js"></script>
</body>
```

---

### 12. Meta Tags Importance
**Question:** What do these meta tags do?

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Answer:**
- `charset="UTF-8"` - Sets character encoding for special characters
- `viewport` - Makes the page responsive on mobile devices by setting the viewport width

---

## Level 3: Advanced

### 13. Build a Complete Portfolio Page
**Task:** Create a portfolio page with:
1. Proper HTML5 structure
2. Header with your name and title
3. About section with a paragraph
4. Skills section with ordered list
5. Projects section with links to projects
6. Footer with copyright
7. External CSS file for styling
8. External JS file that logs page information

**Hints:**
- Use semantic HTML tags (header, main, footer, section, article)
- Use proper heading hierarchy
- Add meaningful classes and ids
- Add meta tags for responsiveness
- Connect all files properly with relative paths

---

### 14. Create an Interactive Contact Form
**Task:** Create an HTML form with:
- Name field (text input)
- Email field (email input)
- Message field (textarea)
- Submit button
- Proper form structure
- CSS styling to make it look professional

**Requirements:**
- Use `<form>` and `<label>` tags
- Input fields should have `placeholder` attributes
- Form should be responsive
- Add validation using HTML5 attributes (required, type)

---

### 15. Debug HTML Code
**Question:** Identify ALL errors in this HTML code:

```html
<DOCTYPE html>
<html>
<head>
<title>My Page</head>
<body>
<h1>Welcome</h1>
<p>Paragraph with <em>emphasis</h1>
<img src="image.jpg">
<a>Link without href</a>
<body>
```

**Answer - Issues found:**
1. `<DOCTYPE>` should be `<!DOCTYPE>` (with exclamation mark at start)
2. Missing `lang` attribute on `<html>`
3. `<meta charset="UTF-8">` missing
4. `</title>` tag placed in body instead of head
5. `</head>` tag missing
6. `</em>` should come before `</p>` (nesting error)
7. `<em>` opens but should close with `</em>`
8. `<img>` should have `alt` attribute
9. `<a>` tag missing `href` attribute
10. Two `<body>` opening tags, no `</html>` closing tag

**Corrected version:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Paragraph with <em>emphasis</em></p>
    <img src="image.jpg" alt="Description">
    <a href="https://example.com">Link</a>
</body>
</html>
```

---

## Practice Task Solution

### Mini Project: Personal Portfolio

**Folder Structure:**
```
portfolio/
├── index.html
├── styles.css
└── script.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Web Developer | Front-End Specialist</p>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>
                I am a passionate web developer with expertise in HTML, CSS, and JavaScript. 
                I love creating beautiful and functional websites.
            </p>
        </section>

        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
                <li>Git & GitHub</li>
            </ul>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <ol>
                <li><a href="project1.html">Weather App</a></li>
                <li><a href="project2.html">To-Do List</a></li>
                <li><a href="project3.html">Portfolio Website</a></li>
            </ol>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" rows="5"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

## Self-Check Questions

1. ✅ Can you explain what DOCTYPE does?
2. ✅ Can you write a complete HTML document from memory?
3. ✅ Can you identify and fix nesting errors?
4. ✅ Do you understand the difference between attributes?
5. ✅ Can you connect HTML, CSS, and JavaScript files properly?
6. ✅ Can you explain why semantic HTML is important?
7. ✅ Can you create a form with proper HTML structure?
8. ✅ Do you know the difference between id and class?

---

## Answer Key Review

- **Level 1 (Beginner):** If you got 6/6 correct, move to Level 2
- **Level 2 (Intermediate):** If you got 5/6 correct, you're ready for Level 3
- **Level 3 (Advanced):** These are real-world projects. Take your time!

Good luck with your learning! 🎉
