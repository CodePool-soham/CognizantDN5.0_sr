\# Exercise 05 - Styling React Components using CSS Modules



\## Objective



This exercise demonstrates how to style React components using \*\*CSS Modules\*\* and \*\*Inline Styles\*\*. A Cognizant Cohort Dashboard is created that displays the details of different training cohorts with customized styling.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Understand the need for styling React components.

\- Work with CSS Modules.

\- Apply Inline Styles in React.

\- Apply styles using the `className` property.

\- Apply styles using the `style` property.

\- Create reusable CSS Modules.



\---



\## Prerequisites



Before starting this exercise, ensure you have the following installed:



\- Node.js

\- NPM

\- Visual Studio Code



\---



\## Software Requirements



\- Node.js (Latest LTS Version)

\- NPM

\- Visual Studio Code

\- Google Chrome or any modern web browser



\---



\# Project Structure



```

CohortDashboard/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── CohortDetails.js

│   ├── CohortDetails.module.css

│   ├── index.js

│   └── ...

├── package.json

└── README.md

```



\---



\# Steps Performed



\## Step 1: Download the React Application



Download or unzip the provided React application.



\---



\## Step 2: Restore Node Packages



Open the terminal inside the project folder and execute:



```bash

npm install

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create CSS Module



Inside the \*\*src\*\* folder create:



```

CohortDetails.module.css

```



\---



\## Step 5: Add CSS Styles



Replace the contents of \*\*CohortDetails.module.css\*\* with:



```css

.box {

&#x20; width: 300px;

&#x20; display: inline-block;

&#x20; margin: 10px;

&#x20; padding: 10px 20px;

&#x20; border: 1px solid black;

&#x20; border-radius: 10px;

}



dt {

&#x20; font-weight: 500;

}

```



\---



\## Step 6: Create CohortDetails Component



Replace the contents of \*\*CohortDetails.js\*\* with:



```jsx

import React from "react";

import styles from "./CohortDetails.module.css";



function CohortDetails() {



&#x20; const cohorts = \[

&#x20;   {

&#x20;     name: "ADMDF10 - .NET FSD",

&#x20;     startDate: "22-Feb-2022",

&#x20;     status: "Scheduled",

&#x20;     coach: "Aathma",

&#x20;     trainer: "Jojo Jose"

&#x20;   },

&#x20;   {

&#x20;     name: "ADM21JF014 - JAVA FSD",

&#x20;     startDate: "10-Sep-2021",

&#x20;     status: "Ongoing",

&#x20;     coach: "Apoorv",

&#x20;     trainer: "Elisa Smith"

&#x20;   },

&#x20;   {

&#x20;     name: "CDBJF21025 - JAVA FSD",

&#x20;     startDate: "24-Dec-2021",

&#x20;     status: "Ongoing",

&#x20;     coach: "Aathma",

&#x20;     trainer: "John Doe"

&#x20;   }

&#x20; ];



&#x20; return (

&#x20;   <div>



&#x20;     {cohorts.map((cohort, index) => (



&#x20;       <div className={styles.box} key={index}>



&#x20;         <h3

&#x20;           style={{

&#x20;             color:

&#x20;               cohort.status === "Ongoing"

&#x20;                 ? "green"

&#x20;                 : "blue"

&#x20;           }}

&#x20;         >

&#x20;           {cohort.name}

&#x20;         </h3>



&#x20;         <dl>



&#x20;           <dt>Start Date</dt>

&#x20;           <dd>{cohort.startDate}</dd>



&#x20;           <dt>Status</dt>

&#x20;           <dd>{cohort.status}</dd>



&#x20;           <dt>Coach</dt>

&#x20;           <dd>{cohort.coach}</dd>



&#x20;           <dt>Trainer</dt>

&#x20;           <dd>{cohort.trainer}</dd>



&#x20;         </dl>



&#x20;       </div>



&#x20;     ))}



&#x20;   </div>

&#x20; );

}



export default CohortDetails;

```



\---



\## Step 7: Modify App.js



Replace the existing code with:



```jsx

import './App.css';

import CohortDetails from './CohortDetails';



function App() {

&#x20; return (

&#x20;   <div className="App">



&#x20;     <h1>Cognizant Cohort Dashboard</h1>



&#x20;     <CohortDetails />



&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## Step 8: App.css



```css

.App {

&#x20; text-align: center;

}



.App-logo {

&#x20; height: 40vmin;

&#x20; pointer-events: none;

}



@media (prefers-reduced-motion: no-preference) {

&#x20; .App-logo {

&#x20;   animation: App-logo-spin infinite 20s linear;

&#x20; }

}



.App-header {

&#x20; background-color: #282c34;

&#x20; min-height: 100vh;

&#x20; display: flex;

&#x20; flex-direction: column;

&#x20; align-items: center;

&#x20; justify-content: center;

&#x20; font-size: calc(10px + 2vmin);

&#x20; color: white;

}



.App-link {

&#x20; color: #61dafb;

}



@keyframes App-logo-spin {



&#x20; from {

&#x20;   transform: rotate(0deg);

&#x20; }



&#x20; to {

&#x20;   transform: rotate(360deg);

&#x20; }



}

```



\---



\## Step 9: Run the Application



```bash

npm start

```



\---



\## Step 10: Open in Browser



Visit:



```

http://localhost:3000

```



\---



\# Expected Output



The application displays a \*\*Cognizant Cohort Dashboard\*\* with three cohort cards.



Each card displays:



\- Cohort Name

\- Start Date

\- Status

\- Coach

\- Trainer



Styling:



\- Box width: \*\*300px\*\*

\- Black border with rounded corners

\- Margin and padding applied

\- \*\*Green\*\* heading for \*\*Ongoing\*\* cohorts

\- \*\*Blue\*\* heading for all other cohorts



\---



\# React Concepts



\## Why Styling is Needed in React?



Styling improves the appearance, readability, usability, and user experience of a React application.



Benefits include:



\- Better UI

\- Consistent design

\- Easy maintenance

\- Reusable styles

\- Responsive layouts



\---



\## CSS Modules



CSS Modules allow CSS classes to be scoped locally to a component, preventing naming conflicts.



Example:



```jsx

import styles from "./CohortDetails.module.css";



<div className={styles.box}>

```



Advantages:



\- No global CSS conflicts

\- Better maintainability

\- Reusable styles

\- Component-level styling



\---



\## Inline Styles



Inline styles are applied directly to JSX elements using the `style` attribute with a JavaScript object.



Example:



```jsx

<h3

&#x20; style={{

&#x20;   color: "green"

&#x20; }}

>

```



Advantages:



\- Dynamic styling

\- Easy conditional formatting

\- No separate CSS file required



\---



\## className Property



In React, CSS classes are applied using the `className` attribute instead of `class`.



Example:



```jsx

<div className={styles.box}>

```



\---



\## style Property



The `style` property is used to apply inline CSS as a JavaScript object.



Example:



```jsx

style={{

&#x20;   color: "green",

&#x20;   fontSize: "20px"

}}

```



\---



\## CSS Module vs Regular CSS



| CSS Module | Regular CSS |

|------------|-------------|

| Component scoped | Global scope |

| No naming conflicts | Possible naming conflicts |

| Imported as object | Imported directly |

| Better maintainability | Harder to maintain in large projects |



\---



\## Advantages of CSS Modules



\- Scoped styling

\- Reusable classes

\- Prevents style conflicts

\- Cleaner code

\- Better maintainability

\- Suitable for large applications



\---



\## Advantages of Inline Styles



\- Dynamic styling

\- Conditional formatting

\- No external CSS required

\- JavaScript expressions supported



\---



\## Result



Successfully styled the \*\*Cognizant Cohort Dashboard\*\* using \*\*CSS Modules\*\* and \*\*Inline Styles\*\*, applied styles through the `className` and `style` properties, and displayed the cohort information with appropriate formatting and conditional color styling.

