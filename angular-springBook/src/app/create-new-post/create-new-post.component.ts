import { Component, Input, Output, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Users } from '../users';
import { NavbarComponent } from '../navbar/navbar.component';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})

export class CreateNewPostComponent implements OnInit {

  post: Post = new Post();
  submitted = false;
  user: Users = this._service.currentUser;
  selectedimage: File;
  progress: { percentage: number } = { percentage: 0 };
  currentFileUpload : File;

  constructor(private pServ: PostService, private _service: UsersService, private router: Router, private uploadServ: UploadFileService) {
    this.user = _service.currentUser;
    this.post.users = this.user;
  }

  ngOnInit(): void {
    console.log("on init: " + this.user);
    console.log("id: " + this.user.userId);
    console.log("post user: " + this.post.users);
    console.log("post user id: " + this.post.users.userId);

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

  onFileSelected(event) {
    console.log(event);
    this.selectedimage = event.target.files[0];

  }

  upload() {
    this.uploadServ.pushFileToStorage(this.selectedimage).subscribe(data => {
      this.currentFileUpload=this.selectedimage;
      this.progress.percentage=0;
      this.post.image_url = JSON.stringify(data.body);

      if (data.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * data.loaded / data.total);
      } else if (data instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log("URL: " + this.post.image_url);
        this.save();
      }
    }, error => console.log(error));
  }

  createNewPost() {
    this.submitted = true;
    this.post.likes_num = 0;
    this.post.users = Object(this._service.currentUser);
    if (this.selectedimage != null) {
      this.upload();
    } else {
      this.save();
    }
  }
}
