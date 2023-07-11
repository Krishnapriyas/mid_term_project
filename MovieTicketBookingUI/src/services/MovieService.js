import axios from "axios";

const MOVIE_API_BASE_URL = "http://localhost:8080/";

class MovieService {

  login(user){
    return axios.post(MOVIE_API_BASE_URL+"users/login",user);
  }

  register(user){
    return axios.post(MOVIE_API_BASE_URL+"users/register",user);
  }
  saveMovie(movie) {
    return axios.post(MOVIE_API_BASE_URL + "movies/createMovie", movie);
  }

  getAllMovies() {
    return axios.get(MOVIE_API_BASE_URL + "movies/allmovies");
  }

  deleteMovieById(id) {
    return axios.delete(MOVIE_API_BASE_URL + "movies/deleteMovieById/" + id);
  }

  getMovieById(movieId) {
    return axios.get(MOVIE_API_BASE_URL + "movies/getMovieById/" + movieId);
  }

  getMovieByTitle(movieTitle) {
    return axios.get(MOVIE_API_BASE_URL + "movies/getMovieByTitle/" + movieTitle);
  }

  updateMovieById(movieId,movie) {
    return axios.put(MOVIE_API_BASE_URL + "movies/updateMovieById/" + movieId, movie);
  }

  updateMovieByTitle(movie, movieTitle) {
    return axios.put(MOVIE_API_BASE_URL + "movies/updateMovieByTitle/" + movieTitle, movie);
  }

  //theater

  saveTheater(theater) {
    return axios.post(MOVIE_API_BASE_URL + "theaters/createTheater", theater);
  }

  getAllTheaters() {
    return axios.get(MOVIE_API_BASE_URL + "theaters/allTheaters");
  }

  deleteTheaterById(id) {
    return axios.delete(MOVIE_API_BASE_URL + "theaters/deleteTheaterById/" + id);
  }

  getTheaterById(theatreId) {
    return axios.get(MOVIE_API_BASE_URL + "theaters/getTheaterById/" + theatreId);
  }

  getTheaterByTitle(theatreName) {
    return axios.get(MOVIE_API_BASE_URL + "theaters/getTheaterByName/" + theatreName);
  }

  updateTheaterById(theatreId,theater) {
    return axios.put(MOVIE_API_BASE_URL + "theaters/updateTheaterById/" + theatreId, theater);
  }

  updateTheaterByTitle(theater, theatreName) {
    return axios.put(MOVIE_API_BASE_URL + "theaters/updateTheaterByName/" + theatreName, theater);
  }


//Users

saveUser(user) {
  return axios.post(MOVIE_API_BASE_URL + "users/createUser", user);
}

getAllUsers() {
  return axios.get(MOVIE_API_BASE_URL + "users/allUsers");
}

deleteUserById(id) {
  return axios.delete(MOVIE_API_BASE_URL + "users/deleteUserById/" + id);
}

getUserById(customerId) {
  return axios.get(MOVIE_API_BASE_URL + "users/getUserById/" + customerId);
}

getUserByName(name) {
  return axios.get(MOVIE_API_BASE_URL + "users/getUserByName/" + name);
}

updateUserById(customerId,user) {
  return axios.put(MOVIE_API_BASE_URL + "users/updateUserById/" + customerId, user);
}

updateUserByName(user, name) {
  return axios.put(MOVIE_API_BASE_URL + "users/updateUserByName/" + name, user);
}


//shows
saveShow(show) {
  return axios.post(MOVIE_API_BASE_URL + "shows/createShow", show);
}

getAllShows() {
  return axios.get(MOVIE_API_BASE_URL + "shows/allShows");
}

deleteShowById(id) {
  return axios.delete(MOVIE_API_BASE_URL + "shows/deleteShowTimeById/" + id);
}

getShowById(id) {
  return axios.get(MOVIE_API_BASE_URL + "shows/getShowTimeById/" + id);
}


updateShowById(id,show) {
  return axios.put(MOVIE_API_BASE_URL + "shows/updateShowTimeById/" + id, show);
}

//bookings

saveBooking(booking) {
  return axios.post(MOVIE_API_BASE_URL + "bookingHistory/createBooking", booking);
}

getAllBookings() {
  return axios.get(MOVIE_API_BASE_URL + "bookingHistory/allBookings");
}

deleteBookingById(id) {
  return axios.delete(MOVIE_API_BASE_URL + "bookingHistory/deleteBookingById/" + id);
}

getBookingById(id) {
  return axios.get(MOVIE_API_BASE_URL + "bookingHistory/getBookingsById/" + id);
}


updateBookingById(id,booking) {
  return axios.put(MOVIE_API_BASE_URL + "bookingHistory/updateBookingById/" + id, booking);
}



};


export default new MovieService();
