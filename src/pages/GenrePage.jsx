import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const GenrePage = ({ movies }) => {
  const genres = [
    "Comedy",
    "Horror",
    "Thriller",
    "Adventure",
    "Action",
    "Sci-Fi",
    "Fantasy",
    "Animation",
    "Romance",
    "Crime",
  ];

  const [selectedGenre, setSelectedGenre] = useState(null);

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
            {genre}
          </button>
        ))}
      </div>

      {selectedGenre && (
        <>
          <h3>Movies in {selectedGenre} genre</h3>
          {filteredMovies.length > 0 ? (
            <div className="movies-container">
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
