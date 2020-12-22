package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Users;
import com.revature.services.PostService;
import com.revature.services.UsersService;

@CrossOrigin(origins ="http://localhost:4102")
@RestController
@RequestMapping("/springbook")
public class MasterController {
	@Autowired
	private UsersService uService;
	@Autowired
	private PostService pService;
	
	@PostMapping("/registeruser")// in angular call this when user submit the form
	public Users registerUser(@RequestBody Users users) throws Exception {
		
		String tempEmail = users.getEmail();
			if(tempEmail != null && "".equalsIgnoreCase(tempEmail)) {
				Users userObj=uService.getUserByEmail(tempEmail);
				if(userObj !=null) {
					throw new Exception("This Email"+tempEmail+"already exist in Database");
					//before save in to the DB we have to check this email already is there or not.
				}
			}
		
		Users userObj=null;
		userObj=uService.saveUser(users);
		return userObj;
		
	}
	
	@PostMapping("/login")
	
	public Users loginUser(@RequestBody Users users) throws Exception {
		
		String tempEmail =users.getEmail();
		String tempPass= users.getPassWord();
		Users userObj= null;
		if(tempEmail !=null && tempPass != null) {
			
			userObj=uService.getUserByEmailAndPassword(tempEmail, tempPass);
		}
		if(userObj==null) {
			throw new Exception("User Does not Exited");
		}
		return userObj;
	}

}

