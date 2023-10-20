import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import DeleteBook from "./pages/DeleteBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router basename="book-management-system">
        <Routes>
          <Route path="/" exact Component={BookList} />
          <Route path="/books/delete/:id" exact Component={DeleteBook} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
