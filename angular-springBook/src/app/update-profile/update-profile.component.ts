import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  @Input() fileUpload: string;
  @Input() user: Users;
  @Output() userChange = new EventEmitter<Users>();

  constructor(private httpClient: HttpClient, private userService: UsersService, private uploadService: UploadFileService) {
    this.user = this.userService.currentUser;
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.httpClient.post<Users>('http://localhost:9090/myapp/springbook/updateprofile', this.user).subscribe(result => this.user = result);
  }

  getPictureFile(): void {
    document.getElementById("pictureFile").click();
  }

  updatePicture(fileInput: any): void {
    this.currentFileUpload = fileInput;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.currentFileUpload;
    //this.user.proImage = s3 address + this.currentFileUpload.name;
    this.userService.updateProfile(this.user);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.currentFileUpload = undefined;
  }

}
