import React from "react";

function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "React Introduction",
      description: "Learn the basics of React components."
    },
    {
      id: 2,
      title: "JSX Tutorial",
      description: "Understand JSX syntax in React."
    },
    {
      id: 3,
      title: "React Hooks",
      description: "Learn useState and useEffect hooks."
    }
  ];


  return (
    <div>

      <h2>Blog Details</h2>

      <ul>
        {
          blogs.map(blog => (

            <li key={blog.id}>

              <b>{blog.title}</b>
              <br />

              {blog.description}

            </li>

          ))
        }
      </ul>


    </div>
  );
}

export default BlogDetails;