package com.axis.mtb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.BookingHistory;

@Repository
public interface BookingHistoryRepository extends JpaRepository<BookingHistory, Integer> {

	Optional<BookingHistory> findById(Integer bookingId);

	//List<BookingHistory> 

	
}
