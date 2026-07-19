\# Exercise 04 - React Component Lifecycle (Blog App)



\## Objective



This exercise demonstrates the use of \*\*React Component Lifecycle Methods\*\* in a class component. A Blog application is developed that fetches posts from an online REST API using the \*\*componentDidMount()\*\* lifecycle hook and handles runtime errors using \*\*componentDidCatch()\*\*.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Explain the need and benefits of the React Component Lifecycle.

\- Identify the various lifecycle hook methods.

\- Understand the sequence of rendering a React component.

\- Implement the `componentDidMount()` lifecycle hook.

\- Implement the `componentDidCatch()` lifecycle hook.

\- Fetch data from an API using the Fetch API.

\- Display dynamic data using React state.



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

blogapp/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── Post.js

│   ├── Posts.js

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

npx create-react-app blogapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd blogapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create Post.js



Create \*\*Post.js\*\* inside the \*\*src\*\* folder.



```jsx

class Post {

&#x20;   constructor(id, title, body) {

&#x20;       this.id = id;

&#x20;       this.title = title;

&#x20;       this.body = body;

&#x20;   }

}



export default Post;

```



\---



\## Step 5: Create Posts.js



Create \*\*Posts.js\*\* inside the \*\*src\*\* folder.



```jsx

import React, { Component } from "react";



class Posts extends Component {



&#x20;   constructor(props) {

&#x20;       super(props);



&#x20;       this.state = {

&#x20;           posts: \[]

&#x20;       };

&#x20;   }



&#x20;   loadPosts() {



&#x20;       fetch("https://jsonplaceholder.typicode.com/posts")

&#x20;           .then((response) => response.json())

&#x20;           .then((data) => {

&#x20;               this.setState({

&#x20;                   posts: data

&#x20;               });

&#x20;           })

&#x20;           .catch((error) => {

&#x20;               console.log(error);

&#x20;           });



&#x20;   }



&#x20;   componentDidMount() {

&#x20;       this.loadPosts();

&#x20;   }



&#x20;   componentDidCatch(error) {

&#x20;       alert(error);

&#x20;   }



&#x20;   render() {



&#x20;       return (



&#x20;           <div>



&#x20;               <h1>Blog Posts</h1>



&#x20;               {

&#x20;                   this.state.posts.map((post) => (



&#x20;                       <div key={post.id}>



&#x20;                           <h2>{post.title}</h2>



&#x20;                           <p>{post.body}</p>



&#x20;                           <hr />



&#x20;                       </div>



&#x20;                   ))

&#x20;               }



&#x20;           </div>



&#x20;       );



&#x20;   }



}



export default Posts;

```



\---



\## Step 6: Modify App.js



Replace the existing code with:



```jsx

import './App.css';

import Posts from './Posts';



function App() {

&#x20; return (

&#x20;   <div className="App">

&#x20;     <Posts />

&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## Step 7: App.css



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



\## Step 8: Run the Application



```bash

npm start

```



\---



\## Step 9: Open in Browser



Open your browser and visit:



```

http://localhost:3000

```



\---



\# Expected Output



The application fetches blog posts from:



```

https://jsonplaceholder.typicode.com/posts

```



and displays each post as:



```

Blog Posts



Title of Post 1



Body of Post 1



\--------------------------------



Title of Post 2



Body of Post 2



\--------------------------------

```



\---



\# React Concepts



\## What is Component Lifecycle?



The Component Lifecycle refers to the different stages a React component goes through from creation until it is removed from the DOM.



Lifecycle methods allow developers to execute code at different stages of a component's life.



\---



\## Need for Component Lifecycle



\- Execute code at specific stages.

\- Fetch data from APIs.

\- Update the UI dynamically.

\- Improve application performance.

\- Handle errors gracefully.

\- Manage resources efficiently.



\---



\## Benefits of Lifecycle Methods



\- Better code organization.

\- Automatic execution of specific tasks.

\- Efficient data loading.

\- Easier debugging.

\- Improved user experience.

\- Proper cleanup of resources.



\---



\# React Lifecycle Phases



React components pass through three major phases:



\### 1. Mounting



Occurs when the component is created and inserted into the DOM.



Important methods:



\- constructor()

\- render()

\- componentDidMount()



\---



\### 2. Updating



Occurs when state or props change.



Important methods:



\- shouldComponentUpdate()

\- render()

\- componentDidUpdate()



\---



\### 3. Unmounting



Occurs when the component is removed from the DOM.



Important method:



\- componentWillUnmount()



\---



\## Lifecycle Hook Methods



| Method | Purpose |

|---------|---------|

| constructor() | Initializes state |

| render() | Returns JSX |

| componentDidMount() | Executes after component is mounted |

| shouldComponentUpdate() | Controls re-rendering |

| componentDidUpdate() | Executes after updates |

| componentWillUnmount() | Cleans up resources |

| componentDidCatch() | Handles runtime errors |



\---



\## componentDidMount()



`componentDidMount()` is invoked immediately after the component is inserted into the DOM.



It is commonly used to:



\- Fetch API data

\- Make HTTP requests

\- Start timers

\- Initialize third-party libraries



Example:



```jsx

componentDidMount() {

&#x20;   this.loadPosts();

}

```



\---



\## componentDidCatch()



`componentDidCatch()` is an Error Boundary lifecycle method used to catch JavaScript errors in child components and prevent the application from crashing.



Example:



```jsx

componentDidCatch(error) {

&#x20;   alert(error);

}

```



\---



\## render() Method



The `render()` method returns the JSX that React displays in the browser.



Example:



```jsx

render() {

&#x20;   return (

&#x20;       <h1>Blog Posts</h1>

&#x20;   );

}

```



\---



\## Rendering Sequence of a Class Component



The sequence followed during the initial rendering is:



```

constructor()



↓



render()



↓



componentDidMount()

```



When the component updates:



```

shouldComponentUpdate()



↓



render()



↓



componentDidUpdate()

```



When the component is removed:



```

componentWillUnmount()

```



\---



\## Fetch API



The Fetch API is used to retrieve data from a web server asynchronously.



Example:



```jsx

fetch("https://jsonplaceholder.typicode.com/posts")

&#x20;   .then(response => response.json())

&#x20;   .then(data => {

&#x20;       this.setState({

&#x20;           posts: data

&#x20;       });

&#x20;   });

```



\---



\## Advantages of Lifecycle Methods



\- Automatic API calls

\- Better state management

\- Improved performance

\- Cleaner code

\- Easy error handling

\- Better application control



\---



\## Result



Successfully created a React application named \*\*blogapp\*\*, implemented the \*\*componentDidMount()\*\* lifecycle hook to fetch blog posts from an online REST API, used \*\*componentDidCatch()\*\* for error handling, and displayed the fetched blog posts dynamically using React state.

