import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Users;
  constructor(public router: Router, private userService : UsersService,
    private loginComp: LoginComponent) {
   }

  ngOnInit(): void {
  }

  currentUser() {
    this.userService.currentUser = this.loginComp.result;
    console.log(this.loginComp.result);
    this.router.navigateByUrl('/profile');
  }

}
