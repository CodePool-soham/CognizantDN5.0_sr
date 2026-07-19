\# Exercise 11 - React Event Handling



\## Objective



This exercise demonstrates how to handle different events in React. The application implements button click events, multiple event handlers, passing arguments to event handlers, handling Synthetic Events, and converting Indian Rupees to Euro using a Currency Converter component.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Explain React Events.

\- Understand Event Handlers.

\- Define Synthetic Events.

\- Identify React Event Naming Conventions.

\- Implement Event Handling in React applications.

\- Use the `this` keyword in Class Components.

\- Pass arguments to event handlers.

\- Handle form submission events.



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

eventexamplesapp/

│

├── node\_modules/

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

├── package.json

└── README.md

```



\---



\# Steps Performed



\## Step 1: Create the React Project



Open the Visual Studio Code terminal and execute:



```bash

npx create-react-app eventexamplesapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd eventexamplesapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create Counter Component



Create \*\*Counter.js\*\* inside the \*\*src\*\* folder.



```jsx

import React, { Component } from "react";



class Counter extends Component {



&#x20; constructor(props) {

&#x20;   super(props);



&#x20;   this.state = {

&#x20;     count: 0

&#x20;   };



&#x20;   this.increment = this.increment.bind(this);

&#x20;   this.decrement = this.decrement.bind(this);

&#x20; }



&#x20; increment() {

&#x20;   this.setState({

&#x20;     count: this.state.count + 1

&#x20;   });



&#x20;   this.sayHello();

&#x20; }



&#x20; decrement() {

&#x20;   this.setState({

&#x20;     count: this.state.count - 1

&#x20;   });

&#x20; }



&#x20; sayHello() {

&#x20;   alert("Hello! Welcome to React Event Handling");

&#x20; }



&#x20; render() {

&#x20;   return (

&#x20;     <div>



&#x20;       <h2>Counter Example</h2>



&#x20;       <h3>Count: {this.state.count}</h3>



&#x20;       <button onClick={this.increment}>

&#x20;         Increase

&#x20;       </button>



&#x20;       <button onClick={this.decrement}>

&#x20;         Decrement

&#x20;       </button>



&#x20;     </div>

&#x20;   );

&#x20; }

}



export default Counter;

```



\---



\## Step 5: Create Welcome Component



Create \*\*Welcome.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function Welcome() {



&#x20; function sayWelcome(message) {

&#x20;   alert(message);

&#x20; }



&#x20; return (

&#x20;   <div>



&#x20;     <h2>Welcome Example</h2>



&#x20;     <button onClick={() => sayWelcome("Welcome")}>

&#x20;       Say Welcome

&#x20;     </button>



&#x20;   </div>

&#x20; );

}



export default Welcome;

```



\---



\## Step 6: Create SyntheticEvent Component



Create \*\*SyntheticEvent.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function SyntheticEvent() {



&#x20; function handleClick(event) {

&#x20;   alert("I was clicked");

&#x20;   console.log(event);

&#x20; }



&#x20; return (

&#x20;   <div>



&#x20;     <h2>Synthetic Event Example</h2>



&#x20;     <button onClick={handleClick}>

&#x20;       OnPress

&#x20;     </button>



&#x20;   </div>

&#x20; );

}



export default SyntheticEvent;

```



\---



\## Step 7: Create CurrencyConvertor Component



Create \*\*CurrencyConvertor.js\*\* inside the \*\*src\*\* folder.



```jsx

import React, { Component } from "react";



class CurrencyConvertor extends Component {



&#x20; constructor(props) {

&#x20;   super(props);



&#x20;   this.state = {

&#x20;     rupees: "",

&#x20;     euro: ""

&#x20;   };



&#x20;   this.handleSubmit = this.handleSubmit.bind(this);

&#x20; }



&#x20; handleSubmit(event) {

&#x20;   event.preventDefault();



&#x20;   let euroValue = this.state.rupees / 90;



&#x20;   this.setState({

&#x20;     euro: euroValue.toFixed(2)

&#x20;   });

&#x20; }



&#x20; render() {

&#x20;   return (

&#x20;     <div style={{ color: "green" }}>



&#x20;       <h2>Currency Converter</h2>



&#x20;       <form onSubmit={this.handleSubmit}>



&#x20;         <label>

&#x20;           Enter Rupees:

&#x20;         </label>



&#x20;         <input

&#x20;           type="number"

&#x20;           value={this.state.rupees}

&#x20;           onChange={(e) =>

&#x20;             this.setState({

&#x20;               rupees: e.target.value

&#x20;             })

&#x20;           }

&#x20;         />



&#x20;         <br /><br />



&#x20;         <button type="submit">

&#x20;           Convert

&#x20;         </button>



&#x20;       </form>



&#x20;       <h3>

&#x20;         Euro: {this.state.euro}

&#x20;       </h3>



&#x20;     </div>

&#x20;   );

&#x20; }

}



export default CurrencyConvertor;

```



\---



\## Step 8: Modify App.js



```jsx

import './App.css';

import Counter from './Counter';

import Welcome from './Welcome';

import SyntheticEvent from './SyntheticEvent';

import CurrencyConvertor from './CurrencyConvertor';



function App() {

&#x20; return (

&#x20;   <div className="App">



&#x20;     <Counter />



&#x20;     <hr />



&#x20;     <Welcome />



&#x20;     <hr />



&#x20;     <SyntheticEvent />



&#x20;     <hr />



&#x20;     <CurrencyConvertor />



&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## Step 9: App.css



```css

.App {

&#x20; text-align: left;

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



\## Step 10: Run the Application



```bash

npm start

```



\---



\## Step 11: Open in Browser



```

http://localhost:3000

```



\---



\# Expected Output



The application displays four sections:



\### Counter Example



\- Increase button increments the counter.

\- Displays:

&#x20; - \*\*Hello! Welcome to React Event Handling\*\*

\- Decrement button decreases the counter.



\---



\### Welcome Example



Clicking \*\*Say Welcome\*\* displays:



```

Welcome

```



\---



\### Synthetic Event Example



Clicking \*\*OnPress\*\* displays:



```

I was clicked

```



\---



\### Currency Converter



\- Enter amount in Rupees.

\- Click \*\*Convert\*\*.

\- Displays equivalent Euro value.



\---



\# React Concepts



\## What are React Events?



React Events are actions triggered by the user, such as clicking a button, typing into a textbox, submitting a form, or moving the mouse.



Examples include:



\- Click

\- Change

\- Submit

\- MouseOver

\- KeyDown



\---



\## Event Handlers



An Event Handler is a JavaScript function that executes when an event occurs.



Example:



```jsx

<button onClick={handleClick}>

&#x20; Click Me

</button>

```



\---



\## React Event Naming Convention



React event names use \*\*camelCase\*\*.



| HTML | React |

|------|--------|

| onclick | onClick |

| onchange | onChange |

| onsubmit | onSubmit |

| ondblclick | onDoubleClick |

| onmouseover | onMouseOver |



\---



\## Synthetic Event



A Synthetic Event is React's cross-browser wrapper around the native browser event. It provides consistent behavior across all browsers.



Example:



```jsx

function handleClick(event) {

&#x20;   alert("I was clicked");

}

```



\---



\## Multiple Event Handling



One event can invoke multiple methods.



Example:



```jsx

increment() {



&#x20;   this.setState({

&#x20;       count: this.state.count + 1

&#x20;   });



&#x20;   this.sayHello();



}

```



Here:



\- Counter increases.

\- Greeting message is displayed.



\---



\## Passing Arguments to Event Handlers



Arguments can be passed using Arrow Functions.



Example:



```jsx

<button

&#x20;   onClick={() => sayWelcome("Welcome")}

>

```



\---



\## Using `this` Keyword



The `this` keyword refers to the current class component instance.



Example:



```jsx

this.setState({

&#x20;   count: this.state.count + 1

});

```



\---



\## Form Event Handling



The `onSubmit` event handles form submission.



Example:



```jsx

<form onSubmit={this.handleSubmit}>

```



`event.preventDefault()` prevents the browser from refreshing the page after form submission.



\---



\## Advantages of React Event Handling



\- Easy to implement

\- Cross-browser compatibility

\- Supports Synthetic Events

\- Better code organization

\- Improved user interaction

\- Supports passing arguments

\- Event delegation improves performance



\---



\## Result



Successfully created a React application named \*\*eventexamplesapp\*\*, implemented React Event Handling concepts including button click events, multiple event handlers, passing arguments, Synthetic Events, use of the `this` keyword, and a Currency Converter component that converts Indian Rupees to Euro using form submission events.

