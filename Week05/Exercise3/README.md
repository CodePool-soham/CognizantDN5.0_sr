# Exercise 03 - React Function Component (Score Calculator App)

## 📌 Project Overview

This project demonstrates the implementation of a **React Function Component** by developing a simple **Student Score Calculator** application. The application accepts student information through **Props**, calculates the percentage score, applies CSS styling, and displays the student's details and score in the browser.

---

## 🎯 Objectives Covered

- Understand React Components.
- Differentiate between React Components and JavaScript Functions.
- Learn the types of React Components.
- Understand Function Components.
- Understand Class Components.
- Learn the purpose of constructors and the `render()` method.
- Pass data using Props.
- Create reusable Function Components.
- Apply CSS styling to React components.
- Render components within the application.

---

## 🧩 Technologies Used

- React
- JavaScript (ES6)
- JSX
- CSS
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

### Step 1: Create the React Application

```bash
npx create-react-app scorecalculatorapp
```

### Step 2: Navigate to the Project

```bash
cd scorecalculatorapp
```

### Step 3: Open the Project

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
scorecalculatorapp
│
├── public
│
├── src
│   ├── Components
│   │   └── CalculateScore.js
│   │
│   ├── Stylesheets
│   │   └── mystyle.css
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

## 📝 CalculateScore Component

The `CalculateScore` function component accepts student details through **Props**, calculates the percentage score, and displays the result.

```jsx
import "../Stylesheets/mystyle.css";

const percentToDecimal = (decimal) => {
    return decimal.toFixed(2) + "%";
};

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, total, goal }) => (
    <div className="formatstyle">

        <h1>
            <font color="Brown">Student Details:</font>
        </h1>

        <div className="Name">
            <b><span>Name:</span></b>
            <span>{Name}</span>
        </div>

        <div className="School">
            <b><span>School:</span></b>
            <span>{School}</span>
        </div>

        <div className="Total">
            <b><span>Total:</span></b>
            <span>{total}</span>
            <span> Marks</span>
        </div>

        <div className="Score">
            <b>Score:</b>
            <span>{calcScore(total, goal)}</span>
        </div>

    </div>
);
```

---

## 🎨 CSS Styling (mystyle.css)

```css
h2 {
    color: blue;
}

p {
    font-size: 18px;
    font-family: Arial;
}

div {
    text-align: center;
}
```

---

## 🖥️ Main Application (App.js)

The `App` component imports and renders the `CalculateScore` component while passing student information through Props.

```jsx
import { CalculateScore } from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                Name={"Steeve"}
                School={"DNV Public School"}
                total={284}
                goal={300}
            />
        </div>
    );
}

export default App;
```

> **Note:** The `goal` property represents the maximum marks. Using `goal={300}` calculates the correct percentage (`94.67%`). Using a smaller value such as `goal={3}` will produce an unrealistic percentage.

---

## 🧪 Application Output

The application displays:

```text
Student Details

Name : Steeve

School : DNV Public School

Total : 284 Marks

Score : 94.67%
```

---

# React Concepts

## What is a React Component?

A React Component is an independent and reusable piece of UI that returns JSX. Components help divide an application into smaller, maintainable, and reusable units.

---

## React Components vs JavaScript Functions

| React Component | JavaScript Function |
|-----------------|---------------------|
| Returns JSX | Returns any JavaScript value |
| Used for UI development | Used for general programming |
| Receives Props | Receives Parameters |
| Can manage State | Does not manage React State |
| Reusable UI block | General-purpose function |

---

## Types of React Components

React provides two types of components.

### Function Component

- Created using JavaScript functions.
- Simpler and easier to write.
- Supports React Hooks.
- Recommended for modern React development.

Example:

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}
```

---

### Class Component

- Created using ES6 classes.
- Extends `React.Component`.
- Uses the mandatory `render()` method.
- Supports lifecycle methods and constructors.

Example:

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello React</h1>;
    }
}
```

---

## Function Component

A Function Component is a JavaScript function that accepts **Props** as input and returns JSX.

Example:

```jsx
function Student() {
    return <h2>Student Details</h2>;
}
```

---

## Class Component

A Class Component is an ES6 class that extends `React.Component` and renders JSX through the `render()` method.

---

## Constructor

A constructor is available only in Class Components. It initializes the component state and binds event methods.

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

The `render()` method is mandatory in Class Components. It returns the JSX that React displays in the browser.

Example:

```jsx
render() {
    return (
        <h2>Hello React</h2>
    );
}
```

---

## What are Props?

Props (Properties) are read-only inputs passed from a parent component to a child component.

Example:

```jsx
<Student
    Name="John"
    total={280}
    goal={300}
/>
```

---

## Advantages of Function Components

- Simple syntax
- Easy to understand
- Less code
- Better readability
- Supports React Hooks
- Reusable
- Better performance in modern React

---

## Key Learnings

- Learned the concept of React Function Components.
- Passed data from parent to child using Props.
- Calculated values dynamically inside a component.
- Applied CSS styling to React components.
- Built a reusable Score Calculator component.
- Understood the differences between Function and Class Components.

---

## ✅ Conclusion

This exercise demonstrates the implementation of a **React Function Component** by building a simple **Student Score Calculator** application. The application accepts student information through **Props**, calculates the percentage score dynamically, applies CSS styling, and displays the results in the browser. It provides a solid understanding of reusable components, Props, JSX, and the fundamentals of modern React development.
