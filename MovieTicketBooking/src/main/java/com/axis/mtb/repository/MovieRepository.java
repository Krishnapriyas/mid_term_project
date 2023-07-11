package com.axis.mtb.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

	Optional<Movie> findById(Integer movieId);
	List<Movie> findByGenre(String genre);
	
	Movie findByMovieTitle(String movieTitle);
	List<Movie> findByReleaseDate(Date releadeDate);
	

	// Additional custom query methods if needed

}