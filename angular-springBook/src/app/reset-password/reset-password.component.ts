import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @Input() user: Users;
  @Output() userChange = new EventEmitter<Users>();

  constructor(private httpClient: HttpClient) {
    this.user = new Users();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.httpClient.post<Users>('http://localhost:9090/myapp/springbook/resetpassword', this.user).subscribe();
  }

}
