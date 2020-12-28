import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { UsersService } from '../users.service';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  pid : number;
  post : Post;
  key : string;
  id : number;

  constructor(private route:ActivatedRoute, private postService: PostService, private usersService: UsersService, 
              private uploadFileService: UploadFileService, private router: Router) { 

  }

  ngOnInit(): void {
    this.post = new Post();
    this.getUser;
    this.pid = this.route.snapshot.params['pid'];
    this.postService.getPostsById(this.pid).subscribe(data =>{
      console.log(data);
      this.post = data;
      this.post.image_url = this.key;
      //this.getFilesFromS3();
    }, error => console.log(error));
  }

  // getFilesFromS3(){
  //   this.uploadFileService.getFiles(this.key).subscribe(data =>{
  //     console.log(data);
      
  //     this.list();
  //   })
  // }

  list(){
    this.router.navigate(['post']);
  }

  getUser(){
    this.usersService.getUserById(this.id).subscribe(data =>{
      console.log(data);
      this.post.users = data;  
    },
    error => console.log(error));
  }

}
