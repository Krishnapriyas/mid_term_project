package com.axis.mtb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.axis.mtb.entity.ShowTime;
import com.axis.mtb.repository.ShowTimeRepository;

@Service
public class ShowTimeService {

	@Autowired
	private ShowTimeRepository showTimeRepository;

	public List<ShowTime> getAllShowTime() {

		return showTimeRepository.findAll();
	}

	public ShowTime getShowTimeById(Integer id) throws NotFoundException {
		return showTimeRepository.findById(id).orElseThrow(() -> new NotFoundException());
	}

	public List<ShowTime> getShowTimeByTheaterId(Integer theaterId) {
		return showTimeRepository.findByTheater_TheaterId(theaterId);
	}

	public List<ShowTime> getShowTimeByMovieId(Integer movieId) {
		return showTimeRepository.findByMovie_MovieId(movieId);
	}

	/*
	 * public List<ShowTime> getShowTimeByTheaterName(String theaterName) { return
	 * showTimeRepository.findByTheaterName_TheatreName(theaterName); }
	 */

	/*
	 * public List<ShowTime> getShowTimeByMovieName(String movieName) {
	 * 
	 * return showTimeRepository.findByMovieName_MovieName(movieName); }
	 */
	public ShowTime createShowTime(ShowTime showTime) {
		return showTimeRepository.save(showTime);
	}

	public ShowTime updateShowTimeById(Integer id, ShowTime updatedShowTime) throws NotFoundException {
		ShowTime showTime = getShowTimeById(id);
		showTime.setId(updatedShowTime.getId());
		showTime.setMovie(updatedShowTime.getMovie());
		showTime.setBookings(updatedShowTime.getBookings());
		showTime.setSeats(updatedShowTime.getSeats());
		showTime.setShowDate(updatedShowTime.getShowDate());
		showTime.setStartTime(updatedShowTime.getStartTime());
		showTime.setTheater(updatedShowTime.getTheater());

		return showTimeRepository.save(showTime);
	}

	public void deleteShowTimeById(Integer id) throws NotFoundException {
		ShowTime showTime = getShowTimeById(id);
		showTimeRepository.delete(showTime);

	}
}
