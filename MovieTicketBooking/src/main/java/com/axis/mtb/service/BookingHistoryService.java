package com.axis.mtb.service;

import java.sql.Time;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.axis.mtb.entity.BookingHistory;
import com.axis.mtb.repository.BookingHistoryRepository;

@Service
public class BookingHistoryService {

	@Autowired
	private BookingHistoryRepository bookingHistoryRepository;

	public List<BookingHistory> getAllBookingHistory() {

		return bookingHistoryRepository.findAll();
	}

	public BookingHistory getBookingHistoryById(Integer bookingHistoryId) throws NotFoundException {
		return bookingHistoryRepository.findById(bookingHistoryId).orElseThrow(() -> new NotFoundException());
	}

	public BookingHistory createBooking(BookingHistory bookinghistory) {
		return bookingHistoryRepository.save(bookinghistory);
	}

	public BookingHistory updateBookingById(Integer bookingHistoryId, BookingHistory updatedBookinghistory)
			throws NotFoundException {
		BookingHistory bookingHistory = getBookingHistoryById(bookingHistoryId);
		bookingHistory.setBookingId(updatedBookinghistory.getBookingId());
		bookingHistory.setUser(updatedBookinghistory.getUser());
		bookingHistory.setShowTime(updatedBookinghistory.getShowTime());
		bookingHistory.setBookingDate(updatedBookinghistory.getBookingDate());
		bookingHistory.setTotalAmount(updatedBookinghistory.getTotalAmount());
		bookingHistory.setPayments(updatedBookinghistory.getPayments());

		return bookingHistoryRepository.save(bookingHistory);
	}

	public void deleteBookingById(Integer bookingHistoryId) throws NotFoundException {
		BookingHistory bookingHistory = getBookingHistoryById(bookingHistoryId);
		bookingHistoryRepository.delete(bookingHistory);

	}

	public boolean cancelTicket(int bookingHistoryId) throws NotFoundException {
		BookingHistory bookingHistory = getBookingHistoryById(bookingHistoryId);

		if (bookingHistory == null) {
			// Ticket does not exist
			return false;
		}

		// Check the cancellation policy of the theater
		if (!isCancellationAllowed(bookingHistory)) {
			// Ticket cancellation not allowed as per theater's policy
			return false;
		}

		// Perform ticket cancellation
		boolean cancellationSuccessful = performCancellation(bookingHistory);
		if (cancellationSuccessful) {
			// Update the ticket status as cancelled in the database
			deleteBookingById(bookingHistory.getBookingId());
		}

		return cancellationSuccessful;
	}

	private boolean isCancellationAllowed(BookingHistory bookingHistory) {

		// Allow cancellation until 2 hours before the show
		LocalTime currentDateTime = LocalTime.now();
		Time showTime = bookingHistory.getShowTime().getStartTime();
		LocalTime localShowTime = showTime.toLocalTime();
		LocalTime cancellationDeadline = localShowTime.minusHours(2);

		return currentDateTime.isBefore(cancellationDeadline);
	}

	private boolean performCancellation(BookingHistory bookingHistory) throws NotFoundException {

		// mark ticket as canceled
		// refund payment
		return true; // Ticket cancellation successful
	}
}
