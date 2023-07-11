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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "movies")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "movie_id")
	private int movieId;

	@Column(name = "movie_title")
	private String movieTitle;

	@Column(name = "genre")
	private String genre;

	@Column(name = "director")
	private String director;

	@Column(name = "duration")
	private Time duration;

	@Column(name = "release_date")
	private Date releaseDate;
	/*
	 * @Column(name = "rating") private float rating;
	 * 
	 * @Column(name = "review") private String review;
	 */

	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<ShowTime> showtimes;

	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<RatingAndReview> ratingAndReview;
	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "theater_id") private Theater theater;
	 */

	public List<ShowTime> getShowtimes() {
		return showtimes;
	}



	public void setShowtimes(List<ShowTime> showtimes) {
		this.showtimes = showtimes;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public String getMovieTitle() {
		return movieTitle;
	}

	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public Time getDuration() {
		return duration;
	}

	public void setDuration(Time duration) {
		this.duration = duration;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public List<RatingAndReview> getRatingAndReview() {
		return ratingAndReview;
	}

	public void setRatingAndReview(List<RatingAndReview> ratingAndReview) {
		this.ratingAndReview = ratingAndReview;
	}

	public Movie(int movieId, String movieTitle, String genre, String director, Time duration, Date releaseDate,
			List<ShowTime> showtimes, List<RatingAndReview> ratingAndReview) {
		super();
		this.movieId = movieId;
		this.movieTitle = movieTitle;
		this.genre = genre;
		this.director = director;
		this.duration = duration;
		this.releaseDate = releaseDate;
		this.showtimes = showtimes;
		this.ratingAndReview = ratingAndReview;
	}
	
	

	public Movie(int movieId, String movieTitle, String genre, String director, Time duration, Date releaseDate) {
		super();
		this.movieId = movieId;
		this.movieTitle = movieTitle;
		this.genre = genre;
		this.director = director;
		this.duration = duration;
		this.releaseDate = releaseDate;
	}



	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", movieTitle=" + movieTitle + ", genre=" + genre + ", director="
				+ director + ", duration=" + duration + ", releaseDate=" + releaseDate + ", showtimes=" + showtimes
				+ ", ratingAndReview=" + ratingAndReview + "]";
	}

}
