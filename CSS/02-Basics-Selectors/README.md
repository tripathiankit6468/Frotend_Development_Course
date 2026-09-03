# CSS Basics & Selectors

## 1. Topic Overview

CSS (Cascading Style Sheets) is the language used to style and layout web pages. While HTML provides the structure and content, CSS makes it look beautiful! 

Think of it like this:
- **HTML** = the skeleton (structure)
- **CSS** = the skin, clothes, and makeup (styling)
- **JavaScript** = the movement and interaction (behavior)

CSS allows you to control colors, fonts, spacing, layouts, animations, and much more. Everything visual that you see on a website is controlled by CSS.

## 2. Why It Is Important

✅ **Visual Design** - Makes websites look professional and attractive  
✅ **User Experience** - Good styling makes websites easier to use  
✅ **Branding** - Maintain consistent colors, fonts, and styles  
✅ **Responsiveness** - Create websites that work on all devices  
✅ **Separation of Concerns** - Keep HTML and styling separate  
✅ **Reusability** - Write CSS once and use it across many pages  
✅ **Maintenance** - Easy to update styles across entire website  

## 3. Important Concepts

### 3.1 What is a CSS Rule?

A CSS rule consists of two main parts:

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

**Selector** (`p`) - Targets which HTML element to style  
**Property** (`color`, `font-size`) - What aspect to style  
**Value** (`blue`, `16px`) - The style value  
**Declaration** (`color: blue;`) - Property + value together

### 3.2 Where Can CSS Go?

CSS can be written in three places:

**1. Inline CSS** - Inside an HTML tag
```html
<p style="color: red;">Red text</p>
```

**2. Internal CSS** - Inside `<style>` tag in HTML head
```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```

**3. External CSS** - In a separate `.css` file (BEST PRACTICE)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### 3.3 CSS Selectors

Selectors target which HTML elements to style. Here are the main types:

**Element Selector** - Targets all elements of a type
```css
p {
    color: blue;
}
```

**Class Selector** - Targets elements with a specific class
```css
.highlight {
    background-color: yellow;
}
```
```html
<p class="highlight">Highlighted text</p>
```

**ID Selector** - Targets an element with a specific ID
```css
#header {
    background-color: navy;
}
```
```html
<div id="header">Header content</div>
```

**Attribute Selector** - Targets elements with specific attributes
```css
input[type="email"] {
    border: 2px solid blue;
}
```

**Pseudo-classes** - Targets elements in specific states
```css
a:hover {
    color: red;
}

button:active {
    transform: scale(0.95);
}
```

**Combinator Selectors**
```css
div p { }           /* Descendants */
div > p { }         /* Direct children */
h1 + p { }          /* Adjacent siblings */
h1 ~ p { }          /* General siblings */
```

### 3.4 CSS Box Model

Every element in CSS is considered a box with:
- **Content** - The actual content (text, image)
- **Padding** - Space inside, between content and border
- **Border** - Line around the padding
- **Margin** - Space outside, between border and other elements

```
┌─────────────────────────┐
│      MARGIN             │
│  ┌─────────────────┐    │
│  │     BORDER      │    │
│  │  ┌───────────┐  │    │
│  │  │ PADDING   │  │    │
│  │  │ CONTENT   │  │    │
│  │  │           │  │    │
│  │  └───────────┘  │    │
│  │                 │    │
│  └─────────────────┘    │
│                         │
└─────────────────────────┘
```

### 3.5 CSS Cascade and Specificity

**Cascade** - When multiple CSS rules apply, the last one wins
```css
p { color: blue; }
p { color: red; }  /* This wins - it comes last */
```

**Specificity** - More specific selectors override general ones
```css
p { color: blue; }           /* 1 point */
.highlight { color: red; }   /* 10 points - wins */
#header p { color: green; }  /* 101 points - wins */
```

**Priority** (from lowest to highest):
1. Element selector (1 point)
2. Class selector (10 points)
3. ID selector (100 points)
4. Inline style (1000 points)
5. !important (highest - avoid if possible)

### 3.6 Common CSS Properties

**Text Styling:**
- `color` - Text color
- `font-size` - Size of text
- `font-family` - Type of font
- `font-weight` - Boldness (normal, bold, 700, etc.)
- `text-align` - Alignment (left, center, right, justify)
- `line-height` - Space between lines

**Colors & Backgrounds:**
- `background-color` - Background color
- `background-image` - Background image
- `border` - Border around element
- `opacity` - Transparency (0-1)

**Box Model:**
- `margin` - Space outside element
- `padding` - Space inside element
- `width` - Width of element
- `height` - Height of element
- `border-radius` - Rounded corners

**Display & Position:**
- `display` - How element is displayed (block, inline, flex, grid)
- `position` - How element is positioned (static, relative, absolute, fixed)
- `top`, `right`, `bottom`, `left` - Positioning offsets

### 3.7 Units in CSS

**Absolute Units** (Fixed size):
- `px` - Pixels (most common)
- `pt` - Points
- `cm`, `mm`, `in` - Physical units

**Relative Units** (Relative to something else):
- `em` - Relative to parent element's font-size
- `rem` - Relative to root (html) element's font-size
- `%` - Percentage of parent element
- `vw`, `vh` - Viewport width/height

## 4. Folder Structure

```
CSS/
├── 02-Basics-Selectors/
│   ├── index.html                      (Main example)
│   ├── example1-inline-css.html        (Inline CSS)
│   ├── example2-internal-css.html      (Internal CSS)
│   ├── example3-external-css.html      (External CSS)
│   ├── example4-selectors.html         (All selector types)
│   ├── example5-specificity.html       (Specificity examples)
│   ├── example6-box-model.html         (Box model demo)
│   ├── styles.css                      (External CSS)
│   ├── selectors.css                   (Additional CSS)
│   ├── script.js                       (JavaScript)
│   ├── README.md                       (This file)
│   └── practice-questions.md           (Practice exercises)
```

## 5. Complete Code

### 5.1 index.html (Main Example)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Basics & Selectors</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="selectors.css">
</head>
<body>
    <header class="main-header">
        <h1>CSS Basics & Selectors</h1>
        <p class="tagline">Learn how to style HTML with CSS</p>
    </header>

    <main>
        <!-- What is CSS -->
        <section id="what-is-css">
            <h2>What is CSS?</h2>
            <p class="intro-text">
                CSS (Cascading Style Sheets) is used to style and layout web pages. 
                It controls colors, fonts, spacing, positioning, and animations.
            </p>
        </section>

        <!-- CSS Syntax -->
        <section>
            <h2>CSS Syntax</h2>
            <div class="code-example">
                <code>
                    selector {<br>
                    &nbsp;&nbsp;property: value;<br>
                    }
                </code>
            </div>
            <p>A CSS rule consists of a selector and one or more declarations.</p>
        </section>

        <!-- Selector Types -->
        <section>
            <h2>Selector Types</h2>
            
            <h3>1. Element Selector</h3>
            <p class="element-example">This paragraph uses element selector styling</p>
            
            <h3>2. Class Selector</h3>
            <p class="class-example">This paragraph has a class: "class-example"</p>
            
            <h3>3. ID Selector</h3>
            <p id="id-example">This paragraph has an ID: "id-example"</p>
            
            <h3>4. Group Selector</h3>
            <h4 class="important">All headings and paragraphs with class "important" are styled the same</h4>
            <p class="important">This paragraph is also styled</p>
            
            <h3>5. Attribute Selector</h3>
            <input type="text" placeholder="Text input - styled by [type='text']">
            <input type="email" placeholder="Email input - styled by [type='email']">
        </section>

        <!-- Pseudo-classes -->
        <section>
            <h2>Pseudo-classes</h2>
            <p>Pseudo-classes style elements in specific states</p>
            
            <a href="#" class="link-example">Hover over me!</a><br><br>
            
            <button class="button-example">Click me</button>
            
            <h3>:first-child and :last-child</h3>
            <ul class="special-list">
                <li>First item</li>
                <li>Middle item</li>
                <li>Last item</li>
            </ul>
        </section>

        <!-- Box Model -->
        <section>
            <h2>Box Model</h2>
            <div class="box-demo">
                <p>This box demonstrates margin, border, padding, and content</p>
            </div>
            <p class="explanation">
                Notice the space between the blue border and the text (padding),
                and the space between the border and the edge (margin).
            </p>
        </section>

        <!-- Specificity Demo -->
        <section>
            <h2>CSS Specificity</h2>
            
            <p id="specificity-demo" class="demo-class">
                This paragraph shows specificity. ID selector wins!
            </p>
            
            <h3>Specificity Points:</h3>
            <ul>
                <li>Element selector: 1 point</li>
                <li>Class selector: 10 points</li>
                <li>ID selector: 100 points</li>
                <li>Inline style: 1000 points</li>
            </ul>
        </section>

        <!-- Color & Fonts -->
        <section>
            <h2>Colors & Fonts</h2>
            
            <h3>Text Colors</h3>
            <p class="color-hex">Hex color: #FF5733</p>
            <p class="color-rgb">RGB color: rgb(100, 200, 50)</p>
            <p class="color-named">Named color: darkblue</p>
            
            <h3>Font Styles</h3>
            <p class="font-style-demo">
                <strong>Bold text</strong> and <em>italic text</em>
            </p>
            <p class="font-weight-demo">Font weights: Light, Normal, Bold, Extra Bold</p>
        </section>

        <!-- Display Property -->
        <section>
            <h2>Display Property</h2>
            
            <h3>Block Elements (take full width)</h3>
            <div class="block-demo">Block element 1</div>
            <div class="block-demo">Block element 2</div>
            
            <h3>Inline Elements (only take needed width)</h3>
            <span class="inline-demo">Inline 1</span>
            <span class="inline-demo">Inline 2</span>
            <span class="inline-demo">Inline 3</span>
        </section>

        <!-- Gradients -->
        <section>
            <h2>Gradients</h2>
            <div class="gradient-demo">
                <p>Linear Gradient Background</p>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <p>&copy; 2024 CSS Learning Course. Master the styling!</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### 5.2 example1-inline-css.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inline CSS Example</title>
</head>
<body>
    <h1>Inline CSS Examples</h1>
    
    <p style="color: blue;">This text is blue</p>
    <p style="color: red; font-size: 18px;">Red text, larger size</p>
    <p style="background-color: yellow; padding: 10px; border: 2px solid black;">
        Yellow background with padding and border
    </p>
    
    <h2 style="text-align: center; color: green;">Centered green heading</h2>
    
    <div style="width: 200px; height: 100px; background-color: lightblue; border-radius: 10px; margin: 20px;">
        A styled box with inline CSS
    </div>
    
    <button style="padding: 10px 20px; font-size: 16px; background-color: navy; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Styled Button
    </button>
    
    <p style="color: purple; font-style: italic; text-decoration: underline;">
        Italic, underlined purple text
    </p>
    
    <p style="line-height: 2; letter-spacing: 2px;">
        This paragraph has increased line height and letter spacing for better readability
    </p>
</body>
</html>
```

### 5.3 example2-internal-css.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internal CSS Example</title>
    <style>
        /* Global styles */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }

        /* Element selector */
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 3px solid #007bff;
            padding-bottom: 10px;
        }

        p {
            line-height: 1.6;
            color: #555;
        }

        /* Class selector */
        .highlight {
            background-color: yellow;
            padding: 5px;
            border-radius: 3px;
        }

        .success {
            color: green;
            font-weight: bold;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        /* ID selector */
        #main-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }

        /* Button styling */
        button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }

        button:active {
            transform: scale(0.98);
        }

        /* Link styling */
        a {
            color: #007bff;
            text-decoration: none;
            transition: color 0.3s;
        }

        a:hover {
            text-decoration: underline;
            color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Internal CSS Example</h1>
    
    <div id="main-content">
        <p>
            This CSS is written inside &lt;style&gt; tags in the &lt;head&gt; section.
            This approach is better than inline CSS but not as good as external CSS.
        </p>

        <h2>Class and ID Examples</h2>
        <p>This is normal text. <span class="highlight">This is highlighted</span>.</p>
        <p class="success">This paragraph uses the success class</p>
        <p class="error">This paragraph uses the error class</p>

        <h2>Interactive Elements</h2>
        <button>Hover over me and click!</button>

        <p><a href="#">Click this link to see hover effect</a></p>

        <h2>Why Internal CSS?</h2>
        <ul>
            <li>Better than inline (keeps HTML clean)</li>
            <li>Styles are scoped to one page only</li>
            <li>Not ideal for large projects with many pages</li>
            <li>Best practice is to use external CSS</li>
        </ul>
    </div>
</body>
</html>
```

### 5.4 example3-external-css.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>External CSS Example</h1>
    
    <p class="intro">
        This HTML file links to an external CSS file.
        This is the best practice for styling web pages.
    </p>

    <h2>Advantages of External CSS</h2>
    <ul>
        <li>Keeps HTML and CSS separate (clean)</li>
        <li>Can be reused across multiple pages</li>
        <li>Easier to maintain and update</li>
        <li>Browser caches the CSS file (faster)</li>
        <li>Better for collaboration (developers)</li>
    </ul>

    <h2>Examples</h2>
    <p class="success">Success message styling</p>
    <p class="error">Error message styling</p>
    <p class="warning">Warning message styling</p>

    <button class="button-primary">Primary Button</button>
    <button class="button-secondary">Secondary Button</button>

    <div class="card">
        <h3>Card Example</h3>
        <p>This is a card component styled with external CSS.</p>
    </div>
</body>
</html>
```

### 5.5 example4-selectors.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectors Examples</title>
    <link rel="stylesheet" href="selectors.css">
</head>
<body>
    <h1>CSS Selectors - Complete Guide</h1>

    <h2>1. Element Selector</h2>
    <p class="selector-demo">All paragraphs are styled the same way</p>
    <p class="selector-demo">This is another paragraph with element selector</p>

    <h2>2. Class Selector</h2>
    <p class="highlight">This has class "highlight"</p>
    <div class="highlight">This div also has class "highlight"</div>

    <h2>3. ID Selector</h2>
    <p id="unique">This is a unique paragraph with ID</p>

    <h2>4. Group Selector</h2>
    <p class="group-demo">Paragraph with group selector</p>
    <div class="group-demo">Div with group selector</div>
    <span class="group-demo">Span with group selector</span>

    <h2>5. Descendant Selector</h2>
    <div class="parent">
        <p>This paragraph is a descendant of parent div</p>
        <span>
            <p>This paragraph is also a descendant</p>
        </span>
    </div>

    <h2>6. Child Selector</h2>
    <div class="parent-child">
        <p>Direct child paragraph</p>
        <span>
            <p>This is NOT a direct child (grandchild)</p>
        </span>
    </div>

    <h2>7. Attribute Selector</h2>
    <input type="text" placeholder="Text input">
    <input type="email" placeholder="Email input">
    <input type="password" placeholder="Password input">
    <input type="submit" value="Submit button">

    <h2>8. Pseudo-class Selector</h2>
    <a href="#">Hover over this link</a>

    <h2>9. Pseudo-element Selector</h2>
    <p class="first-letter-demo">This paragraph's first letter is styled specially.</p>

    <h2>10. Universal Selector</h2>
    <p>All elements are affected by * selector</p>
    <div>This div is also affected</div>
    <span>This span too</span>

    <h2>11. Combining Multiple Selectors</h2>
    <div class="container">
        <p class="text">Styled with multiple criteria</p>
    </div>

    <h2>12. :nth-child Selector</h2>
    <ul class="list-demo">
        <li>First item</li>
        <li>Second item (styled differently)</li>
        <li>Third item</li>
        <li>Fourth item (styled differently)</li>
        <li>Fifth item</li>
    </ul>
</body>
</html>
```

### 5.6 example5-specificity.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Specificity Examples</title>
    <style>
        /* 1 point - Element selector */
        p {
            color: blue;
        }

        /* 10 points - Class selector (wins against element) */
        .highlight {
            color: red;
        }

        /* 100 points - ID selector (wins against class) */
        #special {
            color: green;
        }

        /* Cascade - Last one wins if same specificity */
        .demo {
            font-size: 14px;
        }

        .demo {
            font-size: 16px; /* This wins */
        }

        /* Combining selectors increases specificity */
        div.container p {
            color: purple; /* More specific than just p */
        }
    </style>
</head>
<body>
    <h1>CSS Specificity Examples</h1>

    <p>This paragraph is blue (element selector: 1 point)</p>

    <p class="highlight">
        This paragraph is red (class selector: 10 points - overrides element)
    </p>

    <p id="special">
        This paragraph is green (ID selector: 100 points - overrides class)
    </p>

    <p style="color: orange;">
        This paragraph is orange (inline style: 1000 points - overrides everything except !important)
    </p>

    <h2>Specificity Table</h2>
    <table border="1">
        <tr>
            <th>Selector Type</th>
            <th>Specificity Points</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>Element</td>
            <td>1</td>
            <td>p { }</td>
        </tr>
        <tr>
            <td>Class</td>
            <td>10</td>
            <td>.highlight { }</td>
        </tr>
        <tr>
            <td>ID</td>
            <td>100</td>
            <td>#main { }</td>
        </tr>
        <tr>
            <td>Inline</td>
            <td>1000</td>
            <td>style="color:red;"</td>
        </tr>
    </table>

    <h2>Specificity Rules</h2>
    <ul>
        <li>Higher specificity wins over lower specificity</li>
        <li>If same specificity, last rule wins (cascade)</li>
        <li>!important overrides everything (avoid using)</li>
        <li>Inline styles beat all external CSS</li>
    </ul>

    <div class="container">
        <p>This demonstrates combined selector specificity</p>
    </div>
</body>
</html>
```

### 5.7 example6-box-model.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Box Model</title>
    <style>
        .box-demo {
            width: 200px;
            padding: 20px;
            border: 5px solid blue;
            margin: 30px;
            background-color: lightblue;
            text-align: center;
        }

        .container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .demo-box {
            width: 150px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed #333;
            background-color: #f0f0f0;
            margin: 10px;
        }

        .content-only {
            background-color: lightcoral;
        }

        .with-padding {
            padding: 20px;
            background-color: lightyellow;
        }

        .with-border {
            border: 5px solid green;
            padding: 10px;
            background-color: lightgreen;
        }

        .with-margin {
            margin: 20px;
            padding: 10px;
            border: 3px solid purple;
            background-color: plum;
        }
    </style>
</head>
<body>
    <h1>CSS Box Model</h1>

    <p>Every element in CSS is a box with content, padding, border, and margin.</p>

    <div class="container">
        <div class="demo-box content-only">Content Only</div>
        <div class="demo-box with-padding">With Padding</div>
        <div class="demo-box with-border">With Border</div>
        <div class="demo-box with-margin">With Margin</div>
    </div>

    <h2>Box Model Breakdown</h2>
    <div class="box-demo">
        <p><strong>CONTENT</strong></p>
        <p>↑ Padding: 20px ↑</p>
        <p>↑ Border: 5px ↑</p>
        <p>↑ Margin: 30px ↑</p>
    </div>

    <h2>Box Model Properties</h2>
    <ul>
        <li><strong>Content:</strong> The actual content (text, image)</li>
        <li><strong>Padding:</strong> Space inside, between content and border</li>
        <li><strong>Border:</strong> Line around the padding</li>
        <li><strong>Margin:</strong> Space outside, between border and other elements</li>
    </ul>

    <h2>Example Code</h2>
    <pre>
.box {
    width: 200px;        /* Content width */
    padding: 20px;       /* Inside space */
    border: 5px solid;   /* Border */
    margin: 30px;        /* Outside space */
}
    </pre>

    <h2>Calculating Total Size</h2>
    <p>
        If content width is 200px, padding is 20px, and border is 5px:<br>
        Total width = 200 + (20×2) + (5×2) = 250px
    </p>
</body>
</html>
```

### 5.8 styles.css

```css
/* Main CSS file for CSS Basics course */

/* Reset default styles */
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
    background-color: #f8f9fa;
    padding: 20px;
}

/* Header */
.main-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.main-header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.tagline {
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
    border-left: 4px solid #667eea;
    padding-left: 10px;
}

h3 {
    color: #555;
    font-size: 1.3em;
    margin-top: 15px;
    margin-bottom: 10px;
}

h4 {
    color: #666;
    font-size: 1.1em;
    margin-top: 10px;
}

/* Paragraphs */
p {
    margin-bottom: 15px;
    line-height: 1.8;
}

.intro-text {
    font-size: 1.1em;
    color: #555;
    font-style: italic;
}

.explanation {
    background-color: #fffbf0;
    padding: 15px;
    border-left: 4px solid #ffc107;
    margin: 15px 0;
    border-radius: 4px;
}

/* Code styling */
code {
    background-color: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    color: #d63384;
}

.code-example {
    background-color: #272c34;
    color: #61dafb;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    margin: 15px 0;
    font-family: 'Courier New', monospace;
}

.code-example code {
    background-color: transparent;
    color: #61dafb;
    padding: 0;
}

pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    border-left: 4px solid #667eea;
    margin: 15px 0;
    font-family: 'Courier New', monospace;
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

.link-example {
    display: inline-block;
    padding: 10px 15px;
    background-color: #667eea;
    color: white;
    border-radius: 5px;
    transition: all 0.3s;
}

.link-example:hover {
    background-color: #764ba2;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    transition: background-color 0.3s, transform 0.1s;
    margin: 5px;
}

button:hover {
    background-color: #764ba2;
}

button:active {
    transform: scale(0.98);
}

.button-example {
    padding: 12px 24px;
    font-size: 1.1em;
}

/* Input fields */
input {
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

/* Boxes and containers */
.box-demo {
    background-color: #e7f3ff;
    border: 3px solid #007bff;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
}

.box-demo p {
    margin: 0;
    color: #004085;
    font-weight: bold;
}

/* Color examples */
.color-hex {
    color: #FF5733;
}

.color-rgb {
    color: rgb(100, 200, 50);
}

.color-named {
    color: darkblue;
}

/* Font styles */
.font-style-demo {
    font-size: 1.1em;
    margin: 15px 0;
}

.font-weight-demo {
    font-weight: 700;
}

/* Display examples */
.block-demo {
    background-color: #ddd;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #999;
}

.inline-demo {
    background-color: #ffc107;
    padding: 5px 10px;
    margin: 5px;
    border: 1px solid #ff9800;
    border-radius: 3px;
}

/* Gradient demo */
.gradient-demo {
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    margin: 15px 0;
}

.gradient-demo p {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
}

/* Special list */
.special-list {
    list-style-type: none;
}

.special-list li:first-child {
    color: green;
    font-weight: bold;
}

.special-list li:last-child {
    color: red;
    font-weight: bold;
}

/* Tables */
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

/* Footer */
.main-footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
}

.main-footer p {
    margin: 0;
    opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }

    .main-header {
        padding: 20px;
    }

    .main-header h1 {
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
}
```

### 5.9 selectors.css

```css
/* 
   Additional CSS file demonstrating selector types
   Linked in example4-selectors.html
*/

/* Element selector - applies to all <p> tags */
p.selector-demo {
    background-color: #e3f2fd;
    padding: 10px;
    border-left: 4px solid #2196f3;
    margin: 10px 0;
}

/* Class selector - applies to all elements with class "highlight" */
.highlight {
    background-color: #fff9c4;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: bold;
}

/* ID selector - applies to element with id "unique" */
#unique {
    color: #d32f2f;
    background-color: #ffebee;
    padding: 15px;
    border-radius: 5px;
    font-weight: bold;
}

/* Group selector - applies to multiple element types */
p.group-demo,
div.group-demo,
span.group-demo {
    background-color: #f3e5f5;
    padding: 10px;
    border: 2px dashed #9c27b0;
    margin: 5px;
    display: inline-block;
}

/* Descendant selector - applies to <p> tags inside .parent div */
.parent p {
    color: #1565c0;
    font-style: italic;
}

/* Child selector - applies only to direct <p> children of .parent-child */
.parent-child > p {
    color: #00796b;
    background-color: #e0f2f1;
    padding: 10px;
}

/* Attribute selector - targets input fields by type */
input[type="text"] {
    border: 2px solid #2196f3;
    padding: 8px;
    border-radius: 4px;
}

input[type="email"] {
    border: 2px solid #ff9800;
    padding: 8px;
    border-radius: 4px;
}

input[type="password"] {
    border: 2px solid #f44336;
    padding: 8px;
    border-radius: 4px;
}

input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

/* Pseudo-class selector - applies when link is hovered */
a {
    color: #2196f3;
    text-decoration: none;
    transition: all 0.3s;
}

a:hover {
    color: #f44336;
    text-decoration: underline;
}

/* Pseudo-element selector - styles first letter */
.first-letter-demo::first-letter {
    font-size: 2em;
    font-weight: bold;
    color: #d32f2f;
}

/* Universal selector - applies to all elements (usually used for reset) */
* {
    /* Already defined in main styles.css */
}

/* Combining selectors */
.container p.text {
    color: #ffffff;
    background-color: #3f51b5;
    padding: 10px;
    border-radius: 5px;
}

/* :nth-child pseudo-class */
.list-demo li:nth-child(odd) {
    background-color: #fafafa;
}

.list-demo li:nth-child(even) {
    background-color: #f5f5f5;
    color: #ff5722;
    font-weight: bold;
}

.list-demo li:nth-child(2),
.list-demo li:nth-child(4) {
    border-left: 4px solid #4caf50;
    padding-left: 10px;
}
```

### 5.10 script.js

```javascript
// JavaScript for CSS Basics course

console.log("CSS Basics & Selectors - Page Loaded!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    // Log all elements with specific selectors
    const highlights = document.querySelectorAll('.highlight');
    console.log(`Found ${highlights.length} elements with class "highlight"`);

    // Log all links
    const links = document.querySelectorAll('a');
    console.log(`Found ${links.length} links on the page`);

    // Add click event to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log("Button clicked:", this.textContent);
        });
    });

    // Add input event listeners
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            console.log("Input changed:", this.value);
        });
    });
});

// Change background color on button click
function changeBackgroundColor() {
    const colors = ['#f0f0f0', '#ffffcc', '#ccffcc', '#ccf', '#ffcccc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
```

## 6. Code Explanation

### 6.1 CSS Rule Structure

```css
selector {          /* Targets which elements */
    property: value; /* Style declaration */
    property: value;
}
```

### 6.2 Three Ways to Add CSS

**Inline** - Quick but not recommended
```html
<p style="color: red;">Text</p>
```

**Internal** - Good for single pages
```html
<head>
    <style>
        p { color: red; }
    </style>
</head>
```

**External** - Best practice
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### 6.3 CSS Selector Hierarchy

From least to most specific:
1. **Element selectors** - `p { }`
2. **Class selectors** - `.highlight { }`
3. **ID selectors** - `#header { }`
4. **Inline styles** - `style="color:red;"`
5. **!important** - Highest priority (avoid)

### 6.4 Box Model Calculation

```
Total Width = Content Width + (Padding × 2) + (Border × 2) + (Margin × 2)

Example:
Content: 200px
Padding: 20px on each side = 40px
Border: 5px on each side = 10px
Margin: 10px on each side = 20px

Total = 200 + 40 + 10 + 20 = 270px
```

## 7. Common Mistakes

### ❌ Mistake 1: Wrong File Path
```html
<!-- WRONG -->
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="C:\Users\styles.css">

<!-- CORRECT -->
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="css/styles.css">
```

### ❌ Mistake 2: Not Using External CSS
```css
/* WRONG - Inline styles make HTML messy */
<p style="color: red; font-size: 16px; margin: 10px;">Text</p>

/* CORRECT - Use CSS file */
<p class="message">Text</p>

/* In styles.css */
.message {
    color: red;
    font-size: 16px;
    margin: 10px;
}
```

### ❌ Mistake 3: Missing Box-Sizing

```css
/* WRONG - Width includes only content */
* {
    width: 100px;
    padding: 10px;  /* Makes total 120px! */
}

/* CORRECT - Width includes padding and border */
* {
    box-sizing: border-box;
    width: 100px;
    padding: 10px;  /* Total stays 100px */
}
```

### ❌ Mistake 4: Not Understanding Specificity

```css
/* WRONG - Class selector has more specificity than element */
p { color: blue; }      /* 1 point */
.highlight { color: red; }  /* 10 points - WINS */

/* CORRECT - Know the specificity rules */
```

### ❌ Mistake 5: Confusing Margin and Padding

```css
/* WRONG */
.box {
    padding: 20px;  /* Creates space INSIDE the box */
    margin: 20px;   /* Creates space OUTSIDE the box */
}

/* Remember:
   Padding = inside space
   Margin = outside space
*/
```

### ❌ Mistake 6: Missing Units

```css
/* WRONG */
.box {
    width: 100;     /* Missing unit! */
    padding: 10;    /* Missing unit! */
}

/* CORRECT */
.box {
    width: 100px;
    padding: 10px;
}
```

### ❌ Mistake 7: Not Using Shorthand

```css
/* WRONG - Too verbose */
.box {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}

/* CORRECT - Use shorthand */
.box {
    padding: 10px 20px;  /* top/bottom left/right */
}

/* Or */
.box {
    padding: 10px 20px 10px 20px;  /* top right bottom left */
}
```

## 8. Practice Task

### Task: Create a Styled Blog Card

Create an HTML page with CSS that includes:

1. **A header** with title and subtitle
2. **Three blog cards** with:
   - Title (h3)
   - Date (small text)
   - Description (paragraph)
   - Read More button
3. **Styling requirements:**
   - Use external CSS file
   - Cards should have shadow and border
   - Different background colors for each card
   - Hover effect on cards (slight lift and shadow change)
   - Styled buttons with hover effect
   - Proper spacing (margin and padding)
   - Responsive layout that stacks on mobile
4. **Advanced (Optional):**
   - Use gradients for header
   - Use CSS grid or flexbox for layout
   - Smooth transitions on hover
   - Color scheme with at least 3 colors

**Files needed:**
- `blog.html` - HTML structure
- `blog.css` - All styling
- `blog.js` - Log card clicks (optional)

## 9. README.md Update

Add this to your main repository README:

```
### CSS Basics & Selectors
- Understanding CSS syntax and rules
- Three ways to add CSS (inline, internal, external)
- Selector types (element, class, ID, attribute, pseudo-classes)
- CSS specificity and cascade
- Box model (content, padding, border, margin)
- Common properties (color, font, spacing, display)
- Units in CSS (px, em, rem, %)
- Best practices for organizing CSS
- Common mistakes and how to fix them
```

---

**Next Topics:**
- CSS Box Model & Spacing
- CSS Flexbox
- CSS Grid
- Responsive Design & Media Queries
- CSS Animations & Transitions

---

Created: 2024  
Part of: Frontend Development Course  
Difficulty: Beginner to Intermediate
