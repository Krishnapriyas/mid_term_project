import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching movie with id:", id);

        const response = await MovieService.getMovieById(id);
        console.log("Fetched movie data:", response.data);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const updateMovie = (e) => {
    e.preventDefault();
    console.log(movie);
    MovieService.updateMovieById(movie.movieId, movie)
      .then((response) => {
        navigate("/movieList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Movie</h1>
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
 {/*       <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Show Time
          </label>
          <input
            type="text"
            name="showTime"
            value={movie.showtimes}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Rating And Review
          </label>
          <input
            type="text"
            name="ratingAndReview"
            value={movie.ratingAndReview}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
  </div> */}

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateMovie}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/movieList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
