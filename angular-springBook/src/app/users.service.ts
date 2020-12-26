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

  public loginUserFormRemote(users : Users): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`,users)
  }

}
