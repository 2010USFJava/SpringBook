import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UpdateProfileComponent,
    ResetPasswordComponent
=======
>>>>>>> 8bfbf0b0b6e1d1d1c5751d21af7587a16e538569
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
