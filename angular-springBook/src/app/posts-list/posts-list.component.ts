import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { UploadFileService } from '../upload-file.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;
  displayPosts: Observable<Post[]>;
  user: Users;

  constructor(private postService: PostService, private usersService: UsersService, private UploadFileService:UploadFileService, private router:Router) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
    console.log("try to view post");
    this.postService.getAllPosts().subscribe(val => console.log(val));
  }

  // getPosts(): void {
  //   this.postService.getAllPosts().subscribe(posts => this.posts =  posts);
  //   console.log("try to view post");
  //   this.postService.getAllPosts().subscribe(val => console.log(val));
  // }

  postDetails(pid:number) {
    this.router.navigate(['details', pid]);
  }

}
