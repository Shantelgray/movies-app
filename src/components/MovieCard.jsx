import React, { useState } from "react";

function MovieCard({ movie }) {
  const [isToggled, setIsToggled] = useState(false);
  function isMovieValid(movie) {
    return movie !== undefined && movie !== null;
  }
  if (!isMovieValid(movie)) return null;

  const { name, genre, year, description, rating, image } = movie;
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="movie-details" onClick={handleToggle}>
      {isToggled ? (
        <div>
          <h3>{name}</h3>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Year:</strong> {year}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Rating:</strong> {rating}/10
          </p>
        </div>
      ) : (
        <div>
          <img src={image} alt={name} width="200" height="300" />
        </div>
      )}
    </div>
  );
}

export default MovieCard;
