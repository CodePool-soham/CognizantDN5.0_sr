\# Exercise 13 - Conditional Rendering and Lists in React (Blogger App)



\## Objective



This exercise demonstrates \*\*Conditional Rendering\*\*, \*\*Rendering Multiple Components\*\*, and \*\*Rendering Lists using map()\*\* in React by creating a Blogger application. The application displays Book Details, Blog Details, and Course Details using different conditional rendering techniques.



\---



\## Learning Objectives



After completing this exercise, you will be able to:



\- Explain various ways of Conditional Rendering.

\- Render multiple components.

\- Define List Components.

\- Understand the importance of Keys in React.

\- Extract components with Keys.

\- Use React `map()` function.

\- Display collections dynamically.



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

bloggerapp/

│

├── node\_modules/

├── public/

├── src/

│   ├── App.js

│   ├── App.css

│   ├── BookDetails.js

│   ├── BlogDetails.js

│   ├── CourseDetails.js

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

npx create-react-app bloggerapp

```



\---



\## Step 2: Navigate to the Project



```bash

cd bloggerapp

```



\---



\## Step 3: Open the Project



```bash

code .

```



\---



\## Step 4: Create BookDetails Component



Create \*\*BookDetails.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function BookDetails() {



&#x20; const books = \[

&#x20;   {

&#x20;     id: 1,

&#x20;     name: "React Basics",

&#x20;     author: "John Smith"

&#x20;   },

&#x20;   {

&#x20;     id: 2,

&#x20;     name: "JavaScript ES6",

&#x20;     author: "David Brown"

&#x20;   },

&#x20;   {

&#x20;     id: 3,

&#x20;     name: "Learning React",

&#x20;     author: "Mike Johnson"

&#x20;   }

&#x20; ];



&#x20; const bookdet = (

&#x20;   <ul>

&#x20;     {

&#x20;       books.map(book => (

&#x20;         <li key={book.id}>

&#x20;           Book Name: {book.name}

&#x20;           <br />

&#x20;           Author: {book.author}

&#x20;         </li>

&#x20;       ))

&#x20;     }

&#x20;   </ul>

&#x20; );



&#x20; return (

&#x20;   <div>



&#x20;     <h2>Book Details</h2>



&#x20;     {bookdet}



&#x20;   </div>

&#x20; );

}



export default BookDetails;

```



\---



\## Step 5: Create BlogDetails Component



Create \*\*BlogDetails.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function BlogDetails() {



&#x20; const blogs = \[

&#x20;   {

&#x20;     id: 1,

&#x20;     title: "React Introduction",

&#x20;     description: "Learn the basics of React components."

&#x20;   },

&#x20;   {

&#x20;     id: 2,

&#x20;     title: "JSX Tutorial",

&#x20;     description: "Understand JSX syntax in React."

&#x20;   },

&#x20;   {

&#x20;     id: 3,

&#x20;     title: "React Hooks",

&#x20;     description: "Learn useState and useEffect hooks."

&#x20;   }

&#x20; ];



&#x20; return (

&#x20;   <div>



&#x20;     <h2>Blog Details</h2>



&#x20;     <ul>



&#x20;       {

&#x20;         blogs.map(blog => (



&#x20;           <li key={blog.id}>



&#x20;             <b>{blog.title}</b>



&#x20;             <br />



&#x20;             {blog.description}



&#x20;           </li>



&#x20;         ))

&#x20;       }



&#x20;     </ul>



&#x20;   </div>

&#x20; );

}



export default BlogDetails;

```



\---



\## Step 6: Create CourseDetails Component



Create \*\*CourseDetails.js\*\* inside the \*\*src\*\* folder.



```jsx

import React from "react";



function CourseDetails() {



&#x20; const courses = \[

&#x20;   {

&#x20;     id: 1,

&#x20;     name: "React Development",

&#x20;     duration: "30 Days"

&#x20;   },

&#x20;   {

&#x20;     id: 2,

&#x20;     name: "JavaScript Advanced",

&#x20;     duration: "45 Days"

&#x20;   },

&#x20;   {

&#x20;     id: 3,

&#x20;     name: "Frontend Development",

&#x20;     duration: "60 Days"

&#x20;   }

&#x20; ];



&#x20; return (

&#x20;   <div>



&#x20;     <h2>Course Details</h2>



&#x20;     <ul>



&#x20;       {

&#x20;         courses.map(course => (



&#x20;           <li key={course.id}>



&#x20;             Course: {course.name}



&#x20;             <br />



&#x20;             Duration: {course.duration}



&#x20;           </li>



&#x20;         ))

&#x20;       }



&#x20;     </ul>



&#x20;   </div>

&#x20; );

}



export default CourseDetails;

```



\---



\## Step 7: Modify App.js



```jsx

import './App.css';



export const books = \[

&#x20; { id: 101, bname: "Master React", price: 670 },

&#x20; { id: 102, bname: "Deep Dive into Angular 11", price: 800 },

&#x20; { id: 103, bname: "Mongo Essentials", price: 450 }

];



export const blogs = \[

&#x20; { id: 1, title: "React Learning", author: "Scott" },

&#x20; { id: 2, title: "Installation", author: "John" }

];



export const courses = \[

&#x20; { id: 1, cname: "React", date: "10-07-2026" },

&#x20; { id: 2, cname: "Angular", date: "15-07-2026" }

];



function App() {



&#x20; const showBlogs = true;



&#x20; const BookDetails = (

&#x20;   <ul>



&#x20;     {

&#x20;       books.map(book => (

&#x20;         <li key={book.id}>

&#x20;           <b>{book.bname}</b>

&#x20;           <br />

&#x20;           Price: ₹{book.price}

&#x20;         </li>

&#x20;       ))

&#x20;     }



&#x20;   </ul>

&#x20; );



&#x20; const BlogDetails = (

&#x20;   <ul>



&#x20;     {

&#x20;       blogs.map(blog => (

&#x20;         <li key={blog.id}>

&#x20;           <b>{blog.title}</b>

&#x20;           <br />

&#x20;           Author: {blog.author}

&#x20;         </li>

&#x20;       ))

&#x20;     }



&#x20;   </ul>

&#x20; );



&#x20; const CourseDetails = (

&#x20;   <ul>



&#x20;     {

&#x20;       courses.map(course => (

&#x20;         <li key={course.id}>

&#x20;           <b>{course.cname}</b>

&#x20;           <br />

&#x20;           Start Date: {course.date}

&#x20;         </li>

&#x20;       ))

&#x20;     }



&#x20;   </ul>

&#x20; );



&#x20; let content;



&#x20; if (showBlogs) {

&#x20;   content = BlogDetails;

&#x20; } else {

&#x20;   content = <h3>No Blogs Available</h3>;

&#x20; }



&#x20; return (

&#x20;   <div>



&#x20;     <div className="st2">



&#x20;       <h1>Book Details</h1>



&#x20;       {BookDetails}



&#x20;     </div>



&#x20;     <div className="v1">



&#x20;       <h1>Blog Details</h1>



&#x20;       {content}



&#x20;     </div>



&#x20;     <div className="mystyle1">



&#x20;       <h1>Course Details</h1>



&#x20;       {CourseDetails}



&#x20;     </div>



&#x20;   </div>

&#x20; );

}



export default App;

```



\---



\## Step 8: App.css



```css

.st2 {

&#x20; border: 2px solid green;

&#x20; width: 30%;

&#x20; display: inline-block;

&#x20; vertical-align: top;

&#x20; margin: 10px;

&#x20; padding: 10px;

}



.v1 {

&#x20; border-left: 4px solid green;

&#x20; width: 30%;

&#x20; display: inline-block;

&#x20; vertical-align: top;

&#x20; margin: 10px;

&#x20; padding: 10px;

}



.mystyle1 {

&#x20; border: 2px solid green;

&#x20; width: 30%;

&#x20; display: inline-block;

&#x20; vertical-align: top;

&#x20; margin: 10px;

&#x20; padding: 10px;

}



ul {

&#x20; list-style-type: none;

&#x20; padding-left: 0;

}



li {

&#x20; margin-bottom: 15px;

}

```



\---



\## Step 9: Run the Application



```bash

npm start

```



\---



\## Step 10: Open in Browser



```

http://localhost:3000

```



\---



\# Expected Output



The application displays three sections:



\### Book Details



\- Displays the list of books with their prices.



\### Blog Details



\- If `showBlogs = true`, displays the list of blogs.

\- Otherwise, displays:



```

No Blogs Available

```



\### Course Details



\- Displays all available courses with their start dates.



\---



\# React Concepts



\## Conditional Rendering



Conditional Rendering allows React to display different UI based on a condition.



Example:



```jsx

if (showBlogs) {

&#x20;   content = BlogDetails;

}

else {

&#x20;   content = <h3>No Blogs Available</h3>;

}

```



\---



\## Ways of Conditional Rendering



\### 1. if...else



```jsx

if (condition) {

&#x20;   return <ComponentA />;

}

return <ComponentB />;

```



\### 2. Ternary Operator



```jsx

condition

&#x20;   ? <ComponentA />

&#x20;   : <ComponentB />

```



\### 3. Logical AND (\&\&)



```jsx

condition \&\& <Component />

```



\### 4. Element Variables



```jsx

let content;



if (condition) {

&#x20;   content = <ComponentA />;

}

```



\### 5. Returning `null`



```jsx

if (!show) {

&#x20;   return null;

}

```



\---



\## Rendering Multiple Components



React allows multiple components or JSX elements to be rendered together.



Example:



```jsx

<div>



&#x20;   {BookDetails}



&#x20;   {content}



&#x20;   {CourseDetails}



</div>

```



\---



\## List Components



A List Component displays a collection of data dynamically using arrays.



Example:



```jsx

const books = \[

&#x20;   { id: 1, name: "React" }

];

```



\---



\## React map()



The `map()` function creates a new array by applying a function to each element.



Example:



```jsx

books.map(book => (

&#x20;   <li>{book.name}</li>

))

```



\---



\## Keys in React



A \*\*Key\*\* uniquely identifies each item in a list, helping React efficiently update the UI.



Example:



```jsx

<li key={book.id}>

```



Keys should always be:



\- Unique

\- Stable

\- Preferably database IDs



\---



\## Extracting Components with Keys



Lists can be moved into separate reusable components while preserving the `key`.



Example:



```jsx

<BookDetails />

<BlogDetails />

<CourseDetails />

```



\---



\## Advantages of Lists and Keys



\- Faster rendering.

\- Efficient DOM updates.

\- Better performance.

\- Cleaner code.

\- Reusable components.



\---



\## Result



Successfully created a React application named \*\*bloggerapp\*\*, implemented multiple methods of \*\*Conditional Rendering\*\*, rendered multiple components, displayed dynamic lists using \*\*map()\*\*, assigned \*\*keys\*\* for efficient rendering, and demonstrated the use of element variables and conditional rendering techniques in React.

