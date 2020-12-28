import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UsersService } from '../users.service';
import {Users } from '../users';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email :string;
 passWord : string;
 users = new Users();
 result : Users;
 msg='';  

  constructor(public _service : UsersService, private _route: ActivatedRoute, 
    private _router: Router) {}

  ngOnInit(): void {
  }
  loginUser(){
    
   this._service.loginUserFormRemote(this.users.email, this.users.passWord).subscribe(
   data =>{
     this.result=data;
     console.log(this.result);
     console.log("Response recived");
     this._service.currentUser= this.result;
     console.log(this._service.currentUser);
     this._router.navigate(['/viewfeed']);
   },

   error =>{
    console.log("error")
    this.msg='Bad try,please enter valid email and password';
   }
   )
    
  }
  
}
