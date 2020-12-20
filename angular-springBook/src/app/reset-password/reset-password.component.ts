import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @Input() email:string;
  @Output() emailChange = new EventEmitter<string>();

  constructor() {
    this.email = "user@example.com";
  }

  ngOnInit(): void {
  }

  sendResetEmail(email: string): void {
    
  }

}
