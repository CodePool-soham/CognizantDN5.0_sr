\# Exercise 01 - React Environment Setup



\## Objective



This exercise demonstrates how to set up a React development environment using \*\*Node.js\*\*, \*\*NPM\*\*, and \*\*Create React App\*\*. A simple React application named \*\*myfirstreact\*\* is created to display the heading:



> \*\*Welcome to the first session of React\*\*



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Define Single Page Application (SPA) and its benefits.

\- Understand React and how it works.

\- Differentiate between SPA and MPA.

\- Explain the advantages and disadvantages of SPA.

\- Understand the concept of React.

\- Define Virtual DOM.

\- Explain the key features of React.

\- Set up a React development environment.

\- Create a React application using Create React App.



\---



\## Prerequisites



Before starting this exercise, ensure you have the following installed:



\- Node.js

\- NPM (comes with Node.js)

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

myfirstreact/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── index.js

│   └── ...

├── package.json

└── README.md

```



\---



\## Steps Performed



\### Step 1: Install Node.js



Download and install Node.js from:



https://nodejs.org/en/download/



Verify the installation:



```bash

node -v

npm -v

```



\---



\### Step 2: Install Create React App



Open Command Prompt and run:



```bash

npm install -g create-react-app

```



\---



\### Step 3: Create a React Application



Create a new React project named \*\*myfirstreact\*\*:



```bash

npx create-react-app myfirstreact

```



\---



\### Step 4: Navigate to the Project



```bash

cd myfirstreact

```



\---



\### Step 5: Open the Project in Visual Studio Code



```bash

code .

```



\---



\### Step 6: Modify `App.js`



Replace the existing content of \*\*src/App.js\*\* with:



```jsx

function App() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Welcome to the first session of React</h1>

&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\### Step 7: Run the Application



Start the React development server:



```bash

npm start

```



\---



\### Step 8: Open in Browser



Visit:



```

http://localhost:3000

```



You should see the following output:



```

Welcome to the first session of React

```



\---



\## App.js



```jsx

function App() {

&#x20; return (

&#x20;   <div>

&#x20;     <h1>Welcome to the first session of React</h1>

&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## App.css



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



\## React Concepts



\### What is SPA (Single Page Application)?



A Single Page Application (SPA) loads a single HTML page and dynamically updates content without reloading the entire page, providing a faster and smoother user experience.



\---



\### Benefits of SPA



\- Faster page loading

\- Better user experience

\- Reduced server requests

\- Dynamic content updates

\- Improved performance



\---



\### What is React?



React is an open-source JavaScript library developed by Facebook for building fast and interactive user interfaces using reusable components.



\---



\### SPA vs MPA



| SPA | MPA |

|-----|-----|

| Loads one page | Loads multiple pages |

| Faster navigation | Slower navigation |

| Better user experience | Traditional user experience |

| Uses JavaScript to update content | Reloads the entire page |

| Examples: Gmail, Facebook | Examples: Traditional websites |



\---



\### Advantages of React



\- Component-based architecture

\- Virtual DOM

\- High performance

\- Reusable components

\- Easy to learn

\- Large community support



\---



\### Disadvantages of React



\- Learning JSX

\- Fast-changing ecosystem

\- Only handles the UI layer

\- Requires additional libraries for routing and state management



\---



\### Virtual DOM



Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares it with the previous version, and updates only the changed parts of the real DOM, improving application performance.



\---



\### Features of React



\- JSX

\- Components

\- Virtual DOM

\- One-way Data Binding

\- State Management

\- Props

\- Fast Rendering

\- Reusable Code

\- Easy Debugging



\---



\## Expected Output



```

Welcome to the first session of React

```



Displayed as a heading in the browser at:



```

http://localhost:3000

```



\---



\## Result



Successfully created and executed a React application named \*\*myfirstreact\*\* using \*\*Create React App\*\*, displaying the heading \*\*"Welcome to the first session of React"\*\* in the browser.

