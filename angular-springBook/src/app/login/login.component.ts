import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UsersService } from '../users.service';
import {Users } from '../users';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email :string;
 passWord : string;
 users =new Users();
 msg='';  

  constructor(private _service : UsersService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    
   this._service.loginUserFormRemote(this.users.email, this.users.passWord).subscribe(
   data =>{
    console.log("Response recived");
    this._router.navigate(['/viewfeed']);
   },

   error =>{
    console.log("error")
    this.msg='Bad try,please enter valid email and password';
   }
   )
    
  }
  
}
