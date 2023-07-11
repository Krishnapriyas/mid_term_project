import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

const UpdateTheater = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theater, setTheater] = useState({
    theaterId: "",
    theaterName: "",
    location: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setTheater({ ...theater, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching theater with id:", id);

        const response = await MovieService.getTheaterById(id);
        console.log("Fetched theater data:", response.data);
        setTheater(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const UpdateTheater = (e) => {
    e.preventDefault();
    console.log(theater);
    MovieService.updateTheaterById(theater.theaterId, theater)
      .then((response) => {
        navigate("/theaterList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Theater</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Theater Name
          </label>
          <input
            type="text"
            name="theaterName"
            value={theater.theaterName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={theater.location}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
       
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={UpdateTheater}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/theaterList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTheater;
