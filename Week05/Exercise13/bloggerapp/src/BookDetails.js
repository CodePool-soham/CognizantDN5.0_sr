import React from "react";

function BookDetails() {

  const books = [
    {
      id: 1,
      name: "React Basics",
      author: "John Smith"
    },
    {
      id: 2,
      name: "JavaScript ES6",
      author: "David Brown"
    },
    {
      id: 3,
      name: "Learning React",
      author: "Mike Johnson"
    }
  ];


  const bookdet = (
    <ul>
      {
        books.map(book => (
          <li key={book.id}>
            Book Name: {book.name} <br />
            Author: {book.author}
          </li>
        ))
      }
    </ul>
  );


  return (
    <div>

      <h2>Book Details</h2>

      {bookdet}

    </div>
  );
}

export default BookDetails;