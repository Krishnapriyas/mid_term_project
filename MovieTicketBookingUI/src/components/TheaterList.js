import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";
import Theater from "./Theater";
import Sidebar  from "./SideBar";


const TheaterList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [theater, setTheater] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTheaters, setFilteredTheaters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getAllTheaters();
        setTheater(response.data);
      } catch (error) {
        setTheater([]);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterTheaters = () => {
      if (theater && searchTerm.trim() !== "") {
        const filtered = theater.filter(
          (theater) =>
            (theater.location && theater.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (theater.theaterName && theater.theaterName.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredTheaters(filtered);
      } else {
        setFilteredTheaters(theater);
      }
    };
    filterTheaters();
  }, [theater, searchTerm]);


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const deleteTheater = (e, theaterId) => {
    e.preventDefault();
    MovieService.deleteTheaterById(theaterId).then((res) => {
      if (theater) {
        setTheater((prevElement) => {
          return prevElement.filter((theater) => theater.theaterId !== theaterId);
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
          onClick={() => navigate("/addTheater")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold ">
          Add Theater
        </button>
        <input
        type="text"
        placeholder="Search by theater name or location"
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: "400px" }}
      />

      </div>
      <div className="flex shadow border-b">
 
{/*}        {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredTheaters.map((theater) => (
            <li key={theater.theaterId}>{theater.theaterName}</li>
          ))}
        </ul>
          )} */}
    </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
 
          {!loading && filteredTheaters &&(
            
            <tbody className="bg-white">
              <div className="movie-grid">
              {filteredTheaters.map((theater) => (
      //<div class="grid-container">
    //<div class="grid-item">

                <Theater
                  theater={theater}
                  deleteTheater={deleteTheater}
                  key={theater.theaterId}></Theater>
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

export default TheaterList;
