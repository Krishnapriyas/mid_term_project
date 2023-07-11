package com.axis.mtb.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;





@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "customer_id")
	private int customerId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "Identity")
	private char identity;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<BookingHistory> bookings;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<RatingAndReview> ratings;

	
	public List<RatingAndReview> getRatings() {
		return ratings;
	}

	public void setRatings(List<RatingAndReview> ratings) {
		this.ratings = ratings;
	}

	public List<BookingHistory> getBookings() {
		return bookings;
	}

	public void setBookings(List<BookingHistory> bookings) {
		this.bookings = bookings;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public char getIdentity() {
		return identity;
	}

	public void setIdentity(char identity) {
		this.identity = identity;
	}



	public User(int customerId, String name, String password, String emailId, char identity) {
		super();
		this.customerId = customerId;
		this.name = name;
		this.password = password;
		this.emailId = emailId;
		this.identity = identity;
	}

	public User(String name, String password, String emailId, char identity) {
		super();
		this.name = name;
		this.password = password;
		this.emailId = emailId;
		this.identity = identity;
	}

	public User(int customerId, String name, String password, String emailId, char identity,
			List<BookingHistory> bookings) {
		super();
		this.customerId = customerId;
		this.name = name;
		this.password = password;
		this.emailId = emailId;
		this.identity = identity;
		this.bookings = bookings;
	}

	
	public User(int customerId, String name, String password, String emailId, char identity,
			List<BookingHistory> bookings, List<RatingAndReview> ratings) {
		super();
		this.customerId = customerId;
		this.name = name;
		this.password = password;
		this.emailId = emailId;
		this.identity = identity;
		this.bookings = bookings;
		this.ratings = ratings;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "User [customerId=" + customerId + ", name=" + name + ", password=" + password + ", emailId=" + emailId
				+ ", identity=" + identity + ", bookings=" + bookings + "]";
	}
	
	

	
}
	
	
