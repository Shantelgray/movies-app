import React from "react";

const YearPage = ({ movies }) => {
  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);

  return (
    <div className="rating-page">
      <h2>Movies Sorted by Year (Oldest to Newest)</h2>
      {sortedMovies.length > 0 && (
        <div className="movies-container">
          {sortedMovies.map((movie, index) => (
            <div key={index} className="movie-item">
              <h3>{movie.title}</h3>
              <p>year: {movie.year}</p>
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YearPage;
