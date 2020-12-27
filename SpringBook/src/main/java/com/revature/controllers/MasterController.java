package com.revature.controllers;

import java.util.Iterator;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.models.Post;
import com.revature.models.Users;
import com.revature.repos.PostsRepo;
import com.revature.repos.UsersRepo;
import com.revature.services.PostService;
import com.revature.services.UsersService;

@CrossOrigin(origins ="http://localhost:4200", allowCredentials ="true")
@RestController
@RequestMapping("/springbook")
public class MasterController {
	
	private UsersService uService;
	private PostService pService;
	
	@Autowired
	private UsersRepo uRepo;
	@Autowired
	private PostsRepo pRepo;
	
	@Autowired
	public MasterController(UsersService usService, PostService pService) {
		this.uService=usService;
		this.pService=pService;
	}
	
	@GetMapping("/firstname/{firstName}")
	public List<Users> searchByFirstName(@PathVariable String firstName) {
		System.out.println("in mas");
		return uService.getUsersByFirstName(firstName);
	}

	@GetMapping("/users")
	public List<Users> getAll(){
		return (List<Users>) uRepo.findAll();
	}
	
	@GetMapping(value="/{email}" , produces=MediaType.APPLICATION_JSON_VALUE) 
	public Users findByEmail(String email){
		return this.uService.getUserByEmail(email);
	}
	
	@PostMapping(value ="/registeruser")// in angular call this when user submit the form
     public Users registerUser( @Valid @RequestBody Users users) {
		Users addUsers = uService.saveUser(users);
		return addUsers;	
	}
	
	@PostMapping(value ="/login")
    public Users loginUser(@Valid @RequestBody Users users) throws Exception{
		System.out.println(users.getEmail());
		System.out.println(users.getPassWord());
		List <Users> uList = getAll();
		Users user = new Users();
		Iterator<Users> iterator = uList.iterator();
		while(iterator.hasNext()) {
			System.out.println(uList.iterator());
		user = iterator.next();
		if(user.getEmail().equals(users.getEmail()) && user.getPassWord().equals(users.getPassWord())) {
			     return user;
		}
	 }
		throw new Exception("Not Found");
	}		
	
	@PutMapping(value="/")
	public Post newPost(@Valid @RequestBody Post post) throws Exception{
		Post newPost = pService.savePost(post);
		return newPost;
	}
	
	@PostMapping("/updateprofile")
	public Users updateProfile(@RequestBody Users users) {
		Users updatedUsers = null;
		if(users.getFirstName() != null && users.getLastName() != null) {
			updatedUsers = uService.updateProfile(users);
		}
		if(updatedUsers == null) {
			System.out.println("User does not exist.");
		}
		return updatedUsers;
	}
}


