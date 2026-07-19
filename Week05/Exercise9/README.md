\# Exercise 09 - ES6 Features in React (Cricket App)



\## Objective



This exercise demonstrates the use of \*\*ES6 Features\*\* in React by creating a Cricket application. The application uses \*\*map()\*\*, \*\*filter()\*\*, \*\*arrow functions\*\*, \*\*destructuring\*\*, and the \*\*spread operator\*\* to display cricket player information.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- List the features of ES6.

\- Explain JavaScript `let`.

\- Differentiate between `var` and `let`.

\- Explain JavaScript `const`.

\- Understand ES6 Class fundamentals.

\- Explain ES6 Class inheritance.

\- Understand Arrow Functions.

\- Explain `Set` and `Map`.

\- Use the `map()` method.

\- Use Arrow Functions.

\- Apply ES6 Destructuring.

\- Merge arrays using the Spread Operator.



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

cricketapp/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── ListofPlayers.js

│   ├── IndianPlayers.js

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

npx create-react-app cricketapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd cricketapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create ListofPlayers Component



Create \*\*ListofPlayers.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function ListofPlayers() {



&#x20; const players = \[

&#x20;   { name: "Virat Kohli", score: 85 },

&#x20;   { name: "Rohit Sharma", score: 75 },

&#x20;   { name: "MS Dhoni", score: 65 },

&#x20;   { name: "Sachin Tendulkar", score: 95 },

&#x20;   { name: "Yuvraj Singh", score: 60 },

&#x20;   { name: "Hardik Pandya", score: 70 },

&#x20;   { name: "Ravindra Jadeja", score: 55 },

&#x20;   { name: "KL Rahul", score: 80 },

&#x20;   { name: "Shubman Gill", score: 78 },

&#x20;   { name: "Jasprit Bumrah", score: 90 },

&#x20;   { name: "Rishabh Pant", score: 68 }

&#x20; ];



&#x20; // ES6 map()

&#x20; const playerList = players.map(player => (

&#x20;   <li key={player.name}>

&#x20;     {player.name} - {player.score}

&#x20;   </li>

&#x20; ));



&#x20; // Arrow Function + filter()

&#x20; const filteredPlayers =

&#x20;   players.filter(player => player.score < 70);



&#x20; return (

&#x20;   <div>



&#x20;     <h2>List of Players</h2>



&#x20;     <h3>All Players</h3>



&#x20;     <ul>

&#x20;       {playerList}

&#x20;     </ul>



&#x20;     <h3>Players with score below 70</h3>



&#x20;     <ul>



&#x20;       {

&#x20;         filteredPlayers.map(player => (

&#x20;           <li key={player.name}>

&#x20;             {player.name} - {player.score}

&#x20;           </li>

&#x20;         ))

&#x20;       }



&#x20;     </ul>



&#x20;   </div>

&#x20; );

}



export default ListofPlayers;

```



\---



\## Step 5: Create IndianPlayers Component



Create \*\*IndianPlayers.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function IndianPlayers() {



&#x20; // ES6 Destructuring



&#x20; const players = \[

&#x20;   "Rohit Sharma",

&#x20;   "Virat Kohli",

&#x20;   "KL Rahul",

&#x20;   "Hardik Pandya",

&#x20;   "Ravindra Jadeja",

&#x20;   "Jasprit Bumrah"

&#x20; ];



&#x20; const \[

&#x20;   player1,

&#x20;   player2,

&#x20;   player3,

&#x20;   player4,

&#x20;   player5,

&#x20;   player6

&#x20; ] = players;





&#x20; // Spread Operator



&#x20; const T20players = \[

&#x20;   "Rohit Sharma",

&#x20;   "Virat Kohli",

&#x20;   "Hardik Pandya"

&#x20; ];



&#x20; const RanjiTrophyPlayers = \[

&#x20;   "Ajinkya Rahane",

&#x20;   "Cheteshwar Pujara",

&#x20;   "Mayank Agarwal"

&#x20; ];



&#x20; const allPlayers = \[

&#x20;   ...T20players,

&#x20;   ...RanjiTrophyPlayers

&#x20; ];





&#x20; return (



&#x20;   <div>



&#x20;     <h1>Indian Players</h1>



&#x20;     <h2>Odd Team Players</h2>



&#x20;     <ul>

&#x20;       <li>{player1}</li>

&#x20;       <li>{player3}</li>

&#x20;       <li>{player5}</li>

&#x20;     </ul>



&#x20;     <h2>Even Team Players</h2>



&#x20;     <ul>

&#x20;       <li>{player2}</li>

&#x20;       <li>{player4}</li>

&#x20;       <li>{player6}</li>

&#x20;     </ul>



&#x20;     <h2>T20 Players</h2>



&#x20;     <ul>



&#x20;       {

&#x20;         T20players.map(player => (

&#x20;           <li key={player}>{player}</li>

&#x20;         ))

&#x20;       }



&#x20;     </ul>



&#x20;     <h2>Ranji Trophy Players</h2>



&#x20;     <ul>



&#x20;       {

&#x20;         RanjiTrophyPlayers.map(player => (

&#x20;           <li key={player}>{player}</li>

&#x20;         ))

&#x20;       }



&#x20;     </ul>



&#x20;     <h2>Merged Players (T20 + Ranji Trophy)</h2>



&#x20;     <ul>



&#x20;       {

&#x20;         allPlayers.map(player => (

&#x20;           <li key={player}>{player}</li>

&#x20;         ))

&#x20;       }



&#x20;     </ul>



&#x20;   </div>



&#x20; );

}



export default IndianPlayers;

```



\---



\## Step 6: Modify App.js



```jsx

import './App.css';

import ListofPlayers from './ListofPlayers';

import IndianPlayers from './IndianPlayers';



function App() {



&#x20; let flag = false;

&#x20; // let flag = true;



&#x20; return (



&#x20;   <div className="App">



&#x20;     {

&#x20;       flag

&#x20;         ? <ListofPlayers />

&#x20;         : <IndianPlayers />

&#x20;     }



&#x20;   </div>



&#x20; );

}



export default App;

```



\---



\## Step 7: App.css



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



\## Step 8: Run the Application



```bash

npm start

```



\---



\## Step 9: Open in Browser



```

http://localhost:3000

```



\---



\# Expected Output



\### When `flag = true`



\- Displays \*\*List of Players\*\*

\- Displays all 11 players using \*\*map()\*\*

\- Displays players with score below \*\*70\*\* using \*\*filter()\*\*



\---



\### When `flag = false`



\- Displays \*\*Odd Team Players\*\*

\- Displays \*\*Even Team Players\*\*

\- Displays \*\*T20 Players\*\*

\- Displays \*\*Ranji Trophy Players\*\*

\- Displays \*\*Merged Players\*\*



\---



\# ES6 Concepts



\## What is ES6?



ES6 (ECMAScript 2015) is the sixth version of JavaScript that introduced many modern programming features making JavaScript simpler and more powerful.



\---



\## Features of ES6



\- let

\- const

\- Arrow Functions

\- Classes

\- Class Inheritance

\- Template Literals

\- Destructuring

\- Spread Operator

\- Rest Parameters

\- Modules

\- Promises

\- Set

\- Map



\---



\## JavaScript let



`let` declares block-scoped variables.



Example:



```javascript

let age = 25;

```



Advantages:



\- Block scope

\- Can be reassigned

\- Prevents redeclaration in the same scope



\---



\## Difference between var and let



| var | let |

|------|------|

| Function scoped | Block scoped |

| Can be redeclared | Cannot be redeclared |

| Hoisted | Hoisted but not initialized |

| Older syntax | Introduced in ES6 |



\---



\## JavaScript const



`const` declares block-scoped constants whose value cannot be reassigned.



Example:



```javascript

const country = "India";

```



\---



\## ES6 Classes



Classes provide a blueprint for creating objects.



Example:



```javascript

class Student {



&#x20;   constructor(name) {

&#x20;       this.name = name;

&#x20;   }



}

```



\---



\## ES6 Class Inheritance



Inheritance allows one class to inherit the properties and methods of another class using the `extends` keyword.



Example:



```javascript

class Player extends Student {



}

```



\---



\## Arrow Functions



Arrow Functions provide a shorter syntax for writing functions.



Example:



```javascript

const square = n => n \* n;

```



Advantages:



\- Short syntax

\- No separate `this`

\- Easy to read



\---



\## map()



`map()` creates a new array by applying a function to every element.



Example:



```javascript

players.map(player => player.name);

```



\---



\## filter()



`filter()` returns only those elements that satisfy a given condition.



Example:



```javascript

players.filter(player => player.score < 70);

```



\---



\## Destructuring



Destructuring extracts values from arrays or objects into variables.



Example:



```javascript

const \[a, b] = players;

```



\---



\## Spread Operator



The Spread Operator (`...`) merges arrays or objects.



Example:



```javascript

const allPlayers = \[

&#x20;   ...T20players,

&#x20;   ...RanjiPlayers

];

```



\---



\## Set



A `Set` stores only unique values.



Example:



```javascript

const numbers = new Set(\[1,2,3]);

```



\---



\## Map



A `Map` stores key-value pairs.



Example:



```javascript

const student = new Map();



student.set("Name", "Virat");

```



\---



\## Advantages of ES6



\- Cleaner syntax

\- Better readability

\- Less code

\- Easier maintenance

\- Improved performance

\- Better support for object-oriented programming

\- Modern JavaScript features



\---



\## Result



Successfully created a React application named \*\*cricketapp\*\*, implemented ES6 features such as \*\*map()\*\*, \*\*filter()\*\*, \*\*Arrow Functions\*\*, \*\*Destructuring\*\*, and the \*\*Spread Operator\*\*, and displayed the cricket player information dynamically using React components.

