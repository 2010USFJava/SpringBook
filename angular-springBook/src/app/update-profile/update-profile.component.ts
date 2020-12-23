import { Component, OnInit, Output, Inject, Input, EventEmitter } from '@angular/core';
import { Users } from 'src/app/users';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  @Input() user: Users;
  @Output() employeeChange = new EventEmitter<Users>();

  constructor(private http: HttpClient, @Inject(DOCUMENT) private _document: Document) {
    this.user = new Users();
  }

  ngOnInit(): void {
  }

  updateProfile(employee: Users): void {
    JSONemployee: JSON.stringify(employee);
    this.http.post<any>('/placeholder', {});
    this._document.defaultView.location.reload();
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
