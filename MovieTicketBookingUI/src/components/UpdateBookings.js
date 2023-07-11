import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

const UpdateBookings = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    bookingId: "",
    bookingDate: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setBooking({ ...booking, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching booking with id:", id);

        const response = await MovieService.getBookingById(id);
        console.log("Fetched booking data:", response.data);
        setBooking(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const updateBooking = (e) => {
    e.preventDefault();
    console.log(booking);
    MovieService.updateBookingById(booking.bookingId, booking)
      .then((response) => {
        navigate("/bookingList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Booking</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Booking Date
          </label>
          <input
            type="date"
            name="bookingDate"
            value={booking.bookingDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Total Amount
          </label>
          <input
            type="text"
            name="totalAmount"
            value={booking.totalAmount}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateBooking}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/bookingList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookings;
