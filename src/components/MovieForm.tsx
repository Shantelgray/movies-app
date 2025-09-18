import React, { useState } from "react";
import type { Movie } from "./App";
import { useForm } from "react-hook-form";

let renderCount = 0;

type FormValues = {
  title: string;
  genre: string;
  description: string;
  image: string;
  year: string;
  rating: string;
};

export interface MovieFormProps {
  addNewMovie: (movie: Movie) => void;
}
export const MovieForm: React.FC<MovieFormProps> = ({ addNewMovie }) => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: {
      title: "Title",
      genre: "Genre",
      description: "Description",
      image: ":)",
      year: "Year",
      rating: "Rating",
    },
  });
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  renderCount++;
  return (
    <div className="form-container">
      <h1>MovieForm({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <h2>New Movie</h2>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            {...register("title", {
              required: "Title is required",
            })}
            placeholder="Title"
          />
          <p className="error">{errors.title?.message}</p>
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            {...register("genre", { required: "Genre is required" })}
            placeholder="Genre"
          />
          <p className="error">{errors.genre?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="description"
          />
          <p className="error">{errors.description?.message}</p>
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="text"
            {...register("image", { required: "Image is required" })}
            placeholder="Image"
          />
          <p className="error"> {errors.image?.message}</p>
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="year">Year:</label>
          <input
            id="year"
            type="text"
            {...register("year", { required: "Year is required" })}
            placeholder="Year"
          />
          <p className="error"> {errors.year?.message}</p>
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="text"
            {...register("rating", { required: "Rating is required" })}
            placeholder="Rating"
          />
          <p className="error">{errors.rating?.message}</p>
        </div>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
export default MovieForm;
