package com.axis.mtb.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.axis.mtb.entity.Movie;
import com.axis.mtb.repository.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;

	public MovieService(MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}

	public List<Movie> getAllMovies() {

		List<Movie> movies = new ArrayList<>();
		movieRepository.findAll().forEach(movies::add);
		return movies;

		/*
		 * List<Movie> movies = movieRepository.findAll();
		 * 
		 * List<Movie> movies = employeeEntities.stream() .map(emp -> new
		 * Employee(emp.getId(), emp.getFirstName(), emp.getLastName(),
		 * emp.getEmailId())) .collect(Collectors.toList()); return employees;
		 */
	}

	public Movie getMovieById(Integer movieId) throws NotFoundException {
		return movieRepository.findById(movieId).get();// .orElseThrow(() -> new NotFoundException());
		// .orElseThrow(() -> new NotFoundException("Movie not found with id: " +
		// movieId));
	}

	public Movie getMovieByTitle(String movieName) throws NotFoundException {
		return movieRepository.findByMovieTitle(movieName);
		// .orElseThrow(() -> new NotFoundException("Movie not found with id: " + //
		// movieId));
	}

	public List<Movie> getMovieByGenre(String genre) throws NotFoundException {
		return movieRepository.findByGenre(genre);
		// .orElseThrow(() -> new NotFoundException("Movie not found with id: " + //
		// movieId));
	}

	public List<Movie> getMovieByReleaseDate(Date releaseDate) throws NotFoundException {
		return movieRepository.findByReleaseDate(releaseDate);
		// .orElseThrow(() -> new NotFoundException("Movie not found with id: " + //
		// movieId));
	}

	public Movie createMovie(Movie movie) {
		Movie newMovie = new Movie();
		BeanUtils.copyProperties(movie,newMovie);
		movieRepository.save(newMovie);
		return movie;
	}

	public Movie updateMovieById(Integer movieId, Movie updatedMovie) throws NotFoundException {
		Movie movie = getMovieById(movieId);
		movie.setMovieId(updatedMovie.getMovieId());
		movie.setMovieTitle(updatedMovie.getMovieTitle());
		movie.setGenre(updatedMovie.getGenre());
		movie.setDirector(updatedMovie.getDirector());
		movie.setDuration(updatedMovie.getDuration());
		movie.setReleaseDate(updatedMovie.getReleaseDate());
		movie.setRatingAndReview(updatedMovie.getRatingAndReview());

		return movieRepository.save(movie);
	}

	public Movie updateMovieByName(String movieName, Movie updatedMovie) throws NotFoundException {

		Movie movie = getMovieByTitle(movieName);
		movie.setMovieId(updatedMovie.getMovieId());
		movie.setMovieTitle(updatedMovie.getMovieTitle());
		movie.setGenre(updatedMovie.getGenre());
		movie.setDirector(updatedMovie.getDirector());
		movie.setDuration(updatedMovie.getDuration());
		movie.setReleaseDate(updatedMovie.getReleaseDate());
		movie.setRatingAndReview(updatedMovie.getRatingAndReview());
		return movieRepository.save(movie);
	}

	public void deleteMoviebyId(Integer movieId) throws NotFoundException {
		Movie movie = getMovieById(movieId);
		movieRepository.delete(movie);
	}

	public void deleteMoviebyName(String movieName) throws NotFoundException {
		Movie movie = getMovieByTitle(movieName);
		movieRepository.delete(movie);
	}

}
