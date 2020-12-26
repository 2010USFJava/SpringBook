package com.revature;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.revature.models.*;
import com.revature.repos.PostsRepo;
import com.revature.repos.UsersRepo;
import com.revature.services.PostService;
import com.revature.services.UsersService;


@SpringBootTest
class SpringBookApplicationTests {
	@Autowired
	private UsersService uServ;
	@MockBean
	private UsersRepo uRepo;
	@Autowired
	private PostService pServ;
	@MockBean
	private PostsRepo pRepo;
	
	@Test
	public void getUserByFirstNameTest() {
		String firstName = "Kim";
		when(uRepo.findByFirstName(firstName)).thenReturn(Stream
				.of(new Users(1,"Kim","Smith","kimS@mail.com","pass","img.com",new ArrayList<Post>()),
						new Users(2,"Kim","Jackson","kimJ@mail.com","pass1","img1.com",new ArrayList<Post>()),
						new Users(3,"Kim","Mack","kimM@mail.com","pass2","img2.com",new ArrayList<Post>())).collect(Collectors.toList()));
		assertEquals(3, uServ.getUsersByFirstName(firstName).size());
	}
	
	@Test
	public void getUserByEmailTest() {
		String email = "kimS@mail.com";
		Users user = new Users(1,"Kim","Smith","kimS@mail.com","pass","img.com",new ArrayList<Post>());
		when(uRepo.findByEmail(email)).thenReturn(user);
		assertEquals(user, uServ.getUserByEmail(email));
	}
	
	@Test
	public void findPostByUser_idTest() {
		int user_id = 1;
		when(pRepo.findByUser_id(user_id)).thenReturn(Stream
				.of(new Post(1,  new Users(1,"Kim","Smith","kimS@mail.com","pass","img.com",new ArrayList<Post>()),"Kim", "Smith", 1,new ArrayList<Like>()),
						new Post(2, new Users(2,"Kim","Jackson","kimJ@mail.com","pass1","img1.com",new ArrayList<Post>()),"Kim","Jackson", 2,new ArrayList<Like>()),
						new Post(3, new Users(3,"Kim","Mack","kimM@mail.com","pass2","img2.com",new ArrayList<Post>()),"Kim","Mack", 3 ,new ArrayList<Like>())).collect(Collectors.toList()));
		assertEquals(3, pServ.findPostByUser_id(user_id).size());
	}
	
//	@Test
//	public void getUserByEmailAndPasswordTest() {
//		String email = "kimS@mail.com";
//		String pass = "pass";
//		Users user = new Users(1,"Kim","Smith","kimS@mail.com","pass","img.com",new ArrayList<Post>());
//		when(uRepo.findByEmailAndPassword(email, pass)).thenReturn(user);
//		assertEquals(user, uServ.getUserByEmailAndPassword(email, pass));
//	}
//	
	

}
