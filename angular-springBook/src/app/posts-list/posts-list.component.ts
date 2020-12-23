import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Post } from '../post';
import { CreatePostService } from '../create-post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  //posts: Post[];
  constructor() {private postService: CreatePostService}

  ngOnInit(): void {
    

  }

}
