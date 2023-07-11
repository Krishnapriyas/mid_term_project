package com.axis.mtb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.mtb.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	Optional<User> findById(Integer userId);

	boolean existsByName(String name);

	boolean existsByEmailId(String emailId);

	//User findByName(String username);

	Optional<User> findByName(String userName);
	
	/*
	 * User findByUsername(String username); 
	 * boolean existsByUsername(String username);
	 */

}
