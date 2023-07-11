import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";
import Shows from "./Shows";
import Sidebar  from "./SideBar";


const ShowsList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getAllShows();
        setShow(response.data);
      } catch (error) {
        setShow([]);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteShow = (e, id) => {
    e.preventDefault();
    MovieService.deleteShowById(id).then((res) => {
      if (show) {
        setShow((prevElement) => {
          return prevElement.filter((show) => show.id !== id);
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
          onClick={() => navigate("/addShow")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold ">
          Add Show
        </button>

      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
 
          {!loading && (
            
            <tbody className="bg-white">
              <div className="movie-grid">
              {show.map((show) => (
      //<div class="grid-container">
    //<div class="grid-item">

                <Shows
                  show={show}
                  deleteShow={deleteShow}
                  key={show.id}></Shows>
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

export default ShowsList;
