package com.axis.mtb.entity;

import java.util.List;


public class SeatSelectionRequest {

	
	//private int selectionId;

	
	//private User user;
	 private String userId; 
	private List<String> selectedSeats;

	public SeatSelectionRequest() {
		
	}

	public SeatSelectionRequest(String userId, List<String> selectedSeats) {
		this.userId = userId;
		this.selectedSeats = selectedSeats;
	}

	// Getters and setters

	public String getUser() {
		return userId;
	}

	public void setUser(String userId) {
		this.userId = userId;
	}

	public List<String> getSelectedSeats() {
		return selectedSeats;
	}

	public void setSelectedSeats(List<String> selectedSeats) {
		this.selectedSeats = selectedSeats;
	}

	
	
}
