import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";

const AddShows = () => {
  const [show, setShow] = useState({
    
    id: "",
    showDate: "",
    startTime: "",
    movieId: "",
    theaterId:"",


  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setShow({ ...show, [e.target.name]: value });
  };

  const saveShow = (e) => {
    e.preventDefault();
    MovieService.saveShow(show)
      .then((response) => {
        console.log(response);
        navigate("/showList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setShow({
        id: "",
        showDate: "",
        startTime: "",
        movieId: "",
        theaterId:"",


    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Show</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Show Date
          </label>
          <input
            type="text"
            name="showDate"
            value={show.showDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Show Start Time
          </label>
          <input
            type="text"
            name="startTime"
            value={show.startTime}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Movie
          </label>
          <input
            type="text"
            name="movieId"
            value={show.movieId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Theater
          </label>
          <input
            type="text"
            name="theaterId"
            value={show.theaterId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveShow}
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

export default AddShows;
