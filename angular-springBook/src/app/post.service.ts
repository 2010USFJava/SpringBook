import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Post} from './post';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private baseUrl = 'http://localhost:9090/myapp/springbook';

  constructor(
    private _http : HttpClient,
    private messageService: MessageService) { }

  newPost(post : Post):Observable<Post>{
    return this._http.put<Post>(`${this.baseUrl}/createPost`,post)
    .pipe(tap(_=> this.log('created a new post')),
    catchError(this.handleError<Post>('newPost')));
  }

  getAllPosts():Observable<Post[]>{
    return this._http.get<Post[]>(`${this.baseUrl}/getAllPosts`)
      .pipe(tap(_=> this.log('retrieved all posts')),
        catchError(this.handleError<Post[]>('getAllPosts', [])));
  }

  getPostsById(id:number):Observable<Post[]>{
    return this._http.get<Post[]>(`${this.baseUrl}/getPostById`)
      .pipe(tap(_=> this.log(`retrieved posts for id=${id}`)),
      catchError(this.handleError<Post[]>(`getPostsById id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* Log a postService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }




}
