package com.axis.mtb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer>{

	Optional<Payment> findById(Integer paymentId);

}
