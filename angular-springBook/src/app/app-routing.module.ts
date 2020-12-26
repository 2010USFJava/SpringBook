import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import {ProfileComponent} from './profile/profile.component';
import {PostDetailsComponent} from './post-details/post-details.component'
import { PostsListComponent } from './posts-list/posts-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes : Routes=[
{path:'',component:LoginComponent},
{path:'registration',component: RegistrationComponent},
{path: 'profile/:users', component:ProfileComponent},
{path: 'newpost', component:CreateNewPostComponent},
{path: 'viewpost',component:PostDetailsComponent},
{path: 'viewfeed',component:PostsListComponent},
{path: 'resetpassword',component:ResetPasswordComponent},
{path: 'searchbar',component:SearchBarComponent},
{path: 'updateprofile',component:UpdateProfileComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule],
  
})
export class AppRoutingModule { }
