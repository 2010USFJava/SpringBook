import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/users';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @Input() user: Users;
  @Output() userChange = new EventEmitter<Users>();

  constructor() {
    this.user = new Users(); // Change to get current user
  }

  ngOnInit(): void {
  }

}
