import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Users;
  constructor(public router: Router, private userService: UsersService) {

    this.user = userService.currentUser;
    console.log(this.user);

  }

  ngOnInit(): void {
  }

  LogOut() {
    this.user = null;
    this.router.navigate(['']);
    console.log(this.user);
  }

}
