package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Post;
import com.revature.repos.PostsRepo;

@Service
public class PostService {
private PostsRepo pRepo;
	
	@Autowired
	public PostService(PostsRepo repo) {
	      this.pRepo=repo;
	}
	
	@Transactional(readOnly=true, isolation=Isolation.READ_COMMITTED)
	public List<Post>getAll(){
		return (List<Post>) pRepo.findAll();
		
	}
	
	@Transactional
	public Post savePost(Post post) {//create a new post
		System.out.println("in post service");
		return pRepo.save(post);
	}
	
	@Transactional(readOnly=true, isolation=Isolation.READ_COMMITTED)
	public List<Post> findPostByUser_id(int id) {
		return pRepo.findByUser_id(id);
	}

}
