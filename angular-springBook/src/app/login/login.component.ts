import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UsersService } from '../users.service';
import {Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 users =new Users();  

  constructor(private _service : UsersService) { }

  ngOnInit(): void {
  }
  loginUser(){
    
   this._service.loginUserFormRemote(this.users).subscribe(
   data => console.log("Responce recived"),
   error => console.log("error")
   )

  }
  
}
