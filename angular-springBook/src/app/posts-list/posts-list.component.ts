import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPosts().subscribe(posts => this.posts =  posts);
    console.log("try to view post");
    this.postService.getAllPosts().subscribe(val => console.log(val));
  }

}
