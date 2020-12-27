import { Component, OnInit, Output, Inject, EventEmitter } from '@angular/core';
import { Users} from '../users';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  
   user: Users;
  @Output() userChange = new EventEmitter<Users>();

  constructor(private httpClient: HttpClient, @Inject(DOCUMENT) private _document: Document,private userService: UsersService) {
    this.user = userService.currentUser; // Change to get current user
    console.log(this.user);
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.httpClient.post<Users>('http://localhost:4200/myapp/springbook/updateprofile', this.user).subscribe(result => this.user = result);
  }

  getPictureFile(): void {
    document.getElementById("pictureFile").click();
  }

  updatePicture(fileInput: any): void {
    /* let newPicture: File = fileInput.item(0);
    const formData: FormData = new FormData();
    formData.append('Image', newPicture, newPicture.name);
    this.http.post('/placeholder', formData); */
  }

}
