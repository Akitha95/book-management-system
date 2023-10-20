import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/CreateBook.css";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      isbn,
    };
    axios
      // for local host
      // .post("http://localhost:5555/books", data)

      // for deploy
      .post(
        "https://book-management-system-api-56zt.onrender.com/books",
        data
      )
      .then(() => {
        navigate("/");
        window.location.reload(true);
      })
      .catch((error) => {
        alert("An error. please check console");
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create Book</h1>
      <form className="form" onSubmit={handleSaveBook}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Book Title.."
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Book Author.."
            required
          />
        </div>
        <div>
          <label>ISBN</label>
          <input
            type="number"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="Enter Book ISBN.."
            required
          />
        </div>
        <button type="submit">Save</button>
        {/* <input onClick={handleSaveBook} type="submit" value="Submit"></input> */}
      </form>
    </div>
  );
};

export default CreateBook;
