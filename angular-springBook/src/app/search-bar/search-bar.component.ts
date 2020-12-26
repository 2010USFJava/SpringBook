import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  users: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  getUsersByFirstName(firstName: String): void {
    this.usersService.getUsersByFirstName(firstName).subscribe(users => this.users = users);
  }

}
