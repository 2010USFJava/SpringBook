package com.revature.services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.revature.repos.PostsRepo;

@Service
public class PostService {
private PostsRepo repo;
	
	@Autowired
	public PostService(PostsRepo repo) {
	      this.repo=repo;
	}
	

}
