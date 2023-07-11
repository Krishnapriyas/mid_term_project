package com.axis.mtb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.axis.mtb.entity.Payment;
import com.axis.mtb.repository.PaymentRepository;

@Service
public class PaymentService {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	public List<Payment> getAllPayment() {

		return paymentRepository.findAll();
	}

	public Payment getPaymentById(Integer paymentId) throws NotFoundException {
		return paymentRepository.findById(paymentId).orElseThrow(() -> new NotFoundException());
	}

	public Payment createPayment(Payment payment) {
		return paymentRepository.save(payment);
	}

	public Payment updatePaymentById(Integer paymentId, Payment updatedPayment) throws NotFoundException {
		Payment payment = getPaymentById(paymentId);
		payment.setPaymentId(updatedPayment.getPaymentId());
		payment.setAmount(updatedPayment.getAmount());
		payment.setPaymentMethod(updatedPayment.getPaymentMethod());
		payment.setBookingHistory(updatedPayment.getBookingHistory());
		
		return paymentRepository.save(payment);
	}

	public void deletePaymentById(Integer paymentId) throws NotFoundException {
		Payment payment = getPaymentById(paymentId);
		paymentRepository.delete(payment);
		
	}

}
