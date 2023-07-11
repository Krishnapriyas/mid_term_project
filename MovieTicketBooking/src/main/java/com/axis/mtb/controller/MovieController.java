package com.axis.mtb.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.mtb.entity.Movie;
import com.axis.mtb.entity.RatingAndReview;
import com.axis.mtb.entity.ShowTime;
import com.axis.mtb.service.MovieService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/movies")
public class MovieController {

	@Autowired
	private MovieService movieService;

	public MovieController(MovieService movieService) {
		this.movieService = movieService;
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

	@PostMapping("/createMovie") // verified
	// @ResponseStatus(HttpStatus.CREATED)
	public Movie createMovie(@RequestBody Movie movie) {
		return movieService.createMovie(movie);
	}

	@PutMapping("/updateMovieById/{movieId}") // verified
	public Movie updateMovieById(@PathVariable Integer movieId, @RequestBody Movie movie) throws NotFoundException {
		return movieService.updateMovieById(movieId, movie);
	}

	@PutMapping("/updateMovieByTitle/{movieName}") // verified
	public Movie updateMovieByTitle(@PathVariable String movieName, @RequestBody Movie movie) throws NotFoundException {
		return movieService.updateMovieByName(movieName, movie);
	}

	@DeleteMapping("/deleteMovieById/{movieId}") // verified
	public void deleteMovieById(@PathVariable Integer movieId) throws NotFoundException {
		movieService.deleteMoviebyId(movieId);
	}

	@DeleteMapping("/deleteMovieByName/{movieName}") // verified
	public void deleteMovieByName(@PathVariable String movieName) throws NotFoundException {
		movieService.deleteMoviebyName(movieName);
	}

}
