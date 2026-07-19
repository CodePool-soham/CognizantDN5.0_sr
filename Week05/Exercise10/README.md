# Exercise 10 - JSX and Conditional Rendering (Office Space Rental Application)

## Objective

This exercise demonstrates the use of **JSX** in React to create an Office Space Rental Application. The application displays office space details using JSX expressions, attributes, inline styling, and conditional rendering based on office rent.

---

# Learning Objectives

After completing this exercise, you will be able to:

- Understand JSX syntax.
- Use JavaScript expressions inside JSX.
- Apply attributes in JSX.
- Apply inline CSS styling.
- Render lists using the `map()` function.
- Perform conditional rendering using ternary operators.
- Display dynamic data using React components.

---

# Prerequisites

Before starting this exercise, ensure you have:

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
officespaceapp/

│
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── OfficeSpace.js
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

---

# Steps Performed

## Step 1: Create React Project

Create a React application:

```bash
npx create-react-app officespaceapp
```

---

## Step 2: Navigate to Project

```bash
cd officespaceapp
```

---

## Step 3: Open Project in VS Code

```bash
code .
```

---

# Step 4: Create OfficeSpace Component

Create:

```
src/OfficeSpace.js
```

The component contains:

- Office details
- JSX elements
- JavaScript expressions
- Inline styling
- Conditional rendering

Example:

```jsx
function OfficeSpace(){

 const offices = [
  {
    name:"DBS",
    rent:50000,
    address:"Chennai"
  }
 ];

 return(
  <div>
    <h1 style={{color:"blue"}}>
      Office Space Rental Application
    </h1>

    {
      offices.map((office)=>(
        <div>
          <h2>{office.name}</h2>

          <p>
            Address: {office.address}
          </p>

          <p>
            Rent:
            <span
             style={{
              color:
              office.rent < 60000
              ? "red"
              : "green"
             }}
            >
              {" ₹"+office.rent}
            </span>
          </p>

        </div>
      ))
    }

  </div>
 );

}

export default OfficeSpace;
```

---

# Step 5: Modify App.js

Update `App.js`:

```jsx
import './App.css';
import OfficeSpace from './OfficeSpace';


function App(){

 return(
  <div className="App">

    <OfficeSpace/>

  </div>
 );

}

export default App;
```

---

# Step 6: Run Application

Execute:

```bash
npm start
```

---

# Step 7: Open Browser

Visit:

```
http://localhost:3000
```

---

# Expected Output

The application displays:

- **Office Space Rental Application** heading in blue.
- Office space image.
- List of office spaces containing:

  - Office Name
  - Address
  - Rent

Rent color display:

- **Red** → If rent is less than ₹60,000
- **Green** → If rent is ₹60,000 or above

Example:

```
Office Space Rental Application


DBS

Address: Chennai

Rent: ₹50000


Tech Park

Address: Bangalore

Rent: ₹75000
```

---

# React Concepts

## What is JSX?

JSX (JavaScript XML) is a syntax extension of JavaScript that allows developers to write HTML-like code inside JavaScript.

Example:

```jsx
<h1>
 Welcome to React
</h1>
```

---

# Features of JSX

- HTML-like syntax
- Easy to read and write
- Supports JavaScript expressions
- Faster development
- Improved readability

---

# JavaScript Expressions in JSX

JavaScript expressions are written inside curly braces `{}`.

Example:

```jsx
<h2>
 {office.name}
</h2>
```

Expressions allow dynamic data display in React components.

---

# JSX Attributes

JSX attributes are similar to HTML attributes but follow camelCase naming conventions.

Example:

```jsx
<img
 src="image.jpg"
 alt="Office"
 width="300"
/>
```

Common JSX attributes:

- className
- onClick
- style
- src
- alt

---

# Inline Styling

React allows CSS styling using JavaScript objects.

Example:

```jsx
<h1
 style={{
  color:"blue"
 }}
>
 Office Space Rental Application
</h1>
```

Advantages:

- Dynamic styling
- Conditional formatting
- Component-specific styles

---

# Rendering Lists using map()

The `map()` function is used to render multiple elements dynamically.

Example:

```jsx
offices.map((office)=>(
 <h2>
  {office.name}
 </h2>
))
```

Advantages:

- Displays dynamic data
- Reduces repetitive code
- Works efficiently with arrays

---

# Conditional Rendering

Conditional rendering displays content based on conditions.

Example:

```jsx
<span
style={{
 color:
 office.rent < 60000
 ? "red"
 : "green"
}}
>
 ₹{office.rent}
</span>
```

Condition:

```
Rent < ₹60000
        |
        ↓
      Red Color


Rent >= ₹60000
        |
        ↓
      Green Color
```

---

# Advantages of JSX

- Easy to understand
- Supports JavaScript logic
- Improves readability
- Faster UI development
- Better debugging
- Supports dynamic rendering

---

# Result

Successfully created a React application named **officespaceapp**.

Implemented:

- JSX syntax
- JavaScript expressions
- JSX attributes
- Inline styling
- List rendering using `map()`
- Conditional rendering using ternary operators

The application dynamically displays office space details and changes rent color based on the rental value.
