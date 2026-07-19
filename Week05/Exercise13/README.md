# Exercise 13 - Conditional Rendering and Lists in React (Blogger App)

## Objective

This exercise demonstrates **Conditional Rendering**, **Rendering Multiple Components**, and **Rendering Lists using map()** in React by creating a Blogger application.

The application displays:

- Book Details
- Blog Details
- Course Details

using React components, conditional rendering techniques, and dynamic list rendering.

---

# Learning Objectives

After completing this exercise, you will be able to:

- Explain different ways of Conditional Rendering.
- Render multiple React components.
- Define and use List Components.
- Understand the importance of Keys in React.
- Extract components with Keys.
- Use the React `map()` function.
- Display collections dynamically.

---

# Prerequisites

Before starting this exercise, ensure that the following are installed:

- Node.js
- NPM
- Visual Studio Code

---

# Software Requirements

- Node.js (Latest LTS Version)
- NPM
- Visual Studio Code
- Google Chrome or any modern web browser

---

# Project Structure

```
bloggerapp/

│
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── BookDetails.js
│   ├── BlogDetails.js
│   ├── CourseDetails.js
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

---

# Steps Performed

## Step 1: Create React Application

A new React application was created using:

```bash
npx create-react-app bloggerapp
```

---

## Step 2: Navigate to Project Folder

```bash
cd bloggerapp
```

---

## Step 3: Open Project in Visual Studio Code

```bash
code .
```

---

# Step 4: Create BookDetails Component

Created `BookDetails.js` component.

This component displays book information dynamically using the `map()` function.

Example:

```jsx
books.map(book => (

<li key={book.id}>

Book Name: {book.name}

</li>

))
```

---

# Step 5: Create BlogDetails Component

Created `BlogDetails.js` component.

This component displays blog information using dynamic list rendering.

Example:

```jsx
blogs.map(blog => (

<li key={blog.id}>

{blog.title}

</li>

))
```

---

# Step 6: Create CourseDetails Component

Created `CourseDetails.js` component.

This component displays course details using React list rendering.

Example:

```jsx
courses.map(course => (

<li key={course.id}>

{course.name}

</li>

))
```

---

# Step 7: Modify App.js

The App component contains:

- Book details data
- Blog details data
- Course details data

The application uses:

- JSX expressions
- Conditional rendering
- List rendering

Example:

```jsx
let content;

if(showBlogs)
{
    content = BlogDetails;
}
else
{
    content = <h3>No Blogs Available</h3>;
}
```

---

# Step 8: Apply CSS Styling

CSS styling was applied to create separate sections for:

- Books
- Blogs
- Courses

Example:

```css
.st2 {

border: 2px solid green;
width: 30%;
display: inline-block;
padding: 10px;

}
```

---

# Step 9: Run the Application

Execute the following command:

```bash
npm start
```

---

# Step 10: Open Application

Open the browser and visit:

```
http://localhost:3000
```

---

# Expected Output

The application displays three different sections.

---

# Book Details

Displays available books with their details.

Example:

```
Master React

Price: ₹670
```

---

# Blog Details

When:

```javascript
showBlogs = true
```

The list of blogs is displayed.

Example:

```
React Learning
Author: Scott
```

When:

```javascript
showBlogs = false
```

The output becomes:

```
No Blogs Available
```

---

# Course Details

Displays available courses.

Example:

```
React

Start Date: 10-07-2026
```

---

# React Concepts

## Conditional Rendering

Conditional Rendering allows React to display different UI elements based on a condition.

Example:

```jsx
if(showBlogs)
{
    content = BlogDetails;
}
else
{
    content = <h3>No Blogs Available</h3>;
}
```

---

# Ways of Conditional Rendering

## 1. if...else Statement

Used when different components need to be displayed based on a condition.

Example:

```jsx
if(condition)
{
    return <ComponentA />;
}

return <ComponentB />;
```

---

## 2. Ternary Operator

A shorter way of writing if-else conditions.

Syntax:

```jsx
condition ? trueExpression : falseExpression
```

Example:

```jsx
isLoggedIn ? <Logout /> : <Login />
```

---

## 3. Logical AND Operator

Used when a component should render only when a condition is true.

Example:

```jsx
show && <Component />
```

---

## 4. Element Variables

Element variables store JSX elements before rendering.

Example:

```jsx
let content;

if(condition)
{
    content = <Component />;
}
```

---

## 5. Returning null

A component can return `null` to prevent rendering.

Example:

```jsx
function Example(props)
{
    if(!props.show)
    {
        return null;
    }

    return <h2>Hello React</h2>;
}
```

---

# Rendering Multiple Components

React allows multiple components to be rendered together.

Example:

```jsx
<div>

{BookDetails}

{BlogDetails}

{CourseDetails}

</div>
```

Advantages:

- Better application structure
- Component reusability
- Cleaner code

---

# List Components

A List Component displays multiple data items dynamically.

Example:

```javascript
const books = [

{
id:1,
name:"React"
}

];
```

Lists are commonly created using arrays.

---

# React map() Function

The `map()` function is used to iterate through arrays and generate JSX elements.

Example:

```jsx
books.map(book => (

<li>

{book.name}

</li>

))
```

Advantages:

- Dynamic rendering
- Less repeated code
- Easy data management

---

# Keys in React

Keys are unique identifiers used by React when rendering lists.

Example:

```jsx
<li key={book.id}>
```

Keys help React:

- Identify changed elements
- Update DOM efficiently
- Improve rendering performance

Good keys should be:

- Unique
- Stable
- Permanent

---

# Extracting Components with Keys

Large applications can separate list logic into reusable components.

Example:

```jsx
<BookDetails />

<BlogDetails />

<CourseDetails />
```

Advantages:

- Code reuse
- Easy maintenance
- Better organization

---

# Advantages of Lists and Keys

- Faster rendering
- Efficient DOM updates
- Improved performance
- Cleaner application structure
- Reusable components

---

# Result

Successfully created a React application named **bloggerapp**.

The application demonstrates:

- Conditional Rendering
- Rendering Multiple Components
- List Rendering using `map()`
- React Keys
- Element Variables
- Dynamic data display

The Blogger application successfully displays Book Details, Blog Details, and Course Details using React rendering techniques.
