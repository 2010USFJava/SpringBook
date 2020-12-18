package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Post;



@Repository
public interface PostsRepo extends CrudRepository<Post,Integer>{

}

