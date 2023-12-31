import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    
    movieId: "",
    movieTitle: "",
    genre: "",
    director: "",
    duration:"",
    releaseDate:"",
    //showtimes:"",
    //ratingAndReview:"",


  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const saveMovie = (e) => {
    e.preventDefault();
    MovieService.saveMovie(movie)
      .then((response) => {
        console.log(response);
        navigate("/movieList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setMovie({
      movieId: "",
      movieTitle: "",
      genre: "",
      director: "",
      duration:"",
      releaseDate:"",
      //showtimes:"",
      //ratingAndReview:"",


    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Movie</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Movie Title
          </label>
          <input
            type="text"
            name="movieTitle"
            value={movie.movieTitle}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Director
          </label>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            value={movie.duration}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Release Date
          </label>
          <input
            type="date"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveMovie}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
