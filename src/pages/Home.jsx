import React from "react";
import MovieForm from "../components/MovieForm";

function Home({ addNewMovie }) {
  return (
    <div>
      <MovieForm addNewMovie={addNewMovie} />
    </div>
  );
}

export default Home;
