package com.revature.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor

@Entity
@Table(name ="post")
public class Post {
	@Id
	@Column(name="post_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int postId;
	@JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = { CascadeType.ALL})
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;
	@Column(name="image_url")
	private String imageUrl;
	@Column(name="caption")
	private String caption;
	@Column(name="like_num")
	private int like_num;
	// @OneToMany(mappedBy = "postId", fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
	//private List<Like>likes;
	
    

}
