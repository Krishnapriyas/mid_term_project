package com.axis.mtb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.axis.mtb.entity.Seat;
import com.axis.mtb.entity.SeatSelectionRequest;
import com.axis.mtb.entity.ShowTime;
import com.axis.mtb.exception.NotFoundException;
import com.axis.mtb.repository.SeatRepository;
import com.axis.mtb.repository.ShowTimeRepository;

@Service
public class SeatService {

	@Autowired
	private SeatRepository seatRepository;

	@Autowired
	private ShowTimeRepository showRepository;

	public List<Seat> getAllSeat() {

		return seatRepository.findAll();
	}

	public Seat getSeatById(Integer seatId) throws NotFoundException {
		return seatRepository.findById(seatId).orElseThrow(() -> new NotFoundException("Seat not found"));
	}

	public Seat createSeat(Seat seat) {
		return seatRepository.save(seat);
	}

	public Seat updateSeatById(Integer seatId, Seat updatedSeat) throws NotFoundException {
		Seat seat = getSeatById(seatId);
		seat.setSeatId(updatedSeat.getSeatId());
		seat.setSeatNo(updatedSeat.getSeatNo());
		seat.setBooked(updatedSeat.isBooked());
		seat.setShowTime(updatedSeat.getShowTime());
		seat.setSelected(updatedSeat.isSelected());
		return seatRepository.save(seat);
	}

	public void deleteSeatById(Integer seatId) throws NotFoundException {
		Seat seat = getSeatById(seatId);
		seatRepository.delete(seat);

	}

	public ShowTime getShowTimeByShowId(int showId) throws NotFoundException {
		Seat seat = seatRepository.findByShowTime_Id(showId);
		if (seat != null) {
			return seat.getShowTime();
		} else {
			// Handle the case when no seat is found for the given showId
			throw new NotFoundException("ShowTime not found for showId: " + showId);
		}
	}

	public boolean selectSeats(Integer showId, SeatSelectionRequest seatSelectionRequest) throws NotFoundException {
		// Fetch movie and theater details from the database
		// List<Seat> seat = seatRepository.findByShowTime_Id(showId);
		// Theater theater = theaterRepository.findById(theaterId);

		// Check if movie and theater exist
		ShowTime show = getShowTimeByShowId(showId);

		if (show == null) {
			return false;
		}

		// Movie or theater not found

		// Perform seat selection logic
		List<String> selectedSeats = seatSelectionRequest.getSelectedSeats();

		for (String seatNumber : selectedSeats) {
			Seat seat = show.getSeatByNumber(seatNumber);

			// Check if seat exists and is available
			if (seat == null || !seat.isBooked()) {
				return false; // Seat not found or already taken
			}

			// Update seat status as selected
			seat.setSelected(true);
			seatRepository.save(seat);
			// show.setSeats(seat);
		}

		// Perform any other necessary operations (e.g., updating the user's seat
		// selection in the database)

		return true; // Seats selected successfully
	}

}
