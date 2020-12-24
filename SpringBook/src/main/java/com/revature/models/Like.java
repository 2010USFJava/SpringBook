package com.revature.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Like {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int likeId;
	private int userId;
	private int postId;
	

}
