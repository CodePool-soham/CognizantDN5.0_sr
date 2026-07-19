# Exercise 01 – React Environment Setup

## Overview

This exercise demonstrates how to set up a **React development environment** using **Node.js**, **NPM**, and **Create React App**. A simple React application named **myfirstreact** is created to display the following message:

> **Welcome to the first session of React**

---

## Objectives

- Understand the concept of Single Page Applications (SPA).
- Learn the basics of React.
- Differentiate between SPA and MPA.
- Understand the advantages and disadvantages of React.
- Learn about the Virtual DOM.
- Install and configure the React development environment.
- Create and run a React application using Create React App.

---

## Technologies Used

- React
- JavaScript (ES6)
- Node.js
- NPM
- Create React App
- Visual Studio Code

---

## Software Requirements

- Node.js (Latest LTS Version)
- NPM (Included with Node.js)
- Visual Studio Code
- Google Chrome or any modern web browser

---

## Project Structure

```text
myfirstreact/

│
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

---

# Installation Steps

## Step 1 – Install Node.js

Download and install Node.js from:

https://nodejs.org/

Verify the installation:

```bash
node -v
npm -v
```

---

## Step 2 – Create a React Application

Create a new React project named **myfirstreact**.

```bash
npx create-react-app myfirstreact
```

> **Note:** Modern versions of React recommend using `npx create-react-app` directly. Installing Create React App globally is optional and generally not required.

---

## Step 3 – Navigate to the Project

```bash
cd myfirstreact
```

---

## Step 4 – Open the Project in Visual Studio Code

```bash
code .
```

---

## Step 5 – Modify `App.js`

Replace the contents of **src/App.js** with:

```jsx
function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```

---

## Step 6 – Run the Application

Start the development server:

```bash
npm start
```

---

## Step 7 – View the Application

Open the browser and visit:

```text
http://localhost:3000
```

Expected Output:

```text
Welcome to the first session of React
```

---

# Source Code

## App.js

```jsx
function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```

---

## App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

---

# React Concepts

## Single Page Application (SPA)

A **Single Page Application (SPA)** loads a single HTML page and dynamically updates content without reloading the entire page. This provides a faster and smoother user experience.

### Benefits of SPA

- Faster page loading
- Better user experience
- Dynamic content updates
- Reduced server requests
- Improved performance

---

## What is React?

React is an open-source JavaScript library developed by **Meta (formerly Facebook)** for building fast, interactive, and reusable user interfaces using components.

---

## SPA vs MPA

| SPA | MPA |
|-----|-----|
| Loads a single page | Loads multiple pages |
| Faster navigation | Slower navigation |
| Dynamic content updates | Full page reloads |
| Better user experience | Traditional navigation |
| Examples: Gmail, Facebook | Examples: Traditional websites |

---

## Advantages of React

- Component-based architecture
- Virtual DOM for improved performance
- Reusable components
- One-way data binding
- Strong community support
- Easy integration with other libraries

---

## Limitations of React

- JSX has an initial learning curve
- Only handles the UI layer
- Requires additional libraries for routing and state management
- Rapidly evolving ecosystem

---

## Virtual DOM

The **Virtual DOM** is a lightweight copy of the Real DOM. React first updates the Virtual DOM, compares it with the previous version, and efficiently updates only the changed elements in the Real DOM. This minimizes DOM manipulation and improves application performance.

---

## Key Features of React

- JSX
- Components
- Virtual DOM
- One-way Data Binding
- Props
- State Management
- Fast Rendering
- Reusable Code
- Easy Debugging

---

## Expected Output

```text
Welcome to the first session of React
```

Displayed in the browser at:

```text
http://localhost:3000
```

---

## Result

Successfully set up a React development environment using **Node.js**, **NPM**, and **Create React App**. A React application named **myfirstreact** was created and executed successfully, displaying the message **"Welcome to the first session of React"** in the browser.
