package com.axis.mtb.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.Theater;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Integer> {

	Optional<Theater> findById(Integer theaterId);

	List<Theater> findByLocation(String location);

	//List<Theater> findByMovie_MovieId(Integer movieId);

	List<Theater> findByShowTime_Movie_MovieTitle(String movieTitle);

	Optional<Theater> findByTheaterName(String theaterName);

	//List<Theater> findByShowId(Integer showId);

	//List<Theater> findByShowDate(Date showDate);

	//List<Theater> findByMovie(Integer movieId);

	//List<Theater> findByAmenitiesName(String amenityName);

	// Optional<Movie> findByAmenities(String amenities);
	
	//List<Theater> findByMovieSelection(String movieTitle);

	// Additional custom query methods if needed

}
