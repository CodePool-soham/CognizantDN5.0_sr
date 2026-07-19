\# Exercise 02 - React Components (Student Management Portal)



\## Objective



This exercise demonstrates how to create and use \*\*React Class Components\*\* in a React application. A Student Management Portal is developed with three separate components: \*\*Home\*\*, \*\*About\*\*, and \*\*Contact\*\*, which are rendered from the main `App` component.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Explain React Components.

\- Differentiate between React Components and JavaScript Functions.

\- Identify the types of React Components.

\- Understand Class Components.

\- Understand Function Components.

\- Define a Component Constructor.

\- Explain the purpose of the `render()` function.

\- Create multiple React Components.

\- Render components inside another component.



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



\## Project Structure



```

StudentApp/

│

├── node\_modules/

├── public/

├── src/

│   ├── Components/

│   │   ├── Home.js

│   │   ├── About.js

│   │   └── Contact.js

│   │

│   ├── App.js

│   ├── App.css

│   ├── index.js

│   └── ...

├── package.json

└── README.md

```



\---



\## Steps Performed



\### Step 1: Create a React Project



Open the terminal in Visual Studio Code and execute:



```bash

npx create-react-app StudentApp

```



\---



\### Step 2: Navigate to the Project



```bash

cd StudentApp

```



\---



\### Step 3: Open the Project in Visual Studio Code



```bash

code .

```



\---



\### Step 4: Create Components Folder



Inside the \*\*src\*\* folder, create a folder named:



```

Components

```



\---



\### Step 5: Create Home Component



Create \*\*Home.js\*\* inside the \*\*Components\*\* folder.



```jsx

import React, { Component } from "react";



class Home extends Component {

&#x20; render() {

&#x20;   return (

&#x20;     <div>

&#x20;       <h2>Welcome to the Home page of Student Management Portal</h2>

&#x20;     </div>

&#x20;   );

&#x20; }

}



export default Home;

```



\---



\### Step 6: Create About Component



Create \*\*About.js\*\* inside the \*\*Components\*\* folder.



```jsx

import React, { Component } from "react";



class About extends Component {

&#x20; render() {

&#x20;   return (

&#x20;     <div>

&#x20;       <h2>Welcome to the About page of the Student Management Portal</h2>

&#x20;     </div>

&#x20;   );

&#x20; }

}



export default About;

```



\---



\### Step 7: Create Contact Component



Create \*\*Contact.js\*\* inside the \*\*Components\*\* folder.



```jsx

import React, { Component } from "react";



class Contact extends Component {

&#x20; render() {

&#x20;   return (

&#x20;     <div>

&#x20;       <h2>Welcome to the Contact page of the Student Management Portal</h2>

&#x20;     </div>

&#x20;   );

&#x20; }

}



export default Contact;

```



\---



\### Step 8: Modify App.js



Replace the existing code with:



```jsx

import './App.css';

import Home from './Components/Home';

import About from './Components/About';

import Contact from './Components/Contact';



function App() {

&#x20; return (

&#x20;   <div className="App">

&#x20;     <Home />

&#x20;     <About />

&#x20;     <Contact />

&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\### Step 9: App.css



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



\### Step 10: Run the Application



```bash

npm start

```



\---



\### Step 11: Open in Browser



Visit:



```

http://localhost:3000

```



\---



\## Expected Output



```

Welcome to the Home page of Student Management Portal



Welcome to the About page of the Student Management Portal



Welcome to the Contact page of the Student Management Portal

```



\---



\# React Concepts



\## What is a React Component?



A React Component is a reusable, independent piece of user interface that returns JSX to display on the screen. Components help organize code into smaller and maintainable units.



\---



\## React Components vs JavaScript Functions



| React Component | JavaScript Function |

|-----------------|---------------------|

| Returns JSX | Returns any JavaScript value |

| Used to build UI | Used for general programming tasks |

| Can maintain state | Does not maintain React state |

| Receives Props | Receives Parameters |

| Can be Class or Function Component | Only Function |



\---



\## Types of React Components



React provides two types of components:



\### 1. Function Component



\- Created using JavaScript functions.

\- Simpler and easier to write.

\- Uses Hooks for state and lifecycle methods.



Example:



```jsx

function Home() {

&#x20; return <h2>Home Component</h2>;

}

```



\---



\### 2. Class Component



\- Created using ES6 classes.

\- Extends `React.Component`.

\- Contains a mandatory `render()` method.

\- Can use constructors and lifecycle methods.



Example:



```jsx

class Home extends React.Component {

&#x20; render() {

&#x20;   return <h2>Home Component</h2>;

&#x20; }

}

```



\---



\## Class Component



A Class Component is a JavaScript class that extends `React.Component` and returns JSX using the `render()` method.



Example:



```jsx

class Home extends Component {

&#x20; render() {

&#x20;   return <h2>Home Component</h2>;

&#x20; }

}

```



\---



\## Function Component



A Function Component is a JavaScript function that returns JSX.



Example:



```jsx

function Home() {

&#x20; return <h2>Home Component</h2>;

}

```



\---



\## Component Constructor



A constructor is a special method used to initialize the state and bind methods in a Class Component.



Example:



```jsx

constructor(props) {

&#x20;   super(props);



&#x20;   this.state = {

&#x20;       name: "Student"

&#x20;   };

}

```



\---



\## render() Function



The `render()` function is a mandatory method in Class Components. It returns the JSX that should be displayed on the browser.



Example:



```jsx

render() {

&#x20;   return (

&#x20;       <h2>Hello React</h2>

&#x20;   );

}

```



\---



\## Advantages of React Components



\- Reusable

\- Easy to Maintain

\- Modular Design

\- Faster Development

\- Better Code Organization

\- Easy Testing

\- Improved Readability



\---



\## Result



Successfully created a React application named \*\*StudentApp\*\*, implemented three \*\*Class Components\*\* (\*\*Home\*\*, \*\*About\*\*, and \*\*Contact\*\*), rendered them using the main `App` component, and displayed the Student Management Portal messages in the browser.

