package com.axis.mtb.controller;

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

import com.axis.mtb.entity.BookingHistory;
import com.axis.mtb.service.BookingHistoryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bookingHistory")
public class BookingHistoryController {
	@Autowired
	private BookingHistoryService bookingHistoryService;
	
	

	public BookingHistoryController(BookingHistoryService bookingHistoryService) {
		this.bookingHistoryService = bookingHistoryService;
	}

	@GetMapping("/allBookings")
	public List<BookingHistory> getAllBookingHistory() {
		return bookingHistoryService.getAllBookingHistory();
	}

	@GetMapping("/getBookingsById/{bookingId}")
	public BookingHistory getBookingHistroyById(@PathVariable Integer bookingId) throws NotFoundException {
		return bookingHistoryService.getBookingHistoryById(bookingId);
	}
	
	@PostMapping("/createBooking")
	//@ResponseStatus(HttpStatus.CREATED)
	public BookingHistory createBooking(@RequestBody BookingHistory bookinghistory) {
		return bookingHistoryService.createBooking(bookinghistory);
	}

	@PutMapping("/updateBookingById/{bookingHistoryId}")
	public BookingHistory updateBookingById(@PathVariable Integer bookingHistoryId, @RequestBody BookingHistory bookinghistory) throws NotFoundException {
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

}
