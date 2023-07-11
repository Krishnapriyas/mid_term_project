import React from "react";
import { useNavigate } from "react-router-dom";


const Bookings = ({ booking, deleteBooking }) => {
  //<SideBar />
  const navigate = useNavigate();
  const editBooking = (e, bookingId) => {
    e.preventDefault();
      navigate(`/editBooking/${bookingId}`);
  };

  return (
    

    <tr key={booking.bookingId} className="movie-card" style={{ backgroundImage: `url('/movie-poster.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", }}>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">
        <img src="/theater-poster.jpg" alt={booking.bookingId} />
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Booking Date :{booking.bookingDate}</div>
      </td>
      
      <td className="text-left px-6 py-4 whitespace-nowrap uppercase">
        <div className="text-sm text-gray-500">Total Amount :{booking.totalAmount}</div>
      </td>
      
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, bookingId) => editBooking(e, booking.bookingId)}
          className="text-blue-600 hover:text-red-800 ml-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-100 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-50">
          Edit
        </a>
        <a
          onClick={(e, bookingId) => deleteBooking(e, booking.bookingId)}
          className="text-red-600 hover:text-red-800 ml-2 px-4 py-2 text-sm font-medium rounded-md bg-red-100 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-50">
          Delete
        </a>
      </td>
    </tr>
   // </div>
    //</div>
  );
};

export default Bookings;
