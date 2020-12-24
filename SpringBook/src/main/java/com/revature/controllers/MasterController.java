package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Users;
import com.revature.services.PostService;
import com.revature.services.UsersService;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/springbook")
public class MasterController {
	@Autowired
	private UsersService uService;
	@Autowired
	private PostService pService;
	
	@PostMapping(value="/registeruser")// in angular call this when user submit the form
	public Users registerUser(@RequestBody Users users) throws Exception {
		Users userObj=null;
		userObj=uService.saveUser(users);
		return userObj;	
	}
	
	@PostMapping(value="/login")
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
	@GetMapping("/{firstName}")
	public List<Users> searchByFirstName(@PathVariable String firstName) {
		return uService.getUsersByFirstName(firstName);
	}

}

