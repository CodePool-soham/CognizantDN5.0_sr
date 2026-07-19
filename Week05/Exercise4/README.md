# Exercise 04 - React Component Lifecycle (Blog App)

## 📌 Project Overview

This project demonstrates the implementation of **React Component Lifecycle Methods** using a **Class Component**. A simple **Blog Application** is developed that fetches posts from an online REST API using the `componentDidMount()` lifecycle method and handles runtime errors using `componentDidCatch()`.

The application uses React state to store and display dynamic blog post data fetched from an external API.

---

## 🎯 Objectives Covered

- Understand React Component Lifecycle.
- Learn different phases of component lifecycle.
- Understand lifecycle methods used in Class Components.
- Implement `componentDidMount()`.
- Implement `componentDidCatch()`.
- Fetch external data using Fetch API.
- Store API response using React State.
- Display dynamic data using JSX.

---

## 🧩 Technologies Used

- React
- JavaScript (ES6)
- JSX
- Fetch API
- CSS
- Node.js
- NPM
- Create React App
- Visual Studio Code

---

## 📋 Prerequisites

Before starting this exercise, ensure the following software is installed:

- Node.js
- NPM
- Visual Studio Code
- Google Chrome (or any modern browser)

---

# 🚀 Project Setup

## Step 1: Create React Application

Create a new React project:

```bash
npx create-react-app blogapp
```

---

## Step 2: Navigate to Project

```bash
cd blogapp
```

---

## Step 3: Open Project in VS Code

```bash
code .
```

---

## Step 4: Run Application

```bash
npm start
```

Application runs at:

```
http://localhost:3000
```

---

# 📁 Project Structure

```text
blogapp

│
├── public
│
├── src
│   │
│   ├── App.js
│   ├── App.css
│   ├── Post.js
│   ├── Posts.js
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

---

# 📝 Post Model

Create `Post.js`.

This class represents a blog post object.

```javascript
class Post {

    constructor(id, title, body) {

        this.id = id;
        this.title = title;
        this.body = body;

    }

}

export default Post;
```

---

# 📚 Posts Component

Create `Posts.js`.

This component:

- Maintains blog post data using state.
- Fetches posts from an API.
- Displays posts dynamically.
- Handles runtime errors.

```jsx
import React, { Component } from "react";


class Posts extends Component {


    constructor(props) {

        super(props);

        this.state = {

            posts: []

        };

    }


    loadPosts() {

        fetch("https://jsonplaceholder.typicode.com/posts")

        .then(response => response.json())

        .then(data => {

            this.setState({

                posts: data

            });

        })

        .catch(error => {

            console.log(error);

        });

    }



    componentDidMount() {

        this.loadPosts();

    }



    componentDidCatch(error) {

        alert(error);

    }



    render() {

        return (

            <div>

                <h1>Blog Posts</h1>


                {

                    this.state.posts.map(post => (

                        <div key={post.id}>

                            <h2>{post.title}</h2>

                            <p>{post.body}</p>

                            <hr />

                        </div>

                    ))

                }


            </div>

        );

    }

}


export default Posts;
```

---

# 🖥️ App.js

The main component renders the `Posts` component.

```jsx
import './App.css';
import Posts from './Posts';


function App() {

    return (

        <div className="App">

            <Posts />

        </div>

    );

}


export default App;
```

---

# 🎨 App.css

```css
.App {

    text-align: center;

}


.App-logo {

    height: 40vmin;

    pointer-events: none;

}


@media (prefers-reduced-motion: no-preference) {

    .App-logo {

        animation: App-logo-spin infinite 20s linear;

    }

}


.App-header {

    background-color: #282c34;

    min-height: 100vh;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    font-size: calc(10px + 2vmin);

    color: white;

}


.App-link {

    color: #61dafb;

}


@keyframes App-logo-spin {

    from {

        transform: rotate(0deg);

    }


    to {

        transform: rotate(360deg);

    }

}
```

---

# 🧪 Expected Output

The application fetches blog posts from:

```
https://jsonplaceholder.typicode.com/posts
```

Displayed output:

```text
Blog Posts


Title of Post 1

Body of Post 1

--------------------------------


Title of Post 2

Body of Post 2

--------------------------------
```

---

# React Concepts

## What is Component Lifecycle?

Component Lifecycle represents the different stages a React component goes through from creation to removal from the DOM.

Lifecycle methods allow developers to execute code at specific stages of a component's life.

---

# Need for Component Lifecycle

Lifecycle methods are required for:

- Executing code at specific stages.
- Fetching API data.
- Updating UI dynamically.
- Managing resources.
- Handling errors.
- Improving application performance.

---

# Benefits of Lifecycle Methods

- Better application control.
- Cleaner code structure.
- Efficient data loading.
- Easier debugging.
- Improved user experience.
- Proper resource management.

---

# React Lifecycle Phases

React Class Components have three major lifecycle phases.

---

## 1. Mounting Phase

Occurs when a component is created and added to the DOM.

Methods:

- constructor()
- render()
- componentDidMount()

Flow:

```
constructor()

        ↓

render()

        ↓

componentDidMount()
```

---

## 2. Updating Phase

Occurs when state or props change.

Methods:

- shouldComponentUpdate()
- render()
- componentDidUpdate()

Flow:

```
shouldComponentUpdate()

        ↓

render()

        ↓

componentDidUpdate()
```

---

## 3. Unmounting Phase

Occurs when the component is removed from the DOM.

Method:

- componentWillUnmount()

---

# Lifecycle Methods

| Method | Purpose |
|--------|---------|
| constructor() | Initializes state |
| render() | Returns JSX |
| componentDidMount() | Executes after mounting |
| shouldComponentUpdate() | Controls re-rendering |
| componentDidUpdate() | Executes after updates |
| componentWillUnmount() | Cleans resources |
| componentDidCatch() | Handles errors |

---

# componentDidMount()

`componentDidMount()` executes after the component is inserted into the DOM.

It is commonly used for:

- API calls
- HTTP requests
- Timers
- Third-party library initialization

Example:

```jsx
componentDidMount() {

    this.loadPosts();

}
```

---

# componentDidCatch()

`componentDidCatch()` catches runtime errors in child components and prevents application crashes.

Example:

```jsx
componentDidCatch(error) {

    alert(error);

}
```

---

# render() Method

The `render()` method returns JSX that React displays in the browser.

Example:

```jsx
render(){

    return(

        <h1>Blog Posts</h1>

    );

}
```

---

# Fetch API

Fetch API is used to retrieve data asynchronously from a server.

Example:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")

.then(response => response.json())

.then(data => {

    this.setState({

        posts:data

    });

});
```

---

# Advantages of Lifecycle Methods

- Automatic API execution.
- Better state management.
- Improved performance.
- Cleaner application structure.
- Efficient error handling.
- Better control over component behavior.

---

# Key Learnings

- Learned React Component Lifecycle.
- Implemented Class Components.
- Used `componentDidMount()` for API data fetching.
- Used React State for storing dynamic data.
- Implemented error handling using `componentDidCatch()`.
- Displayed external API data dynamically.

---

# ✅ Result

Successfully created a React application named **blogapp**, implemented **Component Lifecycle Methods**, fetched blog posts using the **componentDidMount()** lifecycle hook, handled errors using **componentDidCatch()**, and displayed dynamic blog content using React state.
