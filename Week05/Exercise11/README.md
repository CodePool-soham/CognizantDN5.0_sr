# Exercise 11 - React Event Handling (Currency Converter Application)

## Objective

This exercise demonstrates different types of **Event Handling in React**. A React application is created to implement button click events, multiple event handlers, passing arguments to event handlers, Synthetic Events, and a Currency Converter component.

---

## Learning Objectives

After completing this exercise, you will be able to:

- Explain React Events.
- Understand Event Handlers.
- Define Synthetic Events.
- Identify React Event Naming Conventions.
- Implement Event Handling in React applications.
- Use the `this` keyword in Class Components.
- Pass arguments to Event Handlers.
- Handle Form Submission events.

---

## Prerequisites

Before starting this exercise, ensure that the following are installed:

- Node.js
- NPM
- Visual Studio Code

---

## Software Requirements

- Node.js (Latest LTS Version)
- NPM
- Visual Studio Code
- Google Chrome or any modern web browser

---

# Project Structure

```
eventexamplesapp/

│
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Counter.js
│   ├── Welcome.js
│   ├── SyntheticEvent.js
│   ├── CurrencyConvertor.js
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

---

# Steps Performed

## Step 1: Create React Application

Create the React project using:

```bash
npx create-react-app eventexamplesapp
```

---

## Step 2: Navigate to Project Folder

```bash
cd eventexamplesapp
```

---

## Step 3: Open Project in Visual Studio Code

```bash
code .
```

---

# Step 4: Create Counter Component

Created **Counter.js** to demonstrate:

- Button click events.
- State updates.
- Multiple event handlers.
- Usage of `this` keyword.

Features:

- Increase button increments counter value.
- Decrement button decreases counter value.
- Greeting message is displayed after increment.

---

# Step 5: Create Welcome Component

Created **Welcome.js**.

Implemented:

- Passing arguments to event handlers.
- Arrow functions.

Example:

```jsx
<button onClick={() => sayWelcome("Welcome")}>
```

---

# Step 6: Create SyntheticEvent Component

Created **SyntheticEvent.js**.

Implemented React Synthetic Event handling.

Example:

```jsx
function handleClick(event)
{
    alert("I was clicked");
}
```

---

# Step 7: Create Currency Converter Component

Created **CurrencyConvertor.js**.

Features implemented:

- Form submission handling.
- Input event handling.
- Rupees to Euro conversion.

Conversion formula:

```
Euro = Rupees / 90
```

---

# Step 8: Modify App.js

Imported and displayed:

- Counter Component
- Welcome Component
- SyntheticEvent Component
- CurrencyConvertor Component

---

# Step 9: Run the Application

Execute:

```bash
npm start
```

---

# Step 10: Open Application

Open browser and visit:

```
http://localhost:3000
```

---

# Expected Output

The application displays four sections.

---

## 1. Counter Example

Functionality:

- Increase button increases count.
- Decrement button decreases count.
- Greeting message appears after increment.

Example Output:

```
Count: 1

Hello! Welcome to React Event Handling
```

---

## 2. Welcome Example

Clicking the button:

```
Say Welcome
```

Displays:

```
Welcome
```

---

## 3. Synthetic Event Example

Clicking:

```
OnPress
```

Displays:

```
I was clicked
```

---

## 4. Currency Converter

User enters amount in Indian Rupees.

Example:

Input:

```
900
```

Output:

```
Euro: 10.00
```

---

# React Concepts

## React Events

React Events are actions performed by users that trigger specific functions.

Examples:

- Click
- Change
- Submit
- MouseOver
- KeyDown

---

# Event Handlers

An Event Handler is a JavaScript function that executes when an event occurs.

Example:

```jsx
<button onClick={handleClick}>
Click Me
</button>
```

---

# React Event Naming Convention

React uses camelCase naming conventions.

| HTML Event | React Event |
|------------|-------------|
| onclick | onClick |
| onchange | onChange |
| onsubmit | onSubmit |
| ondblclick | onDoubleClick |
| onmouseover | onMouseOver |

---

# Synthetic Events

Synthetic Events are React wrappers around native browser events.

Advantages:

- Cross-browser compatibility.
- Consistent event behavior.
- Improved event handling.

Example:

```jsx
function handleClick(event)
{
    console.log(event);
}
```

---

# Multiple Event Handling

A single event can execute multiple functions.

Example:

```javascript
increment()
{
    this.setState({
        count:this.state.count + 1
    });

    this.sayHello();
}
```

Here:

- Counter value increases.
- Greeting message is displayed.

---

# Passing Arguments to Event Handlers

Arguments can be passed using arrow functions.

Example:

```jsx
<button onClick={() => sayWelcome("Welcome")}>
```

---

# Using this Keyword

The `this` keyword refers to the current class component instance.

Example:

```javascript
this.setState({
    count:this.state.count + 1
});
```

---

# Form Event Handling

Forms use the `onSubmit` event.

Example:

```jsx
<form onSubmit={this.handleSubmit}>
```

`event.preventDefault()` prevents the browser from refreshing the page after submission.

---

# Advantages of React Event Handling

- Easy implementation.
- Better user interaction.
- Supports reusable event handlers.
- Cross-browser compatibility.
- Supports passing arguments.
- Improves application performance.

---

# Result

Successfully created a React application named **eventexamplesapp** and implemented React Event Handling concepts including:

- Button click events.
- Multiple event handlers.
- Passing arguments.
- Synthetic Events.
- Use of `this` keyword.
- Form submission handling.
- Currency conversion from Indian Rupees to Euro.

The application successfully demonstrates event handling in React components.
