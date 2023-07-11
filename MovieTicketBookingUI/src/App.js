import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "./components/AddMovie";
import AddTheater from "./components/AddTheater";
import MovieList from "./components/MovieList";
import TheaterList from "./components/TheaterList";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import UpdateMovie from "./components/UpdateMovie";
import UpdateTheater from "./components/UpdateTheater";
//import Register from "./components/Register";
import Registration from "./components/Registration";
import UserHome from "./components/UserHome";
import SideBar from './components/SideBar'
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import ShowsList from "./components/ShowsList";
import AddShows from "./components/AddShows";
import UpdateShows from "./components/UpdateShows";
import BookingsList from "./components/BookingsList";
import AddBookings from "./components/AddBookings";
import UpdateBookings from "./components/UpdateBookings";


function App() {
  
  return (
    <div style={{ backgroundImage: `url('/movie-poster.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", }}>
      <BrowserRouter>
      
        <Navbar />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Home />}></Route>
          <Route path="/userHome" element={<UserHome />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/movieList" element={<MovieList />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/editMovie/:id" element={<UpdateMovie />} />
          <Route path="/theaterList" element={<TheaterList />} />
          <Route path="/addTheater" element={<AddTheater />} />
          <Route path="/editTheater/:id" element={<UpdateTheater />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<UpdateUser />} />
          <Route path="/showList" element={<ShowsList />} />
          <Route path="/addShow" element={<AddShows />} />
          <Route path="/editShow/:id" element={<UpdateShows />} />
          <Route path="/bookingList" element={<BookingsList />} />
          <Route path="/addBookings" element={<AddBookings />} />
          <Route path="/editBooking/:id" element={<UpdateBookings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
