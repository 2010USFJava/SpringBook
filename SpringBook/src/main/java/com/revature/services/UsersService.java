package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Users;
import com.revature.repos.UsersRepo;

@Service
public class UsersService {

	private UsersRepo repo;
	
	@Autowired
	public UsersService(UsersRepo repo) {
	      this.repo=repo;
	}

	
	public Users saveUser(Users users) {
		return repo.save(users);
		//take input form user and save to the database(register new user)
		
	}
	public Users getUserByEmail(String email) {
		
		return repo.findByEmail(email);
		//we are getting user by email
	}
public Users getUserByEmailAndPassword(String email, String passWord) {
		
		return repo.findByEmailAndPassword(email, passWord);
	}
	
	
	

}
