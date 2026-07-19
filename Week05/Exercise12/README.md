# Exercise 12 - Conditional Rendering in React (Ticket Booking Application)

## Objective

This exercise demonstrates **Conditional Rendering** in React by developing a **Ticket Booking Application**.

The application displays different user interfaces based on login status:

- Guest users can view flight details.
- Logged-in users can book tickets.
- Login and Logout states are managed using React `useState()`.

---

# Learning Objectives

After completing this exercise, you will be able to:

- Explain Conditional Rendering in React.
- Understand Element Variables.
- Prevent components from rendering.
- Implement Login and Logout functionality.
- Render components based on conditions.
- Manage UI using React Hooks (`useState`).

---

# Prerequisites

Before starting this exercise, ensure the following are installed:

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
ticketbookingapp/

│
├── node_modules/
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
│
├── package.json
└── README.md
```

---

# Steps Performed

## Step 1: Create React Application

Create the React project using:

```bash
npx create-react-app ticketbookingapp
```

---

## Step 2: Navigate to Project Folder

```bash
cd ticketbookingapp
```

---

## Step 3: Open Project in Visual Studio Code

```bash
code .
```

---

# Step 4: Implement App Component

Created `App.js`.

Implemented:

- React `useState()` hook.
- Login functionality.
- Logout functionality.
- Conditional rendering.

State variable:

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

---

# Step 5: Create Greeting Component

Created `Greeting.js`.

This component decides which greeting component should be displayed.

If user is logged in:

```
UserGreeting
```

Otherwise:

```
GuestGreeting
```

---

# Step 6: Create Guest Components

Created:

- `Guest.js`
- `GuestGreeting.js`

Guest users can:

- View flight details.
- See login message.
- Cannot book tickets.

---

# Step 7: Create User Components

Created:

- `User.js`
- `UserGreeting.js`

Logged-in users can:

- View flight details.
- Book tickets.

---

# Step 8: Create Login Button Component

Created `LoginButton.js`.

Functionality:

- Changes guest state to logged-in state.

---

# Step 9: Create Logout Button Component

Created `LogoutButton.js`.

Functionality:

- Changes logged-in state back to guest state.

---

# Step 10: Run Application

Execute:

```bash
npm start
```

---

# Step 11: Open Application

Open browser:

```
http://localhost:3000
```

---

# Expected Output

## Initially (Guest User)

Displayed:

```
Ticket Booking Application

Please Sign Up

Login
```

---

## After Clicking Login

Displayed:

```
Ticket Booking Application

Welcome Back

Logout
```

---

## After Clicking Logout

The application returns to Guest User state.

---

# React Concepts

## Conditional Rendering

Conditional Rendering allows React components to display different UI elements based on a condition.

Example:

```jsx
{
  isLoggedIn
    ? <LogoutButton />
    : <LoginButton />
}
```

If the condition is true, Logout button is displayed.

Otherwise, Login button is displayed.

---

# Methods of Conditional Rendering

React supports different methods:

- if...else statements
- Ternary Operator
- Logical AND (`&&`)
- Element Variables
- Returning `null`

---

# Element Variables

Element variables store JSX elements before rendering.

Example:

```jsx
let button;

if(isLoggedIn)
{
    button = <LogoutButton />;
}
else
{
    button = <LoginButton />;
}
```

The stored element can be rendered later.

---

# Preventing Components from Rendering

A component can return `null` when it should not display anything.

Example:

```jsx
function Example(props)
{
    if(!props.show)
    {
        return null;
    }

    return <h2>Hello React</h2>;
}
```

---

# React Hook - useState()

`useState()` is a React Hook used to store and update state values in functional components.

Example:

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Here:

- `isLoggedIn` stores current login status.
- `setIsLoggedIn` updates the state.

---

# Conditional Rendering Using Ternary Operator

Example:

```jsx
{
    isLoggedIn
        ? <LogoutButton />
        : <LoginButton />
}
```

The UI changes dynamically based on login status.

---

# Advantages of Conditional Rendering

- Creates dynamic user interfaces.
- Improves user experience.
- Displays content based on user actions.
- Reduces unnecessary rendering.
- Makes applications interactive.
- Simplifies decision-based UI.

---

# Result

Successfully created a React application named **ticketbookingapp** and implemented:

- Conditional Rendering.
- Login and Logout functionality.
- React `useState()` Hook.
- Element variables.
- Dynamic UI updates based on user state.

The application successfully switches between Guest User and Logged-In User views using React conditional rendering techniques.
