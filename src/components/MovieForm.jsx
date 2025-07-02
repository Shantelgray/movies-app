import React, { useState } from "react";

function MovieForm({ addNewMovie }) {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    description: "",
    rating: "",
    year: "",
    image: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((onNewMovie) => {
        addNewMovie(onNewMovie);
        setFormData({
          name: "",
          genre: "",
          description: "",
          rating: "",
          year: "",
          image: "",
        });
      });
  }

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h2>New Movie</h2>

        <label htmlFor="name">Title:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
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
}

export default MovieForm;
