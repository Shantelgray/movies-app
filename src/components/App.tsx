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

export interface Movie {
  id: string;
  genre: string;
  rating: string;
  year: string;
  description: string;
  title: string;
  image: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  function addNewMovie(newMovie: Movie) {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  }

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  const moviesData: Movie[] = [
    {
      id: "1",
      genre: "Action",
      rating: "PG-13",
      year: "2021",
      description: "Explosive action movie",
      title: "Scooby Doo",
      image: "World",
    },
    {
      id: "3",
      genre: "Drama",
      rating: "R",
      year: "2020",
      description: "Emotional story",
      title: "Harry Potter",
      image: "Hello",
    },
  ];

  return (
    <div className="App">
      <h1 className="neon-title">CineGalaxy</h1>
      <header className="NextUp Movies">
        <NavBar />
        <Routes>
          <Route path="/genre" element={<GenrePage movies={movies} />} />
          <Route path="/rating" element={<RatingPage movies={movies} />} />
          <Route path="/year" element={<YearPage movies={movies} />} />
          <Route
            path="/"
            element={<Home addNewMovie={addNewMovie} movies={movies} />}
          />
          <Route path="*" element={<MovieCollection movies={movies} />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
