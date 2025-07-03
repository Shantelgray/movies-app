import React from "react";
import MovieForm from "../components/MovieForm";
import MovieCollection from "../components/MovieCollection";

function Home({ addNewMovie }) {
  return (
    <div>
      <MovieForm addNewMovie={addNewMovie} />
      <MovieCollection />
    </div>
  );
}

export default Home;
