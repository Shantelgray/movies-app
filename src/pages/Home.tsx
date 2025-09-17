import { useState } from "react";
import { Movie } from "../components/App";
import MovieForm from "../components/MovieForm";
import MovieCollection from "../components/MovieCollection";

interface HomeProps {
  movies: Movie[];
  addNewMovie: (movie: Movie) => void;
}

function Home({ addNewMovie, movies }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white" }}>Movie Library</h2>
      <MovieForm addNewMovie={addNewMovie} />
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "20px 0",
          width: "100%",
          maxWidth: "400px",
        }}
      />
      {filteredMovies.length > 0 ? (
        <MovieCollection movies={filteredMovies} />
      ) : (
        <p style={{ color: "white" }}>No matching movies found.</p>
      )}
    </div>
  );
}

export default Home;
