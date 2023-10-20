import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/BookList.css";
import CreateBook from "./CreateBook";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      // for local host
      // .get("http://localhost:5555/books")

      // for deploy
      .get("https://book-management-system-api-56zt.onrender.com/books")
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CreateBook />
      <div className="bookList">
        <div>
          <h1>Books List</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Auther</th>
              <th>ISBN</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr className="table-body" key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <div className="icon">
                    <Link to={`/books/delete/${book.isbn}`}>
                      <i class="fa-solid fa-trash-can"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
