import React from "react";
import { useNavigate } from "react-router-dom";


const Movie = ({ movie, deleteMovie }) => {
  //<SideBar />
  const navigate = useNavigate();
  const editMovie = (e, movieId) => {
    e.preventDefault();
      navigate(`/editMovie/${movieId}`);
  };

  return (
    

    <tr key={movie.movieId} className="movie-card" style={{ backgroundImage: `url('/movie-poster.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", }}>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">
        <img src="/movie-sample-poster.jpg" alt={movie.movieTitle} />
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Title :{movie.movieTitle}</div>
      </td>
      
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Genre :{movie.genre}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Director :{movie.director}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Duration :{movie.duration}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Release Date :{movie.releaseDate}</div>
      </td>
 {/*     <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Show Time :{movie.showtimes}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Rating and Review :{movie.ratingAndReview}</div>
  </td>*/}
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, movieId) => editMovie(e, movie.movieId)}
          className="text-blue-600 hover:text-red-800 ml-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-100 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-50">
          Edit
        </a>
        <a
          onClick={(e, moveId) => deleteMovie(e, movie.movieId)}
          className="text-red-600 hover:text-red-800 ml-2 px-4 py-2 text-sm font-medium rounded-md bg-red-100 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-50">
          Delete
        </a>
      </td>
    </tr>
   // </div>
    //</div>
  );
};

export default Movie;
