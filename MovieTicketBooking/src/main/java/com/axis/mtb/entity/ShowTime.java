package com.axis.mtb.entity;

import java.sql.Date;
import java.sql.Time;
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
@Table(name = "show_time")
public class ShowTime {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@ManyToOne
	@JoinColumn(name = "movie_id")
	private Movie movie;

	@ManyToOne
	@JoinColumn(name = "theater_id")
	private Theater theater;

	@Column(name = "show_date")
	private Date showDate;

	@Column(name = "show_time")
	private Time startTime;

	/*
	 * @Column(name = "available_seats") private int availableSeats;
	 */
	@OneToMany(mappedBy = "showTime", cascade = CascadeType.ALL)
	private List<Seat> seats;

	@OneToMany(mappedBy = "showTime", cascade = CascadeType.ALL)
	private List<BookingHistory> bookings;

	public Theater getTheater() {
		return theater;
	}

	public void setTheater(Theater theater) {
		this.theater = theater;
	}

	public List<BookingHistory> getBookings() {
		return bookings;
	}

	public void setBookings(List<BookingHistory> bookings) {
		this.bookings = bookings;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	/*
	 * public Theater getTheater() { return theater; }
	 * 
	 * public void setTheater(Theater theater) { this.theater = theater; }
	 */

	public Date getShowDate() {
		return showDate;
	}

	public void setShowDate(Date showDate) {
		this.showDate = showDate;
	}

	public Time getStartTime() {
		return startTime;
	}

	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	
	

	public ShowTime() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ShowTime(int id, Movie movie, Theater theater, Date showDate, Time startTime,
			List<BookingHistory> bookings) {
		super();
		this.id = id;
		this.movie = movie;
		this.theater = theater;
		this.showDate = showDate;
		this.startTime = startTime;

		this.bookings = bookings;
	}

	@Override
	public String toString() {
		return "ShowTime [id=" + id + ", movie=" + movie + ", theater=" + theater + ", showDate=" + showDate
				+ ", startTime=" + startTime + ", seats=" + seats + ", bookings=" + bookings + "]";
	}

	public List<Seat> getSeats() {
		return seats;
	}

	public void setSeats(List<Seat> seats) {
		this.seats = seats;
	}

	public ShowTime(int id, Movie movie, Theater theater, Date showDate, Time startTime, List<Seat> seats,
			List<BookingHistory> bookings) {
		super();
		this.id = id;
		this.movie = movie;
		this.theater = theater;
		this.showDate = showDate;
		this.startTime = startTime;
		this.seats = seats;
		this.bookings = bookings;
	}
	
	public Seat getSeatByNumber(String seatNumber) {
        for (Seat seat : seats) {
            if (seat.getSeatNo().equals(seatNumber)) {
                return seat;
            }
        }
        return null; // Seat not found
    }
	

}