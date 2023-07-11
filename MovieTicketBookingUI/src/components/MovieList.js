import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";
import Movie from "./Movie";
import Sidebar  from "./SideBar";


const MovieList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getAllMovies();
        setMovie(response.data);
      } catch (error) {
        setMovie([]);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterMovies = () => {
      if (movie && searchTerm.trim() !== "") {
        const filtered = movie.filter(
          (movie) =>
            (movie.movieTitle && movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (movie.genre && movie.genre.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (movie.releaseDate && movie.releaseDate.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredMovies(filtered);
      } else {
        setFilteredMovies(movie);
      }
    };
    filterMovies();
  }, [movie, searchTerm]);
  
  
  
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const deleteMovie = (e, movieId) => {
    e.preventDefault();
    MovieService.deleteMovieById(movieId).then((res) => {
      if (movie) {
        setMovie((prevElement) => {
          return prevElement.filter((movie) => movie.movieId !== movieId);
        });
      }
    });
  };

  return (
        //<div class="grid-container">
     // <div class="grid-item">
     <div className="flex">
      <Sidebar />
     <div className = "main-content">
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addMovie")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold ">
          Add Movie
        </button>
        <input
        type="text"
        placeholder="Search by movie title or genre or release date"
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: "400px" }}
      />
      </div>
      <div>
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
 
          {!loading && filteredMovies &&(
            
            <tbody className="bg-white">
              <div className="movie-grid">
              {filteredMovies.map((movie) => (
      //<div class="grid-container">
    //<div class="grid-item">

                <Movie
                  movie={movie}
                  deleteMovie={deleteMovie}
                  key={movie.movieId}></Movie>
             //</div>
             //</div>
              ))}
              </div>
            </tbody>
          
          )}
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default MovieList;
