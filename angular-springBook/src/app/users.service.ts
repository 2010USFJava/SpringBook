import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Users } from './users';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   currentUser: Users;
  baseUrl = 'http://localhost:9090/myapp/springbook';

  constructor(private http: HttpClient) { }

  getUsersByFirstName(firstName: String): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/firstname/${firstName}`);
  }

  public loginUserFormRemote(email:string, passWord:string): Observable<any> {
    let result = this.http.post<any>(`${this.baseUrl}/login`,{email, passWord}, {withCredentials:true});
    console.log(result);
    return result;
  }

  public registerUsers(users: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/registeruser`, users, {withCredentials:true});
  }

}
