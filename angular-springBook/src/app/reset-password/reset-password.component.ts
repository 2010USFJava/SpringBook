import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(email: string) {
    email = "user@example.com";
  }

  ngOnInit(): void {
  }

  sendResetEmail(email: string): void {
    
  }

}
