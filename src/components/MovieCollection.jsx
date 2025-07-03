import MovieCard from "./MovieCard";

const MovieCollection = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p style={{ color: "white" }}></p>;
  }

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollection;
