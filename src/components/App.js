import logo from "../logo.svg";
import "../App.css";
import MovieCollection from "./MovieCollection";
import NavBar from "./NavBar";
import GenrePage from "../pages/GenrePage";
import { Routes, Route } from "react-router-dom";
import RatingPage from "../pages/RatingPage";
import FavoritePage from "../pages/FavoritePage";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="App">
      <header className="NextUp Movies">
        <NavBar />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jdg0b3DCFnG3LI7uCpyN5OpqDZ8QtHXBwg&s"
          alt="logo"
        />
        <p>Recommendations</p>
        <Routes>
          <Route path="/home" element={<MovieCollection movies={movies} />} />
          <Route path="/genre" element={<GenrePage movies={movies} />} />
          <Route path="/rating" element={<>Rating</>} />
          <Route path="/favorite" element={<>Favorites</>} />
          <Route path="*" element={<MovieCollection />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
