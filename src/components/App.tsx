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
import MovieForm from "./MovieForm";

export interface Movie {
  id: string;
  title: string;
  genre: string;
  description: string;
  image: string;
  year: string;
  rating: string;
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
      title: "Scooby Doo",
      genre: "Cartoon",
      description: "Explosive action movie",
      image: "Happy",
      year: "1970",
      rating: "10",
    },
    {
      id: "3",
      title: "Rush Hour",
      genre: "Action",
      description: "Emotional story",
      image: "Hello",
      year: "2000",
      rating: "8",
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
          <Route
            path="/new"
            element={<MovieForm addNewMovie={addNewMovie} />}
          />
          <Route path="*" element={<MovieCollection movies={movies} />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
