# Exercise 05 - Styling React Components using CSS Modules

## Objective

This exercise demonstrates how to style React components using **CSS Modules** and **Inline Styles**. A Cognizant Cohort Dashboard is created that displays the details of different training cohorts with customized styling.

---

## Learning Objectives

After completing this exercise, you will be able to:

- Understand the need for styling React components.
- Work with CSS Modules.
- Apply Inline Styles in React.
- Apply styles using the `className` property.
- Apply styles using the `style` property.
- Create reusable CSS Modules.

---

## Prerequisites

Before starting this exercise, ensure you have the following installed:

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
CohortDashboard/

│
├── node_modules/

├── public/

├── src/

│   ├── Components/

│   │   └── CohortDetails.js

│   │

│   ├── Stylesheets/

│   │   └── CohortDetails.module.css

│   │

│   ├── App.js

│   ├── App.css

│   ├── index.js

│   └── ...

├── package.json

└── README.md
```

---

# Steps Performed

## Step 1: Download the React Application

Download or unzip the provided React application.

---

## Step 2: Restore Node Packages

Open the terminal inside the project folder and execute:

```bash
npm install
```

---

## Step 3: Open the Project

```bash
code .
```

---

## Step 4: Create CSS Module

Inside the **src/Stylesheets** folder create:

```
CohortDetails.module.css
```

---

## Step 5: Add CSS Styles

Replace the contents of **CohortDetails.module.css** with:

```css
.box {

  width: 300px;

  display: inline-block;

  margin: 10px;

  padding: 10px 20px;

  border: 1px solid black;

  border-radius: 10px;

}


dt {

  font-weight: 500;

}
```

---

## Step 6: Create CohortDetails Component

Create **CohortDetails.js** inside the Components folder.

```jsx
import React from "react";
import styles from "../Stylesheets/CohortDetails.module.css";


function CohortDetails() {

  const cohorts = [

    {
      name: "ADMDF10 - .NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose"
    },

    {
      name: "ADM21JF014 - JAVA FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },

    {
      name: "CDBJF21025 - JAVA FSD",
      startDate: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe"
    }

  ];


  return (

    <div>

      {
        cohorts.map((cohort, index) => (

          <div className={styles.box} key={index}>

            <h3
              style={{
                color:
                  cohort.status === "Ongoing"
                    ? "green"
                    : "blue"
              }}
            >
              {cohort.name}
            </h3>


            <dl>

              <dt>Start Date</dt>
              <dd>{cohort.startDate}</dd>


              <dt>Status</dt>
              <dd>{cohort.status}</dd>


              <dt>Coach</dt>
              <dd>{cohort.coach}</dd>


              <dt>Trainer</dt>
              <dd>{cohort.trainer}</dd>

            </dl>

          </div>

        ))
      }

    </div>

  );

}


export default CohortDetails;
```

---

## Step 7: Modify App.js

Replace the existing code with:

```jsx
import './App.css';
import CohortDetails from './Components/CohortDetails';


function App() {

  return (

    <div className="App">

      <h1>Cognizant Cohort Dashboard</h1>

      <CohortDetails />

    </div>

  );

}


export default App;
```

---

## Step 8: App.css

```css
.App {

  text-align: center;

}
```

---

## Step 9: Run the Application

```bash
npm start
```

---

## Step 10: Open in Browser

Visit:

```
http://localhost:3000
```

---

# Expected Output

The application displays a **Cognizant Cohort Dashboard** with three cohort cards.

Each card displays:

- Cohort Name
- Start Date
- Status
- Coach
- Trainer

### Styling Applied:

- Box width: **300px**
- Black border with rounded corners
- Margin and padding applied
- **Green** heading for **Ongoing** cohorts
- **Blue** heading for other cohorts

---

# React Concepts

## Why Styling is Needed in React?

Styling improves the appearance, readability, usability, and user experience of a React application.

Benefits:

- Better UI
- Consistent design
- Easy maintenance
- Reusable styles
- Responsive layouts

---

## CSS Modules

CSS Modules allow CSS classes to be scoped locally to a component, preventing naming conflicts.

Example:

```jsx
import styles from "./CohortDetails.module.css";

<div className={styles.box}>
```

Advantages:

- No global CSS conflicts
- Better maintainability
- Reusable styles
- Component-level styling

---

## Inline Styles

Inline styles are applied directly to JSX elements using the `style` attribute with a JavaScript object.

Example:

```jsx
<h3
 style={{
   color:"green"
 }}
>
```

Advantages:

- Dynamic styling
- Easy conditional formatting
- No separate CSS file required

---

## className Property

In React, CSS classes are applied using the `className` attribute instead of `class`.

Example:

```jsx
<div className={styles.box}>
```

---

## style Property

The `style` property applies inline CSS using a JavaScript object.

Example:

```jsx
style={{
   color:"green",
   fontSize:"20px"
}}
```

---

## CSS Module vs Regular CSS

| CSS Module | Regular CSS |
|------------|-------------|
| Component scoped | Global scope |
| No naming conflicts | Possible naming conflicts |
| Imported as object | Imported directly |
| Better maintainability | Harder to maintain in large projects |

---

## Advantages of CSS Modules

- Scoped styling
- Reusable classes
- Prevents style conflicts
- Cleaner code
- Better maintainability
- Suitable for large applications

---

## Advantages of Inline Styles

- Dynamic styling
- Conditional formatting
- No external CSS required
- Supports JavaScript expressions

---

## Result

Successfully styled the **Cognizant Cohort Dashboard** using **CSS Modules** and **Inline Styles**. The application demonstrates component-level styling, dynamic styling using JavaScript expressions, and conditional formatting based on cohort status.
