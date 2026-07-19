\# Exercise 12 - Conditional Rendering in React (Ticket Booking Application)



\## Objective



This exercise demonstrates \*\*Conditional Rendering\*\* in React by developing a \*\*Ticket Booking Application\*\*. Guest users can only view flight details, while logged-in users can book tickets. The application switches between Login and Logout states using React state.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Explain Conditional Rendering in React.

\- Understand Element Variables.

\- Prevent components from rendering.

\- Implement Login and Logout functionality.

\- Render components based on conditions.

\- Manage UI using React Hooks (`useState`).



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

ticketbookingapp/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── Greeting.js

│   ├── Guest.js

│   ├── GuestGreeting.js

│   ├── User.js

│   ├── UserGreeting.js

│   ├── LoginButton.js

│   ├── LogoutButton.js

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

npx create-react-app ticketbookingapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd ticketbookingapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create App.js



Replace the contents of \*\*App.js\*\* with:



```jsx

import './App.css';

import React, { useState } from "react";



import Greeting from "./Greeting";

import LoginButton from "./LoginButton";

import LogoutButton from "./LogoutButton";



function App() {



&#x20; const \[isLoggedIn, setIsLoggedIn] = useState(false);



&#x20; function handleLogin() {

&#x20;   setIsLoggedIn(true);

&#x20; }



&#x20; function handleLogout() {

&#x20;   setIsLoggedIn(false);

&#x20; }



&#x20; return (

&#x20;   <div className="App">



&#x20;     <h1>Ticket Booking Application</h1>



&#x20;     <Greeting isLoggedIn={isLoggedIn} />



&#x20;     {

&#x20;       isLoggedIn

&#x20;         ? <LogoutButton onClick={handleLogout} />

&#x20;         : <LoginButton onClick={handleLogin} />

&#x20;     }



&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## Step 5: Create Greeting.js



```jsx

import React from "react";

import UserGreeting from "./UserGreeting";

import GuestGreeting from "./GuestGreeting";



function Greeting(props) {



&#x20; const isLoggedIn = props.isLoggedIn;



&#x20; if (isLoggedIn) {

&#x20;   return <UserGreeting />;

&#x20; }



&#x20; return <GuestGreeting />;

}



export default Greeting;

```



\---



\## Step 6: Create Guest.js



```jsx

import React from "react";



function Guest() {

&#x20; return (

&#x20;   <div>



&#x20;     <h2>Welcome Guest User</h2>



&#x20;     <h3>Flight Details</h3>



&#x20;     <ul>

&#x20;       <li>Flight: Air India AI-101</li>

&#x20;       <li>From: Delhi</li>

&#x20;       <li>To: Mumbai</li>

&#x20;       <li>Time: 10:00 AM</li>

&#x20;     </ul>



&#x20;     <p>Please login to book tickets.</p>



&#x20;   </div>

&#x20; );

}



export default Guest;

```



\---



\## Step 7: Create GuestGreeting.js



```jsx

import React from "react";



function GuestGreeting() {

&#x20; return (

&#x20;   <h2>Please Sign Up</h2>

&#x20; );

}



export default GuestGreeting;

```



\---



\## Step 8: Create User.js



```jsx

import React from "react";



function User() {

&#x20; return (

&#x20;   <div>



&#x20;     <h2>Welcome Logged In User</h2>



&#x20;     <h3>Flight Details</h3>



&#x20;     <ul>

&#x20;       <li>Flight: Air India AI-101</li>

&#x20;       <li>From: Delhi</li>

&#x20;       <li>To: Mumbai</li>

&#x20;       <li>Time: 10:00 AM</li>

&#x20;     </ul>



&#x20;     <button>

&#x20;       Book Ticket

&#x20;     </button>



&#x20;   </div>

&#x20; );

}



export default User;

```



\---



\## Step 9: Create UserGreeting.js



```jsx

import React from "react";



function UserGreeting() {

&#x20; return (

&#x20;   <h2>Welcome Back</h2>

&#x20; );

}



export default UserGreeting;

```



\---



\## Step 10: Create LoginButton.js



```jsx

import React from "react";



function LoginButton(props) {

&#x20; return (

&#x20;   <button onClick={props.onClick}>

&#x20;     Login

&#x20;   </button>

&#x20; );

}



export default LoginButton;

```



\---



\## Step 11: Create LogoutButton.js



```jsx

import React from "react";



function LogoutButton(props) {

&#x20; return (

&#x20;   <button onClick={props.onClick}>

&#x20;     Logout

&#x20;   </button>

&#x20; );

}



export default LogoutButton;

```



\---



\## Step 12: App.css



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



\## Step 13: Run the Application



```bash

npm start

```



\---



\## Step 14: Open in Browser



```

http://localhost:3000

```



\---



\# Expected Output



\### Initially (Guest User)



```

Ticket Booking Application



Please Sign Up



Login

```



After clicking \*\*Login\*\*:



```

Ticket Booking Application



Welcome Back



Logout

```



When \*\*Logout\*\* is clicked, the application returns to the Guest page.



> \*\*Note:\*\* If you want to display the complete `Guest` and `User` components (including flight details and booking button), modify `Greeting.js` to render `<Guest />` and `<User />` instead of `<GuestGreeting />` and `<UserGreeting />`.



\---



\# React Concepts



\## What is Conditional Rendering?



Conditional Rendering allows React to display different UI elements based on a condition.



Example:



```jsx

{

&#x20; isLoggedIn

&#x20;   ? <LogoutButton />

&#x20;   : <LoginButton />

}

```



\---



\## Ways to Perform Conditional Rendering



\- `if...else`

\- Ternary Operator (`condition ? true : false`)

\- Logical AND (`\&\&`)

\- Element Variables

\- Returning `null`



\---



\## Element Variables



Element variables store JSX elements before rendering.



Example:



```jsx

let button;



if (isLoggedIn) {

&#x20; button = <LogoutButton />;

} else {

&#x20; button = <LoginButton />;

}



return (

&#x20; <div>

&#x20;   {button}

&#x20; </div>

);

```



\---



\## Preventing Components from Rendering



A component can return `null` to prevent rendering.



Example:



```jsx

function Example(props) {



&#x20; if (!props.show) {

&#x20;   return null;

&#x20; }



&#x20; return <h2>Hello React</h2>;

}

```



\---



\## React Hook - useState()



`useState()` is a Hook used to store and update state in Function Components.



Example:



```jsx

const \[isLoggedIn, setIsLoggedIn] = useState(false);

```



\---



\## Conditional Rendering using Ternary Operator



Example:



```jsx

{

&#x20; isLoggedIn

&#x20;   ? <LogoutButton />

&#x20;   : <LoginButton />

}

```



If the user is logged in, the \*\*Logout\*\* button is displayed; otherwise, the \*\*Login\*\* button is displayed.



\---



\## Advantages of Conditional Rendering



\- Displays UI dynamically.

\- Improves user experience.

\- Reduces unnecessary rendering.

\- Makes applications interactive.

\- Simplifies decision-based UI.



\---



\## Result



Successfully created a React application named \*\*ticketbookingapp\*\*, implemented \*\*Conditional Rendering\*\* using React state, displayed different UI for guest and logged-in users, switched between \*\*Login\*\* and \*\*Logout\*\* pages dynamically, and demonstrated the use of `useState`, element variables, and conditional rendering techniques.

