package com.axis.mtb.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.ShowTime;

@Repository
public interface ShowTimeRepository extends JpaRepository<ShowTime, Integer> {

	Optional<ShowTime> findById(Integer id);

	List<ShowTime> findByTheater_TheaterId(Integer theaterId);

	List<ShowTime> findByMovie_MovieId(Integer movieId);

	//List<ShowTime> findByTheaterName_TheatreName(String theaterName);

	
	//List<ShowTime> findByMovieName_MovieName(String movieName);


}