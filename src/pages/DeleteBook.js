import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/DeleteBook.css";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    axios
      // for local host
      // .delete(`http://localhost:5555/books/${id}`)
      // for deploy
      .delete(
        `https://akitha95.github.io/book-management-system-backend/books/${id}`
      )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("An error happened. Please check console");
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Delete Book</h1>
      <hr />
      <div className="mid">
        <h2>Are you sure you want to delete this book?</h2>
        <Link to="/">
          <button className="btn-no">No</button>
        </Link>

        <button className="btn-yes" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
