import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Book from "./components/pages/Book";
import BookDetail from "./components/pages/BookDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
