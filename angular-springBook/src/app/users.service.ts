import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from './users';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: Users;
  baseUrl = 'http://localhost:9090/myapp/springbook';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getUsersByFirstName(firstName: String): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/firstname/${firstName}`)
      .pipe(tap(_ => this.log('got users by first name')),
        catchError(this.handleError<Users[]>('getUsersByFirstName')));
  }

  public loginUserFormRemote(email: string, passWord: string): Observable<any> {
    let result = this.http.post<any>(`${this.baseUrl}/login`, { email, passWord }, { withCredentials: true });
    console.log(result);
    return result;
  }

  public registerUsers(users: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/registeruser`, users, { withCredentials: true })
      .pipe(tap(_ => this.log('registered a new user')),
        catchError(this.handleError<Users>('registerUsers')));
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
  
  public updateProfile(users: Users): Observable<Object> {
    console.log("Update Profile users = " + users);
    //return this.http.post(`${this.baseUrl}/updateprofile`, users);
    return this.http.post<Users>('http://localhost:9090/myapp/springbook/updateprofile', users);
  }

  public resetPassword(users: Users): Observable<Object> {
    console.log("Reset Password users = " + users);
    //return this.http.post(`${this.baseUrl}/resetpassword`, users);
    return this.http.post<Users>('http://localhost:9090/myapp/springbook/updateprofile', users);

}
