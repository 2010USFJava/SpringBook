import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() users : Users[];
  user: Users;
  constructor(private userService: UsersService, public router: Router) { }

  ngOnInit(): void {

  }

  searchUser(user: Users) {
    this.userService.currentUser = user;
    console.log(user);
    this.router.navigateByUrl('/profile');
  }
}
