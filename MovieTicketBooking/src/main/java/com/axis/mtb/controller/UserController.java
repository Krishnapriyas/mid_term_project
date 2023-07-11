package com.axis.mtb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.mtb.entity.User;
import com.axis.mtb.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@GetMapping("/allUsers")			//verified
	public List<User> getUsers() {
		return userService.getAllUser();
	}

	@GetMapping("/getUserById/{userId}")	//verified
	public User getUserById(@PathVariable Integer userId) throws NotFoundException {
		return userService.getUserById(userId);
	}

	@GetMapping("/getUserByName/{userName}")	//verified
	public User getUserByName(@PathVariable String userName) throws NotFoundException {
		return userService.getUserByName(userName);
	}

	@PostMapping("/createUser")			//verified
	// @ResponseStatus(HttpStatus.CREATED)
	public User createUser(@RequestBody User user) throws NotFoundException {
		return userService.createUser(user);
		//throw new IllegalArgumentException("User not found: " + user.getName());
	}

	@PutMapping("/updateUserById/{userId}")		//verified
	public User updateUserById(@PathVariable Integer userId, @RequestBody User user) throws NotFoundException {
		return userService.updateUserById(userId, user);
	}

	@PutMapping("/updateUserByName/{userName}")	//verified
	public User updateUserByName(@PathVariable String userName, @RequestBody User user) throws NotFoundException {
		return userService.updateUserByName(userName, user);
	}

	@DeleteMapping("/deleteUserById/{userId}")	//verified
	public void deleteUserById(@PathVariable Integer userId) throws NotFoundException {
		userService.deleteUserById(userId);
	}

	@DeleteMapping("/deleteUserByName/{userName}")	//verified
	public void deleteUserByName(@PathVariable String userName) throws NotFoundException {
		userService.deleteUserByName(userName);
	}

	@PostMapping("/register")	//verified
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		try {
			userService.registerUser(user.getName(), user.getPassword(),user.getEmailId(),user.getIdentity());
			return ResponseEntity.ok("User registered successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PostMapping("/login")		//verified
	public ResponseEntity<String> loginUser(@RequestBody User user) {
		try {
			userService.loginUser(user.getName(), user.getPassword());
			return ResponseEntity.ok("User logged in successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}

}
