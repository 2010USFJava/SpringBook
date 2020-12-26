package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.revature.models.Post;



@Repository
public interface PostsRepo extends CrudRepository<Post,Integer>{
	@Query(value = "SELECT * FROM post WHERE user_id =:id", nativeQuery = true)
	public List<Post> findByUser_id(int id);
	
	//public List<Post> findAllPosts();

}

