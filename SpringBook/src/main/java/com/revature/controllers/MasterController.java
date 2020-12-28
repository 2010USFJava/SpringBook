package com.revature.controllers;

import java.io.ByteArrayOutputStream;
import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.revature.models.Post;
import com.revature.models.Users;
import com.revature.repos.PostsRepo;
import com.revature.repos.UsersRepo;
import com.revature.services.PostService;
import com.revature.services.S3Services;
import com.revature.services.UsersService;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/springbook")
public class MasterController {

	private UsersService uService;
	private PostService pService;
	private S3Services s3Services;

	@Autowired
	private UsersRepo uRepo;
	@Autowired
	private PostsRepo pRepo;

	@Autowired
	public MasterController(UsersService usService, PostService pService, S3Services s3Services) {
		this.uService = usService;
		this.pService = pService;
		this.s3Services = s3Services;
	}

	@GetMapping("/firstname/{firstName}")
	public List<Users> searchByFirstName(@PathVariable String firstName) {
		System.out.println("in mas");
		return uService.getUsersByFirstName(firstName);
	}

	@GetMapping("/users")
	public List<Users> getAll() {
		return (List<Users>) uRepo.findAll();
	}
  
	@GetMapping(value = "/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Users findByEmail(String email) {
		return this.uService.getUserByEmail(email);
	}
	
	@GetMapping("/api/file/{keyname}")
	  public ResponseEntity<byte[]> downloadFile(@PathVariable String keyname) {
	    ByteArrayOutputStream downloadInputStream = s3Services.downloadFile(keyname);
	  
	    return ResponseEntity.ok()
	          .contentType(contentType(keyname))
	          .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\"" + keyname + "\"")
	          .body(downloadInputStream.toByteArray());  
	  }
	  
//	  /*
//	   * List ALL Files
//	   */
//	  @GetMapping("/api/file/all")
//	  public List<String> listAllFiles(){
//	    return s3Services.listFiles();
//	  }
	  
	  private MediaType contentType(String keyname) {
	    String[] arr = keyname.split("\\.");
	    String type = arr[arr.length-1];
	    switch(type) {
	      case "txt": return MediaType.TEXT_PLAIN;
	      case "png": return MediaType.IMAGE_PNG;
	      case "jpg": return MediaType.IMAGE_JPEG;
	      default: return MediaType.APPLICATION_OCTET_STREAM;
	    }
	  }

	@PostMapping(value = "/registeruser") // in angular call this when user submit the form
	public Users registerUser(@Valid @RequestBody Users users) {
		Users addUsers = uService.saveUser(users);
		return addUsers;
	}


	@PostMapping(value = "/login")
	public Users loginUser(@Valid @RequestBody Users users) throws Exception {
		System.out.println(users.getEmail());
		System.out.println(users.getPassWord());
		List<Users> uList = getAll();
		Users user = new Users();
		Iterator<Users> iterator = uList.iterator();
		while (iterator.hasNext()) {
			System.out.println(uList.iterator());
			user = iterator.next();
			if (user.getEmail().equals(users.getEmail()) && user.getPassWord().equals(users.getPassWord())) {
				return user;
			}
		}
		throw new Exception("Not Found");
	}


	@PutMapping(value="/createPost")
	public Post newPost(@Valid @RequestBody Post post) throws Exception{
		System.out.println(post);
		post.getUsers().getUserId();
		System.out.println(post.getUsers().getUserId());
		return pService.savePost(post);
	}
	
	@GetMapping(value="/getAllPosts")
	public List<Post> getAllPosts(){
		return pService.getAll();
	}
	
	@GetMapping(value="/getPostById/{id}" , produces=MediaType.APPLICATION_JSON_VALUE) 
	public List<Post> findPostByUserId(int id){
		return pService.findPostByUser_id(id);
	}

	@PostMapping("/updateprofile")
	public Users updateProfile(@RequestBody Users users) {
		Users updatedUsers = null;
		if (users.getFirstName() != null && users.getLastName() != null) {
			updatedUsers = uService.updateProfile(users);
		}
		if (updatedUsers == null) {
			System.out.println("User does not exist.");
		}
		return updatedUsers;
	}
	
	@PostMapping("/api/file/upload")
    public String uploadMultipartFile(@RequestParam("file") MultipartFile file) {
      String keyName = file.getOriginalFilename();
    s3Services.uploadFile(keyName, file);
    return "https://springbookbucket-sm.s3.us-east-2.amazonaws.com" + "/" + keyName;

    }
}
