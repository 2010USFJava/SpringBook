import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Users;
  constructor(private userService: UsersService) { 
    this.user = this.userService.currentUser;
    console.log("trying to view profile");
  }

  ngOnInit(): void {
    
  }

}
