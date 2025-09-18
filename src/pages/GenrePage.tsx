import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../components/App";

interface GenrePageProps {
  movies: Movie[];
}

const GenrePage = ({ movies }: GenrePageProps) => {
  const genres = [
    "Comedy",
    "Horror",
    "Thriller",
    "Adventure",
    "Action",
    "Animation",
    "Romance",
  ];

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre === selectedGenre)
    : [];

  return (
    <div className="genre-page">
      <h2>Movie Genres</h2>
      <div style={{ marginBottom: "20px" }}>
        {genres.map((genre) => (
          <button
            key={genre}
            style={{ marginRight: "10px" }}
            onClick={() => setSelectedGenre(genre)}
          >
            {genres}
          </button>
        ))}
      </div>

      {selectedGenre && (
        <>
          <h3>Movies in {selectedGenre} genre</h3>
          {filteredMovies.length > 0 ? (
            <div className="movie-container">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <p>No movies found in this genre.</p>
          )}
        </>
      )}
    </div>
  );
};

export default GenrePage;
