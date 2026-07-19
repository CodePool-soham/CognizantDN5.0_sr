\# Exercise 10 - JSX and Conditional Rendering (Office Space Rental Application)



\## Objective



This exercise demonstrates the use of \*\*JSX\*\* in React to create an Office Space Rental Application. The application displays office space details using JSX expressions, attributes, inline styling, and conditional rendering based on office rent.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Understand JSX syntax.

\- Use JavaScript expressions inside JSX.

\- Apply attributes in JSX.

\- Apply inline CSS styling.

\- Render lists using the `map()` function.

\- Perform conditional rendering using ternary operators.

\- Display dynamic data using React components.



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

officespaceapp/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── OfficeSpace.js

│   ├── index.js

│   └── ...

├── package.json

└── README.md

```



\---



\# Steps Performed



\## Step 1: Create the React Project



Open the Visual Studio Code terminal and execute:



```bash

npx create-react-app officespaceapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd officespaceapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create OfficeSpace Component



Create \*\*OfficeSpace.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function OfficeSpace() {



&#x20; const offices = \[

&#x20;   {

&#x20;     name: "DBS",

&#x20;     rent: 50000,

&#x20;     address: "Chennai"

&#x20;   },

&#x20;   {

&#x20;     name: "Tech Park",

&#x20;     rent: 75000,

&#x20;     address: "Bangalore"

&#x20;   },

&#x20;   {

&#x20;     name: "Cyber Towers",

&#x20;     rent: 60000,

&#x20;     address: "Hyderabad"

&#x20;   }

&#x20; ];



&#x20; return (

&#x20;   <div>



&#x20;     {/\* JSX Heading \*/}

&#x20;     <h1 style={{ color: "blue" }}>

&#x20;       Office Space Rental Application

&#x20;     </h1>



&#x20;     {/\* JSX Image \*/}

&#x20;     <img

&#x20;       src="https://acegroupindia.com/blog/wp-content/uploads/2025/04/Office-Space-in-Noida-for-Rent-1.jpg"

&#x20;       alt="Office Space"

&#x20;       width="300"

&#x20;     />



&#x20;     {

&#x20;       offices.map((office, index) => (



&#x20;         <div key={index}>



&#x20;           <h2>{office.name}</h2>



&#x20;           <p>

&#x20;             Address: {office.address}

&#x20;           </p>



&#x20;           <p>

&#x20;             Rent:

&#x20;             <span

&#x20;               style={{

&#x20;                 color: office.rent < 60000 ? "red" : "green"

&#x20;               }}

&#x20;             >

&#x20;               {" ₹" + office.rent}

&#x20;             </span>

&#x20;           </p>



&#x20;         </div>



&#x20;       ))

&#x20;     }



&#x20;   </div>

&#x20; );

}



export default OfficeSpace;

```



\---



\## Step 5: Modify App.js



Replace the existing code with:



```jsx

import './App.css';

import OfficeSpace from './OfficeSpace';



function App() {

&#x20; return (

&#x20;   <div className="App">

&#x20;     <OfficeSpace />

&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## Step 6: App.css



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



\## Step 7: Run the Application



```bash

npm start

```



\---



\## Step 8: Open in Browser



Visit:



```

http://localhost:3000

```



\---



\# Expected Output



The application displays:



\- \*\*Office Space Rental Application\*\* heading in blue.

\- An office space image.

\- A list of office spaces showing:

&#x20; - Office Name

&#x20; - Address

&#x20; - Rent

\- Rent displayed:

&#x20; - \*\*Red\*\* if rent is \*\*less than ₹60,000\*\*

&#x20; - \*\*Green\*\* if rent is \*\*₹60,000 or more\*\*



\---



\# React Concepts



\## What is JSX?



JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript.



Example:



```jsx

<h1>Welcome to React</h1>

```



\---



\## Features of JSX



\- HTML-like syntax

\- Easy to read and write

\- Supports JavaScript expressions

\- Faster development

\- Improved readability



\---



\## JavaScript Expressions in JSX



Expressions can be written inside curly braces `{}`.



Example:



```jsx

<h2>{office.name}</h2>

```



\---



\## JSX Attributes



Attributes in JSX are written similarly to HTML but use \*\*camelCase\*\* naming conventions.



Example:



```jsx

<img

&#x20; src="image.jpg"

&#x20; alt="Office"

&#x20; width="300"

/>

```



\---



\## Inline Styling



Inline styles are written as JavaScript objects.



Example:



```jsx

<h1 style={{ color: "blue" }}>

&#x20; Office Space Rental Application

</h1>

```



\---



\## Rendering Lists using map()



The `map()` method is used to render multiple elements dynamically.



Example:



```jsx

offices.map((office) => (

&#x20; <h2>{office.name}</h2>

))

```



\---



\## Conditional Rendering



Conditional rendering displays different content based on a condition.



Example:



```jsx

<span

&#x20; style={{

&#x20;   color: office.rent < 60000 ? "red" : "green"

&#x20; }}

>

&#x20; ₹{office.rent}

</span>

```



Here:



\- Rent \*\*less than ₹60,000\*\* → \*\*Red\*\*

\- Rent \*\*₹60,000 or above\*\* → \*\*Green\*\*



\---



\## Advantages of JSX



\- Easy to understand

\- Supports JavaScript logic

\- Improved code readability

\- Faster UI development

\- Better debugging

\- Dynamic rendering



\---



\## Result



Successfully created a React application named \*\*officespaceapp\*\*, implemented \*\*JSX\*\*, displayed office space details using JavaScript expressions, rendered multiple office records using the `map()` method, applied inline styling, and performed conditional rendering to display office rent in different colors based on its value.

