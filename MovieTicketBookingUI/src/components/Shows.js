import React from "react";
import { useNavigate } from "react-router-dom";


const Shows = ({ show, deleteShow }) => {
  //<SideBar />
  const navigate = useNavigate();
  const editShow = (e, id) => {
    e.preventDefault();
      navigate(`/editShow/${id}`);
  };

  return (
    

    <tr key={show.id} className="movie-card" style={{ backgroundImage: `url('/theater-poster.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", }}>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">
        <img src="/movie-sample-poster.jpg" alt={show.id} />
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Show Date :{show.showDate}</div>
      </td>
      
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Show Time :{show.startTime}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Movie :{show.movieId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Theater :{show.theaterId}</div>
      </td>
 {/*     <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Show Time :{movie.showtimes}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Rating and Review :{movie.ratingAndReview}</div>
  </td>*/}
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editShow(e, show.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteShow(e, show.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
   // </div>
    //</div>
  );
};

export default Shows;
