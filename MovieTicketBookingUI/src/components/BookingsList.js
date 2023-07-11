import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";
import Movie from "./Movie";
import Sidebar  from "./SideBar";
import Bookings from "./Bookings";


const BookingList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getAllBookings();
        setBooking(response.data);
      } catch (error) {
        setBooking([]);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterBookings = () => {
      if (booking && searchTerm.trim() !== "") {
        const filtered = booking.filter(
          (booking) =>
            (booking.bookingDate && booking.bookingDate.toLowerCase().includes(searchTerm.toLowerCase())) 
            //(movie.genre && movie.genre.toLowerCase().includes(searchTerm.toLowerCase())) ||

        );
        setFilteredBookings(filtered);
      } else {
        setFilteredBookings(booking);
      }
    };
    filterBookings();
  }, [booking, searchTerm]);
  
  
  
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const deleteBooking = (e, bookingId) => {
    e.preventDefault();
    MovieService.deleteBookingById(bookingId).then((res) => {
      if (booking) {
        setBooking((prevElement) => {
          return prevElement.filter((booking) => booking.bookingId !== bookingId);
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
          onClick={() => navigate("/addBookings")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold ">
          Add Booking
        </button>
        <input
        type="text"
        placeholder="Search by booking date"
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: "400px" }}
      />
      </div>

      <div className="flex shadow border-b">
        <table className="min-w-full">
 
          {!loading && filteredBookings &&(
            
            <tbody className="bg-white">
              <div className="movie-grid">
              {filteredBookings.map((booking) => (
      //<div class="grid-container">
    //<div class="grid-item">

                <Bookings
                  booking={booking}
                  deleteBooking={deleteBooking}
                  key={booking.bookingId}></Bookings>
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

export default BookingList;
