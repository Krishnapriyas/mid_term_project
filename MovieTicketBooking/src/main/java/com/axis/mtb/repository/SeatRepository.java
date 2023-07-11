package com.axis.mtb.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.Seat;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {

	Optional<Seat> findById(Integer seatId);

	Seat findByShowTime_Id(Integer Id);

}
