package com.axis.mtb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "ratings")
public class RatingAndReview {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rating_id")
	private int ratingId;

	@Column(name = "rating")
	private float rating;

	@Column(name = "review")
	private String review;
	
	@ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getRatingId() {
		return ratingId;
	}

	public void setRatingId(int ratingId) {
		this.ratingId = ratingId;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}


	public RatingAndReview(int ratingId, float rating, String review, Movie movie, User user) {
		super();
		this.ratingId = ratingId;
		this.rating = rating;
		this.review = review;
		this.movie = movie;
		this.user = user;
	}

	public RatingAndReview() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "RatingAndReview [ratingId=" + ratingId + ", rating=" + rating + ", review=" + review + ", movie="
				+ movie + "]";
	}
	
	
	
	
}