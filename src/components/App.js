import logo from "../logo.svg";
import "../App.css";
import MovieCollection from "./MovieCollection";
import NavBar from "./NavBar";
import GenrePage from "../pages/GenrePage";
import { Routes, Route } from "react-router-dom";
import RatingPage from "../pages/RatingPage";
import YearPage from "../pages/YearPage";
import { useState, useEffect } from "react";

import Home from "../pages/Home";

function App() {
  const [movies, setMovies] = useState([]);

  function addNewMovie(newMovie) {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  }

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="App">
      <h1 className="neon-title">CineGalaxy</h1>
      <header className="NextUp Movies">
        <NavBar />
        <Routes>
          <Route path="/genre" element={<GenrePage movies={movies} />} />
          <Route path="/rating" element={<RatingPage movies={movies} />} />
          <Route path="/year" element={<YearPage movies={movies} />} />
          <Route path="/" element={<Home addNewMovie={addNewMovie} />} />
          <Route path="*" element={<MovieCollection />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
