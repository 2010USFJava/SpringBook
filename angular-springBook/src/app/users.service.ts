import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Users } from './users';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'http://localhost:9090/myapp/springbook';

  constructor(private http: HttpClient) { }

  getUsersByFirstName(firstName: String): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/${firstName}`);
  }

  public loginUserFormRemote(email:string, passWord:string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`,{email, passWord}, {withCredentials:true});
  }

  public registerUsers(users: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/registeruser`, users, {withCredentials:true});
  }

}
