package com.axis.mtb.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.mtb.entity.BookingHistory;
import com.axis.mtb.entity.Movie;
import com.axis.mtb.entity.RatingAndReview;
import com.axis.mtb.entity.ShowTime;
import com.axis.mtb.entity.Theater;
import com.axis.mtb.entity.User;
import com.axis.mtb.service.BookingHistoryService;
import com.axis.mtb.service.MovieService;
import com.axis.mtb.service.RatingAndReviewService;
import com.axis.mtb.service.ShowTimeService;
import com.axis.mtb.service.TheaterService;
import com.axis.mtb.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("userView")
public class UserViewController {

	@Autowired
	private UserService userService;

	@Autowired
	private BookingHistoryService bookingHistoryService;

	@Autowired
	private MovieService movieService;

	@Autowired
	private RatingAndReviewService ratingAndReviewService;
	
	@Autowired
	private ShowTimeService showTimeService;
	
	@Autowired
	private TheaterService theaterService;

	@PostMapping("/createUser") // verified
	// @ResponseStatus(HttpStatus.CREATED)
	public User createUser(@RequestBody User user) throws NotFoundException {
		return userService.createUser(user);
		// throw new IllegalArgumentException("User not found: " + user.getName());
	}

	@PutMapping("/updateUserById/{userId}") // verified
	public User updateUserById(@PathVariable Integer userId, @RequestBody User user) throws NotFoundException {
		return userService.updateUserById(userId, user);
	}

	@PutMapping("/updateUserByName/{userName}") // verified
	public User updateUserByName(@PathVariable String userName, @RequestBody User user) throws NotFoundException {
		return userService.updateUserByName(userName, user);
	}

	@DeleteMapping("/deleteUserById/{userId}") // verified
	public void deleteUserById(@PathVariable Integer userId) throws NotFoundException {
		userService.deleteUserById(userId);
	}

	@DeleteMapping("/deleteUserByName/{userName}") // verified
	public void deleteUserByName(@PathVariable String userName) throws NotFoundException {
		userService.deleteUserByName(userName);
	}

	@PostMapping("/register") // verified
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		try {
			userService.registerUser(user.getName(), user.getPassword(), user.getEmailId(), user.getIdentity());
			return ResponseEntity.ok("User registered successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PostMapping("/login") // verified
	public ResponseEntity<String> loginUser(@RequestBody User user) {
		try {
			userService.loginUser(user.getName(), user.getPassword());
			return ResponseEntity.ok("User logged in successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}

	// change to get bookingsby user ID
	@GetMapping("/getBookingsById/{bookingId}")
	public BookingHistory getBookingHistroyById(@PathVariable Integer bookingId) throws NotFoundException {
		return bookingHistoryService.getBookingHistoryById(bookingId);
	}

	@PostMapping("/createBooking")
	// @ResponseStatus(HttpStatus.CREATED)
	public BookingHistory createBooking(@RequestBody BookingHistory bookinghistory) {
		return bookingHistoryService.createBooking(bookinghistory);
	}

	@PutMapping("/updateBookingById/{bookingHistoryId}")
	public BookingHistory updateBookingById(@PathVariable Integer bookingHistoryId,
			@RequestBody BookingHistory bookinghistory) throws NotFoundException {
		return bookingHistoryService.updateBookingById(bookingHistoryId, bookinghistory);
	}

	@DeleteMapping("/deleteBookingById/{bookingHistoryId}")
	public void deleteBookingById(@PathVariable Integer bookingHistoryId) throws NotFoundException {
		bookingHistoryService.deleteBookingById(bookingHistoryId);
	}

	@DeleteMapping("/cancelBooking/{bookingHistoryId}")
	public void cancelBooking(@PathVariable Integer bookingHistoryId) throws NotFoundException {
		bookingHistoryService.cancelTicket(bookingHistoryId);
	}

	@GetMapping("/allmovies") // verified
	public List<Movie> getAllMovies() {
		return movieService.getAllMovies();
	}

	@GetMapping("/getMovieById/{movieId}") // verified
	public Movie getMovieById(@PathVariable Integer movieId) throws NotFoundException {
		return movieService.getMovieById(movieId);
	}

	@GetMapping("/getMovieByTitle/{movieName}") // verified
	public Movie getMovieByTitle(@PathVariable String movieName) throws NotFoundException {
		return movieService.getMovieByTitle(movieName);
	}

	@GetMapping("/getMovieByGenre/{genre}") // verified
	public List<Movie> getMovieByGenre(@PathVariable String genre) throws NotFoundException {
		return movieService.getMovieByGenre(genre);
	}

	@GetMapping("/getMovieByReleaseDate/{releaseDate}") // verified
	public List<Movie> getMovieByReleaseDate(@PathVariable Date releaseDate) throws NotFoundException {
		return movieService.getMovieByReleaseDate(releaseDate);
	}

	@GetMapping("/{movie_id}/showtimes")
	public List<ShowTime> getMovieShowtimesById(@PathVariable("movie_id") Integer movieId) throws NotFoundException {
		Movie movie = movieService.getMovieById(movieId);

		List<ShowTime> showtimes = movie.getShowtimes();
		return showtimes;
		// return ResponseEntity.ok(showtimes);

	}

	@GetMapping("/{movieName}/showtime")
	public List<ShowTime> getMovieShowtimesByName(@PathVariable("movieName") String movieName)
			throws NotFoundException {
		Movie movie = movieService.getMovieByTitle(movieName);

		List<ShowTime> showtimes = movie.getShowtimes();
		return showtimes;
		// return ResponseEntity.ok(showtimes);

	}

	@GetMapping("/{movieId}/ratings")
	public List<RatingAndReview> getMovieRatingsById(@PathVariable("movieId") Integer movieId)
			throws NotFoundException {
		Movie movie = movieService.getMovieById(movieId);

		List<RatingAndReview> ratings = movie.getRatingAndReview();
		return ratings;
		// return ResponseEntity.ok(showtimes);

	}

	@GetMapping("/{movieName}/rating")
	public List<RatingAndReview> getMovieRatingsByName(@PathVariable("movieName") String movieName)
			throws NotFoundException {
		Movie movie = movieService.getMovieByTitle(movieName);
		List<RatingAndReview> ratings = movie.getRatingAndReview();
		return ratings;
		// return ResponseEntity.ok(showtimes);

	}

	@GetMapping("/allRatings")
	public List<RatingAndReview> getRatings() {
		return ratingAndReviewService.getAllRatings();
	}

	@GetMapping("/getRatingById/{ratingId}")
	public RatingAndReview getRatingById(@PathVariable Integer ratingId) throws NotFoundException {
		return ratingAndReviewService.getRatingById(ratingId);
	}

	@GetMapping("/getRatingByUser/{userName}")
	public List<RatingAndReview> getRatingByUser(@PathVariable String userName) throws NotFoundException {
		return ratingAndReviewService.getRatingByUser(userName);
	}

	@GetMapping("/getRatingByMovieId/{movieId}")
	public List<RatingAndReview> getRatingByMovieId(@PathVariable Integer movieId) throws NotFoundException {
		return ratingAndReviewService.getRatingByMovieId(movieId);
	}

	@GetMapping("/getRatingByMovieTitle/{movieTitle}")
	public List<RatingAndReview> getRatingByMovieTitle(@PathVariable String movieTitle) throws NotFoundException {
		return ratingAndReviewService.getRatingByMovieTitle(movieTitle);
	}

	@PostMapping("/createRating") // verified
	// @ResponseStatus(HttpStatus.CREATED)
	public RatingAndReview createRating(@RequestBody RatingAndReview rating) {
		return ratingAndReviewService.createRating(rating);
	}

	@PutMapping("/updateRatingById/{ratingId}")
	public RatingAndReview updateRatingById(@PathVariable Integer ratingId, @RequestBody RatingAndReview rating)
			throws NotFoundException {
		return ratingAndReviewService.updateRatingById(ratingId, rating);
	}

	@GetMapping("/allShows")
	public List<ShowTime> getAllShowTime() {
		return showTimeService.getAllShowTime();
	}

	@GetMapping("/getShowTimeById/{id}")
	public ShowTime getShowTimeById(@PathVariable Integer id) throws NotFoundException {
		return showTimeService.getShowTimeById(id);
	}

	@GetMapping("/getShowTimeByTheater/{theaterId}")
	public List<ShowTime> getShowTimeByTheaterId(@PathVariable Integer theaterId) throws NotFoundException {
		return showTimeService.getShowTimeByTheaterId(theaterId);
	}

	/*
	 * @GetMapping("/getShowTimeByTheatreName/{theaterName}") public List<ShowTime>
	 * getShowTimeByTheatreName(@PathVariable String theaterName) throws
	 * NotFoundException { return
	 * showTimeService.getShowTimeByTheaterName(theaterName); }
	 */

	@GetMapping("/getShowTimeByMovie/{movieId}")
	public List<ShowTime> getShowTimeByMovie(@PathVariable Integer movieId) throws NotFoundException {
		return showTimeService.getShowTimeByMovieId(movieId);
	}

	@GetMapping("/allTheaters") // verified
	public List<Theater> getAllTheaters() {
		return theaterService.getAllTheaters();
	}

	@GetMapping("/getTheaterById/{theaterId}") // verified
	public Theater getTheaterById(@PathVariable Integer theaterId) throws NotFoundException {
		return theaterService.getTheaterById(theaterId);
	}

	@GetMapping("/getTheaterByName/{theaterName}") // verified
	public Theater getTheaterByName(@PathVariable String theaterName) throws NotFoundException {
		return theaterService.getTheaterByName(theaterName);
	}

	@GetMapping("/getTheatersByMovieTitle/{movieTitle}")
	public List<Theater> getTheatersByMovieTitle(@PathVariable String movieTitle) throws NotFoundException {
		return theaterService.getTheatersByMovieTitle(movieTitle);
	}
	/*
	 * @GetMapping("/getTheaterByShowId/{showId}") public List<Theater>
	 * getTheaterByShowId(@PathVariable Integer showId) throws NotFoundException {
	 * return theaterService.getTheatersByShowId(showId); }
	 */

	/*
	 * @GetMapping("/getTheaterByShowDate/{showDate}") public List<Theater>
	 * getTheaterByShowDate(@PathVariable Date showDate) throws NotFoundException {
	 * return theaterService.getTheatersByShowDate(showDate); }
	 */

	@GetMapping("/location/{locationName}") // verified
	public List<Theater> getTheaterByLocation(@PathVariable String locationName) throws NotFoundException {
		return theaterService.getTheatersByLocation(locationName);
	}

}
