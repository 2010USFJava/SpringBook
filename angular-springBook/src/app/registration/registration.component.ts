import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import {NgForm} from '@angular/forms';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  users= new Users();
  msg='';
  submitted = false;
  constructor(private _service : UsersService, private _router: Router ) { }

  ngOnInit(): void {
  }
  newLogin(): void {
    this.submitted = false;
  }
  newUser(): void {
    this.submitted = false;
    this.users = new Users();
  }
  save(){
   this._service.registerUsers(this.users).subscribe(
    data =>{
      console.log("response recieved");
      this.users = new Users();
      this.msg="Registration successful"
      this._router.navigate(['/']);
    },
    error =>
      console.log("error"));
      //this.msg=error.error));
    }
    
    registerUser(){
      this.submitted = true;
      this.save();
     

    }

  }


