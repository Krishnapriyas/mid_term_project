package com.axis.mtb.entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "bookings")
public class BookingHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "booking_id")
	private int bookingId;

	//@Column(name = "customer_id")
	//private int customerId;

	//@Column(name = "show_id")
	//private int showId;

	@Column(name = "booking_date")
	private Date bookingDate;

	@Column(name = "total_amount")
	private float totalAmount;

	//@Column(name = "payment_method")
	//private String paymentMethod;

	@ManyToOne
    @JoinColumn(name = "customer_id")
    private User user;
	
	@ManyToOne
	@JoinColumn(name = "show_id")
	private ShowTime showTime;
	
	@OneToMany(mappedBy = "bookingHistory", cascade = CascadeType.ALL)
	private List<Payment> payments;

	
	//private List<Seat> seatsBooked;
	//private BookingStatus bookingStatus;
	
	
	
	public int getBookingId() {
		return bookingId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ShowTime getShowTime() {
		return showTime;
	}

	public void setShowTime(ShowTime showTime) {
		this.showTime = showTime;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public float getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(float totalAmount) {
		this.totalAmount = totalAmount;
	}




	public BookingHistory(int bookingId, Date bookingDate, float totalAmount, User user, ShowTime showTime,
			List<Payment> payments) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.totalAmount = totalAmount;
		this.user = user;
		this.showTime = showTime;
		this.payments = payments;
	}

	public BookingHistory() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "BookingHistory [bookingId=" + bookingId + ", bookingDate=" + bookingDate + ", totalAmount="
				+ totalAmount + ", user=" + user + ", showTime=" + showTime + ", payments=" + payments + "]";
	}


	

}
