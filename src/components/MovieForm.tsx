import React, { useState } from "react";
import type { Movie } from "./App";

export interface MovieFormProps {
  addNewMovie: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({
  addNewMovie,
}: MovieFormProps) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    genre: "",
    description: "",
    rating: "",
    year: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewMovie(formData);
    setFormData({
      id: "",
      title: "",
      genre: "",
      description: "",
      rating: "",
      year: "",
      image: "",
    });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h2>New Movie</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
        <br />
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
export default MovieForm;
