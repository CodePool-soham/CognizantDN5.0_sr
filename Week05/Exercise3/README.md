\# Exercise 03 - React Function Component (Score Calculator App)



\## Objective



This exercise demonstrates how to create and use a \*\*React Function Component\*\*. A Student Score Calculator application is developed that accepts student details as \*\*props\*\*, calculates the student's score percentage, and displays the result with basic CSS styling.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Explain React Components.

\- Differentiate between React Components and JavaScript Functions.

\- Identify the types of React Components.

\- Explain Class Components.

\- Explain Function Components.

\- Define a Component Constructor.

\- Explain the purpose of the `render()` function.

\- Create a Function Component.

\- Pass data using Props.

\- Apply CSS styling to React components.

\- Render a Function Component.



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

scorecalculatorapp/

│

├── node\_modules/

├── public/

├── src/

│   ├── Components/

│   │   └── CalculateScore.js

│   │

│   ├── Stylesheets/

│   │   └── mystyle.css

│   │

│   ├── App.js

│   ├── App.css

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

npx create-react-app scorecalculatorapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd scorecalculatorapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create Components Folder



Inside the \*\*src\*\* folder create a folder named:



```

Components

```



Create the file:



```

CalculateScore.js

```



\---



\## Step 5: Create Stylesheets Folder



Inside \*\*src\*\* create another folder:



```

Stylesheets

```



Create the file:



```

mystyle.css

```



\---



\## Step 6: Create CalculateScore Component



Replace the contents of \*\*CalculateScore.js\*\* with:



```jsx

import '../Stylesheets/mystyle.css'



const percentToDecimal = (decimal) => {

&#x20;   return (decimal.toFixed(2) + '%')

}



const calcScore = (total, goal) => {

&#x20;   return percentToDecimal(total / goal)

}



export const CalculateScore = ({ Name, School, total, goal }) => (

&#x20;   <div className="formatstyle">



&#x20;       <h1>

&#x20;           <font color="Brown">Student Details:</font>

&#x20;       </h1>



&#x20;       <div className="Name">

&#x20;           <b><span>Name:</span></b>

&#x20;           <span>{Name}</span>

&#x20;       </div>



&#x20;       <div className="School">

&#x20;           <b><span>Total:</span></b>

&#x20;           <span>{total}</span>

&#x20;           <span> Marks</span>

&#x20;       </div>



&#x20;       <div className="Score">

&#x20;           <b>Score:</b>

&#x20;           <span>

&#x20;               {calcScore(total, goal)}

&#x20;           </span>

&#x20;       </div>



&#x20;   </div>

)

```



\---



\## Step 7: Create mystyle.css



```css

h2 {

&#x20; color: blue;

}



p {

&#x20; font-size: 18px;

&#x20; font-family: Arial;

}



div {

&#x20; text-align: center;

}

```



\---



\## Step 8: Modify App.js



Replace the existing code with:



```jsx

import { CalculateScore } from "../src/Components/CalculateScore";



function App() {

&#x20; return (

&#x20;   <div>

&#x20;     <CalculateScore

&#x20;       Name={"Steeve"}

&#x20;       School={"DNV Public School"}

&#x20;       total={284}

&#x20;       goal={300}

&#x20;     />

&#x20;   </div>

&#x20; );

}



export default App;

```



> \*\*Note:\*\* The `goal` value should represent the maximum marks. Using `goal={300}` produces a realistic percentage (`94.67%`). If you use `goal={3}`, the calculated score will be `9466.67%`.



\---



\## Step 9: Run the Application



```bash

npm start

```



\---



\## Step 10: Open in Browser



Open your browser and visit:



```

http://localhost:3000

```



\---



\# Expected Output



```

Student Details



Name : Steeve



Total : 284 Marks



Score : 94.67%

```



\---



\# React Concepts



\## What is a React Component?



A React Component is an independent, reusable block of code that returns JSX to build the user interface.



\---



\## React Components vs JavaScript Functions



| React Component | JavaScript Function |

|-----------------|---------------------|

| Returns JSX | Returns any JavaScript value |

| Used for UI | Used for general programming |

| Can receive Props | Can receive Parameters |

| Can manage State | Cannot manage React State |

| Reusable UI element | General-purpose function |



\---



\## Types of React Components



React provides two types of components:



\### Function Component



\- Created using JavaScript functions.

\- Simpler and shorter.

\- Uses Hooks for state management.

\- Best choice for modern React applications.



Example:



```jsx

function Welcome() {

&#x20;   return <h1>Hello React</h1>;

}

```



\---



\### Class Component



\- Created using ES6 classes.

\- Extends `React.Component`.

\- Uses the `render()` method.

\- Supports lifecycle methods.



Example:



```jsx

class Welcome extends React.Component {

&#x20;   render() {

&#x20;       return <h1>Hello React</h1>;

&#x20;   }

}

```



\---



\## Function Component



A Function Component is a JavaScript function that accepts \*\*Props\*\* as input and returns JSX.



Example:



```jsx

function Student() {

&#x20;   return <h2>Student Details</h2>;

}

```



\---



\## Class Component



A Class Component is a JavaScript class that extends `React.Component` and renders JSX using the `render()` method.



\---



\## Component Constructor



A constructor is a special method available only in Class Components. It initializes the component's state and binds event methods.



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



The `render()` function is mandatory in Class Components. It returns the JSX that React displays in the browser.



Example:



```jsx

render() {

&#x20;   return (

&#x20;       <h2>Hello React</h2>

&#x20;   );

}

```



\---



\## What are Props?



Props (Properties) are read-only inputs passed from a parent component to a child component.



Example:



```jsx

<Student

&#x20;   Name="John"

&#x20;   total={280}

&#x20;   goal={300}

/>

```



\---



\## Advantages of Function Components



\- Simple syntax

\- Easy to understand

\- Better performance

\- Supports React Hooks

\- Less code than Class Components

\- Easy to reuse



\---



\## Result



Successfully created a React application named \*\*scorecalculatorapp\*\*, implemented a \*\*Function Component\*\* (`CalculateScore`), passed student information using \*\*Props\*\*, calculated the student's percentage score, applied CSS styling, and rendered the component successfully in the browser.

