import { Injectable } from '@angular/core';
import {Users } from './users';
import { from, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }
  public loginUserFormRemote(users : Users):Observable<any>{
  
    return this._http.post<any>("localhost:9090/login",users)
    
  }

}
