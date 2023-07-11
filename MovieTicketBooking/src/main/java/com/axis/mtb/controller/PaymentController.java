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

import com.axis.mtb.entity.Payment;
import com.axis.mtb.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payments")
public class PaymentController {
	@Autowired
	private PaymentService paymentService;
	
	public PaymentController(PaymentService paymentService) {
		this.paymentService = paymentService;
	}


	@GetMapping("/allPayments")
	public List<Payment> getPayments() {
		return paymentService.getAllPayment();
	}

	@GetMapping("/getPaymentById/{paymentId}")
	public Payment getPaymentById(@PathVariable Integer paymentId) throws NotFoundException {
		return paymentService.getPaymentById(paymentId);
	}

	@PostMapping("/createPayment")
	// @ResponseStatus(HttpStatus.CREATED)
	public Payment createPayment(@RequestBody Payment payment) {
		return paymentService.createPayment(payment);
	}

	@PutMapping("/updatePaymentById/{paymentId}")
	public Payment updatePaymentById(@PathVariable Integer paymentId, @RequestBody Payment payment) throws NotFoundException {
		return paymentService.updatePaymentById(paymentId, payment);
	}

	@DeleteMapping("/deletePaymentById/{paymentId}")
	public void deletePaymentById(@PathVariable Integer paymentId) throws NotFoundException {
		paymentService.deletePaymentById(paymentId);
	}

}
