import './App.css';

export const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 }
];

export const blogs = [
  { id: 1, title: "React Learning", author: "Scott" },
  { id: 2, title: "Installation", author: "John" }
];

export const courses = [
  { id: 1, cname: "React", date: "10-07-2026" },
  { id: 2, cname: "Angular", date: "15-07-2026" }
];

function App() {

  const showBlogs = true;

  const BookDetails = (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <b>{book.bname}</b><br />
          Price: ₹{book.price}
        </li>
      ))}
    </ul>
  );

  const BlogDetails = (
    <ul>
      {blogs.map(blog => (
        <li key={blog.id}>
          <b>{blog.title}</b><br />
          Author: {blog.author}
        </li>
      ))}
    </ul>
  );

  const CourseDetails = (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <b>{course.cname}</b><br />
          Start Date: {course.date}
        </li>
      ))}
    </ul>
  );

  let content;

  if (showBlogs) {
    content = BlogDetails;
  } else {
    content = <h3>No Blogs Available</h3>;
  }

  return (
    <div>

      <div className="st2">
        <h1>Book Details</h1>
        {BookDetails}
      </div>

      <div className="v1">
        <h1>Blog Details</h1>
        {content}
      </div>

      <div className="mystyle1">
        <h1>Course Details</h1>
        {CourseDetails}
      </div>

    </div>
  );
}

export default App;