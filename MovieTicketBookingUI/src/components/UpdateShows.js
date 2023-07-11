import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

const UpdateShows = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState({
      id: "",
      showDate: "",
      startTime: "",
      movieId: "",
      theaterId:"",
  
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setShow({ ...show, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching show with id:", id);

        const response = await MovieService.getShowById(id);
        console.log("Fetched show data:", response.data);
        setShow(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const updateShow = (e) => {
    e.preventDefault();
    console.log(show);
    MovieService.updateShowById(id, show)
      .then((response) => {
        navigate("/showList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Show</h1>
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
            Show Time
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
            onClick={updateShow}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/showList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateShows;
