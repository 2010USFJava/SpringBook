import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
