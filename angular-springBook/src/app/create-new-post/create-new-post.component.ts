import { Component, Input, Output, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Users } from '../users';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})

export class CreateNewPostComponent implements OnInit {

  post: Post = new Post();
  submitted = false;
  user: Users=this._service.currentUser;

  constructor(private pServ: PostService, private _service:UsersService, private router: Router) {
    this.user=_service.currentUser;
    this.post.users=this.user;
   }

  ngOnInit(): void {
    console.log("on init: " + this.user);
    console.log("id: "+ this.user.userId);
    console.log("post user: "+this.post.users);
    console.log("post user id: " +this.post.users.userId);

  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }

  save() {
    this.pServ.newPost(this.post).subscribe(
      data => {
        console.log(data)
      },
      error => console.log(error))
  }

  createNewPost() {
    this.submitted = true;
    this.post.likes = 0;
    this.post.users=Object(this._service.currentUser);
    this.save();
  }
}
