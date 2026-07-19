# Exercise 09 - ES6 Features in React (Cricket App)

## Objective

This exercise demonstrates the use of **ES6 Features** in React by creating a Cricket application. The application uses **map()**, **filter()**, **arrow functions**, **destructuring**, and the **spread operator** to display cricket player information.

---

# Learning Objectives

After completing this exercise, you will be able to:

- List the features of ES6.
- Explain JavaScript `let`.
- Differentiate between `var` and `let`.
- Explain JavaScript `const`.
- Understand ES6 Class fundamentals.
- Explain ES6 Class inheritance.
- Understand Arrow Functions.
- Explain `Set` and `Map`.
- Use the `map()` method.
- Use Arrow Functions.
- Apply ES6 Destructuring.
- Merge arrays using the Spread Operator.

---

# Prerequisites

Before starting this exercise, ensure you have:

- Node.js
- NPM
- Visual Studio Code

---

# Software Requirements

- Node.js (Latest LTS Version)
- NPM
- Visual Studio Code
- Google Chrome or any modern web browser

---

# Project Structure

```
cricketapp/

│
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── ListofPlayers.js
│   ├── IndianPlayers.js
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

---

# Steps Performed

## Step 1: Create React Project

Create a new React application:

```bash
npx create-react-app cricketapp
```

---

## Step 2: Navigate to Project

```bash
cd cricketapp
```

---

## Step 3: Open Project in VS Code

```bash
code .
```

---

# Step 4: Create ListofPlayers Component

Create:

```
src/ListofPlayers.js
```

This component demonstrates:

- ES6 map()
- Arrow Functions
- filter()

Example:

```jsx
const playerList = players.map(player => (
    <li key={player.name}>
        {player.name} - {player.score}
    </li>
));


const filteredPlayers =
    players.filter(player => player.score < 70);
```

---

# Step 5: Create IndianPlayers Component

Create:

```
src/IndianPlayers.js
```

This component demonstrates:

- Array Destructuring
- Spread Operator
- map()

Example:

```javascript
const [
 player1,
 player2,
 player3
] = players;
```

Merging arrays:

```javascript
const allPlayers = [
    ...T20players,
    ...RanjiTrophyPlayers
];
```

---

# Step 6: Modify App.js

```jsx
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';


function App() {

 let flag = false;

 return (

   <div className="App">

   {
      flag
      ? <ListofPlayers />
      : <IndianPlayers />
   }

   </div>

 );

}

export default App;
```

---

# Step 7: Run Application

Execute:

```bash
npm start
```

---

# Step 8: Open Browser

Visit:

```
http://localhost:3000
```

---

# Expected Output

## When flag = true

Displays:

- List of Players
- All players using `map()`
- Players having score below 70 using `filter()`

Example:

```
List of Players

Virat Kohli - 85
Rohit Sharma - 75
MS Dhoni - 65

Players with score below 70

MS Dhoni - 65
Yuvraj Singh - 60
```

---

## When flag = false

Displays:

- Odd Team Players
- Even Team Players
- T20 Players
- Ranji Trophy Players
- Merged Players

---

# ES6 Concepts

## What is ES6?

ES6 (ECMAScript 2015) is the sixth version of JavaScript that introduced modern programming features to make JavaScript simpler, cleaner, and more powerful.

---

# Features of ES6

- let
- const
- Arrow Functions
- Classes
- Class Inheritance
- Template Literals
- Destructuring
- Spread Operator
- Rest Parameters
- Modules
- Promises
- Set
- Map

---

# JavaScript let

`let` is used to declare block-scoped variables.

Example:

```javascript
let age = 25;
```

Advantages:

- Block scoped
- Can be reassigned
- Prevents redeclaration

---

# Difference Between var and let

| var | let |
|-----|-----|
| Function scoped | Block scoped |
| Can be redeclared | Cannot be redeclared |
| Older JavaScript syntax | Introduced in ES6 |

---

# JavaScript const

`const` declares constants whose values cannot be reassigned.

Example:

```javascript
const country = "India";
```

---

# ES6 Classes

Classes provide a blueprint for creating objects.

Example:

```javascript
class Student {

 constructor(name){
    this.name = name;
 }

}
```

---

# ES6 Class Inheritance

Inheritance allows one class to acquire properties and methods of another class.

Example:

```javascript
class Player extends Student {

}
```

---

# Arrow Functions

Arrow functions provide shorter syntax for writing functions.

Example:

```javascript
const square = n => n*n;
```

Advantages:

- Short syntax
- Easy readability
- Does not create its own `this`

---

# map()

`map()` creates a new array by applying a function to every element.

Example:

```javascript
players.map(player => player.name);
```

---

# filter()

`filter()` returns elements that satisfy a condition.

Example:

```javascript
players.filter(player => player.score < 70);
```

---

# Destructuring

Destructuring extracts values from arrays or objects.

Example:

```javascript
const [a,b] = players;
```

---

# Spread Operator

The spread operator (`...`) is used to merge arrays or objects.

Example:

```javascript
const allPlayers = [
 ...T20players,
 ...RanjiPlayers
];
```

---

# Set

A Set stores unique values.

Example:

```javascript
const numbers = new Set([1,2,3]);
```

---

# Map

A Map stores key-value pairs.

Example:

```javascript
const student = new Map();

student.set("Name","Virat");
```

---

# Advantages of ES6

- Cleaner syntax
- Better readability
- Less code
- Easier maintenance
- Improved performance
- Supports object-oriented programming
- Modern JavaScript development

---

# Result

Successfully created a React application named **cricketapp**.

Implemented ES6 features:

- map()
- filter()
- Arrow Functions
- Destructuring
- Spread Operator

Displayed cricket player information dynamically using React components.
