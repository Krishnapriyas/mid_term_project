import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import icon from '../assets/logo/webscript.png';
import { FaFilm } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const icon = <FaFilm />;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);
  const [isTheatersDropdownOpen, setIsTheatersDropdownOpen] = useState(false);
  const [isBookingsDropdownOpen, setIsBookingsDropdownOpen] = useState(false);
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isShowsDropdownOpen, setIsShowsDropdownOpen] = useState(false);

  

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  const toggleTheatersDropdown = () => {
    setIsTheatersDropdownOpen(!isTheatersDropdownOpen);
  };

  const toggleBookingsDropdown = () => {
    setIsBookingsDropdownOpen(!isBookingsDropdownOpen);
  };

  const toggleUsersDropdown = () => {
    setIsUsersDropdownOpen(!isUsersDropdownOpen);
  };
  const toggleShowsDropdown = () => {
    setIsShowsDropdownOpen(!isShowsDropdownOpen);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} `}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <i className={`fas fa-bars ${isCollapsed ? 'collapsed' : ''}`}>
          
        </i>
      </div>
      <ul>
        <li>
          <div className="dropdown">
            <Link to="/movieList" onClick={toggleMoviesDropdown}>
              <img src="" alt="Movies" width={20} height={20} class="bi bi-film" />
              {!isCollapsed && <span>Movies</span>}
             {/* <i className={`fas fa-chevron-down ${isMoviesDropdownOpen ? 'open' : ''}`}></i> */}
            </Link>
           {/* {isMoviesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/movieList">All Movies</Link>
                </li>
                <li>
                  <Link to="/addMovie">Add Movies</Link>
                </li>
                <li>
                  <Link to="/deleteMovie">Delete Movies</Link>
                </li>
                <li>
                  <Link to="/editMovie">Update Movies</Link>
                </li>
              </ul>
            )}  */}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/theaterList" onClick={toggleTheatersDropdown}>
              <img src="" alt="Theaters" width={20} height={20} class="bi bi-building" />
              {!isCollapsed && <span>Theaters</span>}
             {/* <i className={`fas fa-chevron-down ${isTheatersDropdownOpen ? 'open' : ''}`}></i> */}
            </Link>
            {/* {isTheatersDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/theaterList">All Theaters</Link>
                </li>
                <li>
                  <Link to="/addTheater">Add Theaters</Link>
                </li>
                <li>
                  <Link to="/favoriteTheaters">Favorite Theaters</Link>
                </li>
              </ul>
            )} */}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/BookingList" onClick={toggleBookingsDropdown}>
              <img src="" alt="Bookings" width={20} height={20} class="bi bi-calendar-check"/>
              {!isCollapsed && <span>Bookings</span>}
           {/*   <i className={`fas fa-chevron-down ${isBookingsDropdownOpen ? 'open' : ''}`}></i> */}
            </Link>
            {/* {isBookingsDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/BookingList">All Bookings</Link>
                </li>
                <li>
                  <Link to="/upcomingBookings">Upcoming Bookings</Link>
                </li>
                <li>
                  <Link to="/pastBookings">Past Bookings</Link>
                </li>
              </ul>
            )} */}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/userList" onClick={toggleUsersDropdown}>
              <img src="" alt="Users" width={20} height={20} class="bi bi-people" />
              {!isCollapsed && <span>Users</span>}
          {/*    <i className={`fas fa-chevron-down ${isUsersDropdownOpen ? 'open' : ''}`}></i> */}
            </Link>
            {/* {isUsersDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/">All Uses</Link>
                </li>
                <li>
                  <Link to="/">Add Users</Link>
                </li>
                <li>
                  <Link to="/">Delete Users</Link>
                </li>
                <li>
                  <Link to="/">Update Users</Link>
                </li>
              </ul>
            )} */}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/showList" onClick={toggleShowsDropdown}>
              <img src="" alt="Shows" width={20} height={20} class="bi bi-display" />
              {!isCollapsed && <span>Shows</span>}
            {/*  <i className={`fas fa-chevron-down ${isShowsDropdownOpen ? 'open' : ''}`}></i> */}
            </Link>
            {/* {isShowsDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/">All Shows</Link>
                </li>
                <li>
                  <Link to="/">Add Shows</Link>
                </li>
                <li>
                  <Link to="/">Delete Shows</Link>
                </li>
                <li>
                  <Link to="/">Update Shows</Link>
                </li>
              </ul>
            )} */}
          </div>
        </li>
        
        <li>
          <Link to="/">
            <img src="" alt="LogOut" width={20} height={20} class="bi bi-box-arrow-right" />
            {!isCollapsed && <span>Log Out</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
