import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/users';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @Input() user: Users;
  @Output() userChange = new EventEmitter<Users>();

  constructor(private httpClient: HttpClient, private userService: UsersService) {
    this.user = userService.currentUser; // Change to get current user
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.httpClient.post<Users>('http://localhost:4200/myapp/springbook/updateprofile', this.user).subscribe(result => this.user = result);
  }

}
