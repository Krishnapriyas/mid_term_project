import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-100" style={{ backgroundImage: `url('/movie-poster.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", }}>

      <div className="h-16 px-8 flex items-center justify-center ">
        <p className="text-black text-2xl tracking-wide font-bold ">Movie Booking Application</p>
        
      </div>
      
    </div>
    
  );
};

export default Navbar;
