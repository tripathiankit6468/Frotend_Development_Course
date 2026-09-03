# HTML Basics & Document Structure

## 1. Topic Overview

HTML (HyperText Markup Language) is the foundation of all web pages. It provides the structure and content that browsers display to users. Think of HTML like the skeleton of a building—it defines what goes where, but CSS (skin, paint) and JavaScript (movement, interaction) add the beauty and functionality.

HTML uses **tags** (also called elements) to tell the browser what each piece of content is. For example:
- `<h1>` tells the browser "this is a heading"
- `<p>` tells the browser "this is a paragraph"
- `<img>` tells the browser "this is an image"

## 2. Why It Is Important

✅ **Foundation of Web Development** - Every website starts with HTML  
✅ **SEO & Accessibility** - Proper HTML helps search engines and people with disabilities understand your content  
✅ **Browser Compatibility** - Clean HTML works across all browsers  
✅ **Professional Structure** - Well-organized HTML is easier to maintain and update  
✅ **Required for CSS & JavaScript** - CSS and JavaScript need HTML to work  

## 3. Important Concepts

### 3.1 What is a Tag?
A tag is an instruction enclosed in angle brackets `< >`. Most tags come in pairs:
- Opening tag: `<tagname>`
- Closing tag: `</tagname>`
- Content goes between them

Example: `<p>This is a paragraph</p>`

### 3.2 Basic HTML Structure
Every HTML document follows this structure:
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata and links go here -->
  </head>
  <body>
    <!-- Content visible to users goes here -->
  </body>
</html>
```

### 3.3 Common HTML Tags
| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings (h1 is largest) |
| `<p>` | Paragraph |
| `<div>` | Container/Division |
| `<span>` | Inline container |
| `<a>` | Hyperlink |
| `<img>` | Image |
| `<ul>` / `<ol>` | Unordered/Ordered list |
| `<li>` | List item |
| `<button>` | Button |
| `<input>` | Input field |

### 3.4 DOCTYPE Declaration
The first line `<!DOCTYPE html>` tells the browser that this is an HTML5 document. This is mandatory and must be the very first line.

### 3.5 The `<head>` Section
The `<head>` contains metadata (information about the page):
- `<title>` - Title shown in browser tab
- `<meta>` - Character encoding, viewport for responsiveness
- `<link>` - External CSS files
- `<style>` - Internal CSS
- `<script>` - JavaScript code or links

### 3.6 The `<body>` Section
Everything inside `<body>` is visible to users. This is where you put all your content.

### 3.7 Attributes
Tags can have attributes that provide additional information:
```html
<a href="https://google.com">Click me</a>
<!-- href is the attribute, URL is the value -->

<img src="image.jpg" alt="Description">
<!-- src and alt are attributes -->
```

### 3.8 Nesting
Tags can contain other tags. Always close tags in reverse order:
```html
<div>
  <p>This is <strong>bold text</strong> in a paragraph</p>
</div>
```

## 4. Folder Structure

```
HTML/
├── 01-Basics-Document-Structure/
│   ├── index.html                  (Main example - complete structure)
│   ├── example1-doctype.html       (DOCTYPE example)
│   ├── example2-basic-tags.html    (Basic tags demonstration)
│   ├── example3-nesting.html       (Nesting example)
│   ├── example4-attributes.html    (Attributes example)
│   ├── styles.css                  (External CSS file)
│   ├── script.js                   (External JavaScript file)
│   ├── README.md                   (This file)
│   └── practice-questions.md       (Practice exercises)
```

## 5. Complete Code

### 5.1 index.html (Main Example - Complete Document Structure)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Character encoding for special characters -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO: Page description -->
    <meta name="description" content="Learn HTML Basics and Document Structure">
    
    <!-- Page title shown in browser tab -->
    <title>HTML Basics & Document Structure</title>
    
    <!-- Link to external CSS file -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header section -->
    <header>
        <h1>Welcome to HTML Basics!</h1>
        <p class="subtitle">Learn the foundation of web development</p>
    </header>

    <!-- Main content section -->
    <main>
        <!-- Section 1: What is HTML -->
        <section>
            <h2>What is HTML?</h2>
            <p>
                HTML (HyperText Markup Language) is the standard markup language 
                for creating web pages. It provides the structure and content 
                of every website you visit.
            </p>
        </section>

        <!-- Section 2: HTML Structure -->
        <section>
            <h2>Basic HTML Structure</h2>
            <p>Every HTML document has a standard structure:</p>
            <ul>
                <li><strong>DOCTYPE</strong> - Tells browser this is HTML5</li>
                <li><strong>html</strong> - Root element</li>
                <li><strong>head</strong> - Contains metadata</li>
                <li><strong>body</strong> - Contains visible content</li>
            </ul>
        </section>

        <!-- Section 3: Common Tags -->
        <section>
            <h2>Common HTML Tags</h2>
            
            <h3>Headings (h1 to h6)</h3>
            <h1>This is h1 - Largest heading</h1>
            <h2>This is h2</h2>
            <h3>This is h3</h3>
            <h4>This is h4</h4>
            <h5>This is h5</h5>
            <h6>This is h6 - Smallest heading</h6>

            <h3>Text Elements</h3>
            <p>This is a <strong>paragraph</strong> with <em>emphasized</em> text.</p>
            <p>Use <code>code tags</code> for showing code snippets.</p>

            <h3>Lists</h3>
            <h4>Unordered List (Bullet points)</h4>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>

            <h4>Ordered List (Numbered)</h4>
            <ol>
                <li>First step</li>
                <li>Second step</li>
                <li>Third step</li>
            </ol>
        </section>

        <!-- Section 4: Interactive Elements -->
        <section>
            <h2>Interactive Elements</h2>
            
            <h3>Links</h3>
            <a href="https://www.example.com">Visit Example.com</a>
            
            <h3>Buttons</h3>
            <button onclick="alert('Button clicked!')">Click Me!</button>
            
            <h3>Input Fields</h3>
            <input type="text" placeholder="Enter your name">
            <input type="email" placeholder="Enter your email">
            <input type="password" placeholder="Enter password">
            <input type="number" placeholder="Enter a number">
        </section>

        <!-- Section 5: Container Elements -->
        <section>
            <h2>Container Elements</h2>
            <div class="box">
                <h3>DIV - Block Container</h3>
                <p>Used to group content together. Spans full width.</p>
            </div>
            
            <p>This is a <span class="highlight">SPAN</span> element inside text.</p>
        </section>
    </main>

    <!-- Footer section -->
    <footer>
        <p>&copy; 2024 Frontend Development Course. All rights reserved.</p>
    </footer>

    <!-- Link to external JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
```

### 5.2 example1-doctype.html

```html
<!DOCTYPE html>
<!-- 
    DOCTYPE DECLARATION
    This tells the browser that this is an HTML5 document.
    It must be the FIRST line of every HTML document.
    Without it, browsers might render the page incorrectly.
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOCTYPE Example</title>
</head>
<body>
    <h1>Understanding DOCTYPE</h1>
    
    <h2>What is DOCTYPE?</h2>
    <p>
        DOCTYPE (Document Type Declaration) is a special instruction that appears 
        at the very beginning of an HTML file.
    </p>
    
    <h2>Why is it Important?</h2>
    <ul>
        <li>Tells the browser what version of HTML is being used</li>
        <li>Ensures the page renders in "standards mode" instead of "quirks mode"</li>
        <li>Improves cross-browser compatibility</li>
        <li>Helps with SEO</li>
    </ul>
    
    <h2>HTML5 DOCTYPE</h2>
    <p>In HTML5, the DOCTYPE is simple and always the same:</p>
    <code>&lt;!DOCTYPE html&gt;</code>
    
    <h2>Did You Know?</h2>
    <p>
        In older HTML versions, DOCTYPE was very complex. HTML5 simplified it to just 
        <code>&lt;!DOCTYPE html&gt;</code> because there's only one version of HTML5!
    </p>
</body>
</html>
```

### 5.3 example2-basic-tags.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Tags Examples</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Common HTML Tags - Complete Guide</h1>
    
    <!-- HEADINGS -->
    <h2>1. Headings (h1 - h6)</h2>
    <p>Headings are used to structure your content. h1 is the most important.</p>
    <h1>H1 - Main heading (use only once per page)</h1>
    <h2>H2 - Subheading</h2>
    <h3>H3 - Sub-subheading</h3>
    <h4>H4 - Minor heading</h4>
    <h5>H5 - Even smaller</h5>
    <h6>H6 - Smallest heading</h6>
    
    <!-- PARAGRAPHS & TEXT -->
    <h2>2. Paragraphs and Text Elements</h2>
    <p>This is a regular paragraph. Use &lt;p&gt; tags to group related sentences.</p>
    
    <p>
        This is <strong>bold text</strong> - use when something is very important.
    </p>
    
    <p>
        This is <em>emphasized text</em> - use for mild emphasis, usually displayed as italic.
    </p>
    
    <p>
        For code snippets, use <code>&lt;code&gt;</code> tags.
    </p>
    
    <!-- LISTS -->
    <h2>3. Lists</h2>
    
    <h3>Unordered List (Bullet Points)</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3 (can have nested lists)
            <ul>
                <li>Nested item A</li>
                <li>Nested item B</li>
            </ul>
        </li>
    </ul>
    
    <h3>Ordered List (Numbered)</h3>
    <ol>
        <li>First step</li>
        <li>Second step</li>
        <li>Third step</li>
    </ol>
    
    <h3>Description List</h3>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language - used for structure</dd>
        
        <dt>CSS</dt>
        <dd>Cascading Style Sheets - used for styling</dd>
        
        <dt>JavaScript</dt>
        <dd>Programming language - used for interactivity</dd>
    </dl>
    
    <!-- LINKS -->
    <h2>4. Links (Anchor Tags)</h2>
    <p><a href="https://www.google.com" target="_blank">Google (opens in new tab)</a></p>
    <p><a href="./example1-doctype.html">Link to another file in same folder</a></p>
    <p><a href="#section-top">Jump to top of page</a></p>
    
    <!-- IMAGES -->
    <h2>5. Images</h2>
    <p>To add an image, use the img tag with src and alt attributes:</p>
    <img src="sample-image.jpg" alt="Sample image description" width="200">
    
    <!-- BUTTONS & FORMS -->
    <h2>6. Buttons and Form Elements</h2>
    <button>Click Me!</button>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    
    <h3>Input Fields</h3>
    <input type="text" placeholder="Text input">
    <input type="email" placeholder="Email input">
    <input type="password" placeholder="Password input">
    <input type="number" placeholder="Number input">
    <input type="date" placeholder="Date input">
    <input type="checkbox"> I agree to terms
    <input type="radio" name="choice"> Option 1
    <input type="radio" name="choice"> Option 2
    
    <!-- SPECIAL ELEMENTS -->
    <h2>7. Special Elements</h2>
    
    <h3>Horizontal Rule</h3>
    <hr>
    
    <h3>Line Break</h3>
    <p>This is line 1<br>This is line 2</p>
    
    <h3>Blockquote</h3>
    <blockquote>
        "Every expert was once a beginner." - Unknown
    </blockquote>
    
    <h3>Horizontal Line (separator)</h3>
    <hr>
    
    <p>&copy; 2024 - All rights reserved.</p>
</body>
</html>
```

### 5.4 example3-nesting.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Nesting Examples</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Understanding HTML Nesting</h1>
    
    <p>Nesting means putting one tag inside another. Like Russian dolls, tags must be opened and closed in the correct order.</p>
    
    <h2>✅ CORRECT Nesting</h2>
    <p>
        Tags closed in <strong>reverse order</strong> of how they were opened.
    </p>
    
    <div class="example">
        <h3>Example 1: Correct Nesting</h3>
        <p>
            &lt;div&gt;<br>
            &nbsp;&nbsp;&lt;p&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Text <strong>bold</strong><br>
            &nbsp;&nbsp;&lt;/p&gt;<br>
            &lt;/div&gt;
        </p>
        
        <p>This is <strong>correct</strong> because &lt;strong&gt; is closed before &lt;p&gt;.</p>
    </div>
    
    <h2>❌ INCORRECT Nesting</h2>
    <div class="example">
        <h3>Example 2: Wrong Nesting</h3>
        <p>
            &lt;p&gt;<br>
            &nbsp;&nbsp;Text <strong>bold<br>
            &lt;/p&gt;<br>
            &lt;/strong&gt;
        </p>
        <p>This is <strong style="color: red;">WRONG</strong> because tags overlap incorrectly.</p>
    </div>
    
    <h2>Real-World Nesting Examples</h2>
    
    <h3>Example 3: List with Links</h3>
    <ul>
        <li>
            <a href="https://www.google.com">Google</a>
        </li>
        <li>
            <a href="https://www.github.com">GitHub</a>
        </li>
        <li>
            Navigation
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </li>
    </ul>
    
    <h3>Example 4: Complex Structure</h3>
    <div class="card">
        <h4>Article Title</h4>
        <p>
            Article content with <strong>bold</strong> and <em>italic</em> text.
            You can also include <code>code snippets</code>.
        </p>
        <button onclick="alert('You clicked the button!')">Read More</button>
    </div>
    
    <h3>Example 5: Table with Nested Structure</h3>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Skills</th>
        </tr>
        <tr>
            <td>John</td>
            <td>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </td>
        </tr>
    </table>
    
    <h2>Indentation Best Practice</h2>
    <p>Always indent nested tags for readability (use 2 or 4 spaces):</p>
    
    <pre>
&lt;div&gt;
  &lt;section&gt;
    &lt;h2&gt;Heading&lt;/h2&gt;
    &lt;p&gt;Paragraph&lt;/p&gt;
  &lt;/section&gt;
&lt;/div&gt;
    </pre>
    
    <h2>Key Rules</h2>
    <ul>
        <li>Open tags from outside to inside</li>
        <li>Close tags from inside to outside (reverse order)</li>
        <li>Properly indent for readability</li>
        <li>Don't skip closing tags</li>
        <li>Use validation tools to check your HTML</li>
    </ul>
</body>
</html>
```

### 5.5 example4-attributes.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Attributes Examples</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Understanding HTML Attributes</h1>
    
    <p>Attributes provide additional information about HTML elements. They always go in the opening tag.</p>
    
    <h2>General Attribute Syntax</h2>
    <pre>&lt;tag attribute="value"&gt;Content&lt;/tag&gt;</pre>
    
    <hr>
    
    <h2>1. Common Attributes</h2>
    
    <h3>id Attribute - Unique Identifier</h3>
    <div id="main-section">
        <p>This div has id="main-section". Each id should be unique on a page.</p>
    </div>
    
    <h3>class Attribute - Styling & Grouping</h3>
    <p class="highlight">This paragraph has class="highlight"</p>
    <p class="highlight">Multiple elements can have the same class</p>
    <div class="card highlight">
        <p>You can have multiple classes: &lt;div class="card highlight"&gt;</p>
    </div>
    
    <h3>title Attribute - Tooltip</h3>
    <p title="This is a tooltip">Hover over this text to see a tooltip</p>
    
    <h3>style Attribute - Inline CSS</h3>
    <p style="color: blue; font-size: 18px;">This text is blue and larger (inline style)</p>
    
    <hr>
    
    <h2>2. Link Attributes</h2>
    
    <h3>href - Hyperlink Reference</h3>
    <a href="https://www.google.com">Link to Google</a><br>
    <a href="./example1-doctype.html">Link to local file</a><br>
    <a href="https://www.github.com" target="_blank">Opens in new tab</a><br>
    <a href="#bottom">Jump to bottom</a>
    
    <h3>target Attribute</h3>
    <ul>
        <li><code>_blank</code> - Opens in new tab</li>
        <li><code>_self</code> - Opens in same tab (default)</li>
        <li><code>_parent</code> - Opens in parent frame</li>
        <li><code>_top</code> - Opens in full body</li>
    </ul>
    
    <hr>
    
    <h2>3. Image Attributes</h2>
    
    <h3>src - Source</h3>
    <img src="image.jpg" alt="Alternative text">
    
    <h3>alt - Alternative Text</h3>
    <p>If image doesn't load, alt text is displayed. Important for SEO and accessibility.</p>
    <img src="picture.jpg" alt="Beautiful sunset on the beach" width="300" height="200">
    
    <h3>width & height</h3>
    <img src="photo.jpg" alt="Photo" width="150" height="150">
    
    <hr>
    
    <h2>4. Form Attributes</h2>
    
    <h3>type Attribute</h3>
    <input type="text" placeholder="Text input">
    <input type="email" placeholder="Email input">
    <input type="password" placeholder="Password">
    <input type="number" placeholder="Number">
    <input type="date" placeholder="Date">
    <input type="color" placeholder="Color picker">
    <input type="range" min="0" max="100">
    
    <h3>placeholder Attribute</h3>
    <input type="text" placeholder="Enter your name here">
    
    <h3>required Attribute</h3>
    <input type="text" placeholder="This field is required" required>
    
    <h3>disabled Attribute</h3>
    <input type="text" value="This is disabled" disabled>
    
    <h3>readonly Attribute</h3>
    <input type="text" value="You cannot change this" readonly>
    
    <h3>value Attribute</h3>
    <input type="text" value="Pre-filled value">
    
    <hr>
    
    <h2>5. Data Attributes (Custom Attributes)</h2>
    
    <p>You can create custom attributes using data-* format:</p>
    
    <div data-category="tutorial" data-id="101">
        <p>This div has custom attributes: data-category and data-id</p>
        <p>Used for storing custom data accessible via JavaScript</p>
    </div>
    
    <hr>
    
    <h2>6. Global Attributes (Work on Any Tag)</h2>
    
    <table border="1">
        <tr>
            <th>Attribute</th>
            <th>Purpose</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>class</td>
            <td>CSS class name</td>
            <td>&lt;p class="intro"&gt;</td>
        </tr>
        <tr>
            <td>id</td>
            <td>Unique identifier</td>
            <td>&lt;div id="header"&gt;</td>
        </tr>
        <tr>
            <td>style</td>
            <td>Inline CSS</td>
            <td>&lt;p style="color:red;"&gt;</td>
        </tr>
        <tr>
            <td>title</td>
            <td>Tooltip text</td>
            <td>&lt;p title="Tooltip"&gt;</td>
        </tr>
        <tr>
            <td>lang</td>
            <td>Language code</td>
            <td>&lt;html lang="en"&gt;</td>
        </tr>
        <tr>
            <td>data-*</td>
            <td>Custom data</td>
            <td>&lt;div data-user="123"&gt;</td>
        </tr>
    </table>
    
    <hr>
    
    <h2>Important Notes</h2>
    <ul>
        <li>Attribute names are case-insensitive (but lowercase is standard)</li>
        <li>Always quote attribute values: <code>attr="value"</code></li>
        <li>Some attributes don't need values: <code>disabled</code>, <code>required</code></li>
        <li>Order of attributes doesn't matter</li>
        <li>Different tags have different valid attributes</li>
    </ul>
    
    <hr>
    <p id="bottom">&copy; 2024 - HTML Attributes Guide</p>
</body>
</html>
```

### 5.6 styles.css

```css
/* 
   EXTERNAL CSS FILE
   This file is linked in the HTML head using: <link rel="stylesheet" href="styles.css">
*/

/* Reset default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    padding: 20px;
}

/* Header styling */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.2em;
    opacity: 0.9;
}

/* Main content */
main {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    margin: 0 auto 30px;
}

/* Sections */
section {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
}

section:last-child {
    border-bottom: none;
}

/* Headings */
h1 {
    color: #667eea;
    font-size: 2em;
    margin-bottom: 15px;
}

h2 {
    color: #764ba2;
    font-size: 1.8em;
    margin-top: 20px;
    margin-bottom: 15px;
}

h3 {
    color: #555;
    font-size: 1.3em;
    margin-top: 15px;
    margin-bottom: 10px;
}

/* Paragraphs and text */
p {
    margin-bottom: 15px;
    text-align: justify;
}

code {
    background-color: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    color: #d63384;
}

pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    border-left: 4px solid #667eea;
    margin: 15px 0;
}

strong {
    color: #d63384;
    font-weight: bold;
}

em {
    font-style: italic;
    color: #666;
}

/* Lists */
ul, ol, dl {
    margin-left: 20px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 8px;
}

dt {
    font-weight: bold;
    margin-top: 10px;
    color: #667eea;
}

dd {
    margin-left: 20px;
    margin-bottom: 10px;
}

/* Links */
a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Containers */
.box {
    background-color: #f9f9f9;
    border-left: 4px solid #667eea;
    padding: 20px;
    margin: 15px 0;
    border-radius: 5px;
}

.highlight {
    background-color: #fff3cd;
    padding: 2px 6px;
    border-radius: 3px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 15px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.example {
    background-color: #fffbf0;
    border: 2px solid #ffd700;
    padding: 15px;
    border-radius: 5px;
    margin: 10px 0;
}

/* Buttons */
button {
    background-color: #667eea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px;
}

button:hover {
    background-color: #764ba2;
}

button:active {
    transform: scale(0.98);
}

/* Input fields */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
input[type="date"],
input[type="color"],
input[type="range"] {
    padding: 10px;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    font-family: inherit;
}

input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
}

input:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
}

/* Table */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
}

table th,
table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
}

table th {
    background-color: #667eea;
    color: white;
    font-weight: bold;
}

table tr:nth-child(even) {
    background-color: #f9f9f9;
}

table tr:hover {
    background-color: #f0f0f0;
}

/* Horizontal rule */
hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
    margin: 30px 0;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
}

footer p {
    margin: 0;
    opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }

    header {
        padding: 20px;
    }

    header h1 {
        font-size: 1.8em;
    }

    main {
        padding: 20px;
    }

    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.3em;
    }

    h3 {
        font-size: 1.1em;
    }

    table {
        font-size: 0.9em;
    }

    table th,
    table td {
        padding: 8px;
    }
}
```

### 5.7 script.js

```javascript
/*
    EXTERNAL JAVASCRIPT FILE
    This file is linked at the end of HTML body using: <script src="script.js"></script>
*/

// Log when the page has loaded
console.log("HTML Basics & Document Structure - Page Loaded!");

// Add event listeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM is fully loaded and parsed");
    
    // Get all buttons and add click handlers
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log("Button clicked:", button.textContent);
        });
    });
    
    // Get all links
    const links = document.querySelectorAll('a');
    console.log(`Found ${links.length} links on the page`);
    
    // Get all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(`Found ${headings.length} headings on the page`);
    
    // Get all input fields
    const inputs = document.querySelectorAll('input');
    console.log(`Found ${inputs.length} input fields on the page`);
});

// Example: Change body color on scroll
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        document.body.style.backgroundOpacity = 0.9;
    } else {
        document.body.style.backgroundOpacity = 1;
    }
});

// Example: Log input field changes
const inputFields = document.querySelectorAll('input[type="text"]');
inputFields.forEach(function(input) {
    input.addEventListener('input', function() {
        console.log("Input value changed:", this.value);
    });
});

// Example: Validate email input
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(function(email) {
    email.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailPattern.test(this.value)) {
            console.warn("Invalid email format:", this.value);
        }
    });
});
```

## 6. Code Explanation

### 6.1 HTML Document Structure

```html
<!DOCTYPE html>              <!-- Declares HTML5 document type -->
<html lang="en">             <!-- Root element, lang attribute for language -->
<head>                       <!-- Container for metadata (not visible to users) -->
    <meta charset="UTF-8">   <!-- Character encoding for special characters -->
    <title>Page Title</title> <!-- Title shown in browser tab -->
    <link rel="stylesheet" href="styles.css"> <!-- Link external CSS -->
</head>
<body>                       <!-- Container for visible content -->
    <!-- All user-visible content goes here -->
    <h1>Hello World</h1>
    <script src="script.js"></script> <!-- Link external JavaScript at end -->
</body>
</html>
```

### 6.2 Common Sections Explained

**`<header>`** - Top section, usually contains logo and navigation
**`<main>`** - Main content of the page
**`<section>`** - Groups related content together
**`<footer>`** - Bottom section, usually contains copyright info
**`<nav>`** - Navigation links
**`<article>`** - Independent content (blog post, news article)
**`<aside>`** - Sidebar content related to main content

### 6.3 Tag Categories

**Structural Tags**: `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`

**Text Tags**: `<h1>-<h6>`, `<p>`, `<strong>`, `<em>`, `<code>`

**List Tags**: `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`

**Link Tags**: `<a>` for links, `<img>` for images

**Form Tags**: `<form>`, `<input>`, `<button>`, `<label>`, `<textarea>`, `<select>`

**Container Tags**: `<div>`, `<span>`

## 7. Common Mistakes

### ❌ Mistake 1: Missing DOCTYPE
```html
<!-- WRONG - No DOCTYPE -->
<html>
  ...
</html>

<!-- CORRECT -->
<!DOCTYPE html>
<html>
  ...
</html>
```

### ❌ Mistake 2: Improper Nesting
```html
<!-- WRONG - Tags overlap -->
<p>This is <strong>bold text</p></strong>

<!-- CORRECT -->
<p>This is <strong>bold text</strong></p>
```

### ❌ Mistake 3: Forgetting to Close Tags
```html
<!-- WRONG -->
<p>This paragraph is not closed
<p>Another paragraph

<!-- CORRECT -->
<p>This paragraph is closed</p>
<p>Another paragraph</p>
```

### ❌ Mistake 4: Not Closing Self-Closing Tags
```html
<!-- OUTDATED -->
<br>
<img src="image.jpg" alt="Image">

<!-- MODERN (usually fine without closing) -->
<br>
<img src="image.jpg" alt="Image">
```

### ❌ Mistake 5: Using Deprecated Tags
```html
<!-- WRONG - Old HTML -->
<font color="red">Red text</font>
<center>Centered text</center>

<!-- CORRECT - Modern HTML -->
<p style="color: red;">Red text</p>
<p style="text-align: center;">Centered text</p>
```

### ❌ Mistake 6: Missing alt Attribute on Images
```html
<!-- WRONG -->
<img src="picture.jpg">

<!-- CORRECT -->
<img src="picture.jpg" alt="Description of the image">
```

### ❌ Mistake 7: Multiple h1 Tags on Same Page
```html
<!-- WRONG -->
<h1>Main Heading</h1>
<h1>Another Heading</h1>

<!-- CORRECT -->
<h1>Main Heading</h1>
<h2>Another Heading</h2>
```

### ❌ Mistake 8: Not Linking CSS and JavaScript Correctly
```html
<!-- WRONG - Incorrect paths -->
<link rel="stylesheet" href="/styles.css"> <!-- May not work -->
<script src="\script.js"></script>

<!-- CORRECT -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

## 8. Practice Task

### Task: Create a Personal Portfolio Webpage

Create an HTML page for a fictional person with:

1. **Proper document structure** with DOCTYPE, html, head, and body tags
2. **A header section** with person's name and job title
3. **A main section** containing:
   - About me (paragraph)
   - Skills (unordered list with at least 5 skills)
   - Projects (ordered list with 3 projects)
   - Contact links (at least 3 links to social media or email)
4. **A footer** with copyright information
5. **Proper nesting** and indentation
6. **At least one external CSS file** linked in the head (create basic styling)
7. **At least one external JS file** linked at the end of body (add console.log messages)

**Requirements:**
- Use semantic HTML tags where possible
- Include meta tags for character encoding and viewport
- Use appropriate heading hierarchy (h1 for title, h2 for sections)
- Add proper alt text for any images
- Use meaningful class and id attributes
- Save CSS and JS in separate files

**Bonus Challenge:**
- Add a contact form with name, email, and message fields
- Add a profile image
- Include a navigation menu
- Style the page nicely with CSS

## 9. README.md Update

This topic content should be added to your main repository README under "Topics Covered" section as:

```
### HTML Basics & Document Structure
- Understanding HTML tags and elements
- DOCTYPE declaration
- Document structure (head, body, html)
- Common HTML tags (headings, paragraphs, lists, links, images)
- Nesting and indentation
- HTML attributes (id, class, href, src, etc.)
- Forms and input elements
- Semantic HTML
- Best practices and common mistakes
```

---

**Next Topics to Cover:**
- HTML Forms & Input Validation
- HTML Semantic Elements
- HTML5 Features & APIs
- CSS Basics & Selectors
- CSS Box Model
- CSS Flexbox & Grid

---

Created: 2024  
Part of: Frontend Development Course  
Difficulty: Beginner
