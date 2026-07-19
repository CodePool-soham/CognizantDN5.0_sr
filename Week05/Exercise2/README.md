# Exercise 02 - React Components (Student Management Portal)

## 📌 Project Overview

This project demonstrates the use of **React Class Components** to build a simple **Student Management Portal**. Three independent components—**Home**, **About**, and **Contact**—are created and rendered through the main `App` component, illustrating the fundamentals of component-based development in React.

---

## 🎯 Objectives Covered

- Understand React Components and their purpose.
- Differentiate between React Components and JavaScript functions.
- Learn the types of React Components.
- Create Class Components.
- Understand the `render()` method.
- Understand the role of constructors in Class Components.
- Render multiple components inside a parent component.
- Build a simple React application using reusable components.

---

## 🧩 Technologies Used

- React
- JavaScript (ES6)
- JSX
- Node.js
- NPM
- Create React App
- Visual Studio Code

---

## 📋 Prerequisites

Before starting this exercise, ensure the following software is installed:

- Node.js
- NPM
- Visual Studio Code
- Google Chrome (or any modern browser)

---

## 🚀 Project Setup

### Step 1: Create a React Application

```bash
npx create-react-app StudentApp
```

### Step 2: Navigate to the Project

```bash
cd StudentApp
```

### Step 3: Open in Visual Studio Code

```bash
code .
```

### Step 4: Run the Application

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```text
StudentApp
│
├── public
│
├── src
│   ├── Components
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

---

## 🏠 Home Component

Displays the welcome message for the Home page.

```jsx
import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the Home page of Student Management Portal</h2>
            </div>
        );
    }
}

export default Home;
```

---

## ℹ️ About Component

Displays information about the Student Management Portal.

```jsx
import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the About page of the Student Management Portal</h2>
            </div>
        );
    }
}

export default About;
```

---

## 📞 Contact Component

Displays the Contact page.

```jsx
import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the Contact page of the Student Management Portal</h2>
            </div>
        );
    }
}

export default Contact;
```

---

## 🖥️ Main Application (App.js)

The `App` component imports and renders all three components.

```jsx
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="App">
            <Home />
            <About />
            <Contact />
        </div>
    );
}

export default App;
```

---

## 🎨 App.css

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

## 🧪 Application Output

Running the application displays:

```text
Welcome to the Home page of Student Management Portal

Welcome to the About page of the Student Management Portal

Welcome to the Contact page of the Student Management Portal
```

---

# React Concepts

## What is a React Component?

A React Component is an independent and reusable piece of UI that returns JSX. Components help organize applications into smaller, maintainable, and reusable modules.

---

## React Components vs JavaScript Functions

| React Component | JavaScript Function |
|-----------------|---------------------|
| Returns JSX | Returns any JavaScript value |
| Used to build UI | Used for general programming |
| Can manage state | Does not manage React state |
| Receives Props | Receives Parameters |
| Can be Class or Function Component | Only Function |

---

## Types of React Components

### Function Component

A Function Component is a JavaScript function that returns JSX.

Example:

```jsx
function Home() {
    return <h2>Home Component</h2>;
}
```

---

### Class Component

A Class Component is an ES6 class that extends `React.Component` and must implement the `render()` method.

Example:

```jsx
class Home extends React.Component {
    render() {
        return <h2>Home Component</h2>;
    }
}
```

---

## Constructor in Class Component

The constructor initializes the component state and binds methods.

Example:

```jsx
constructor(props) {
    super(props);

    this.state = {
        name: "Student"
    };
}
```

---

## render() Method

The `render()` method is mandatory in every Class Component. It returns the JSX to be displayed on the browser.

Example:

```jsx
render() {
    return (
        <h2>Hello React</h2>
    );
}
```

---

## Advantages of React Components

- Reusable
- Modular
- Easy to Maintain
- Better Code Organization
- Faster Development
- Easy Testing
- Improved Readability

---

## Key Learnings

- Learned the concept of React Components.
- Created multiple Class Components.
- Rendered components using a parent component.
- Understood the purpose of constructors and the `render()` method.
- Built a simple Student Management Portal using reusable components.

---

## ✅ Conclusion

This exercise demonstrates the implementation of **React Class Components** by building a simple **Student Management Portal**. The application consists of three reusable components—**Home**, **About**, and **Contact**—rendered through the main `App` component. It provides a solid understanding of component-based architecture, JSX rendering, and the fundamentals of developing React applications using Class Components.
