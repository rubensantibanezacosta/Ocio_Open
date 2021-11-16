import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, observable } from 'rxjs';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../../../config/config')[env];

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpoint = config.host+'/api/user';
  bearerToken = localStorage.getItem("ocioToken");
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearerToken}` }
    )
  };
  constructor(private httpClient:HttpClient) { }

  createOrUpdateUser(user:User):Observable<any>{
    return this.httpClient.post<any>(this.endpoint, JSON.stringify(user), this.httpOptions)
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.endpoint)
  }

  getUserByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>(this.endpoint+"/"+encodeURI(email))
  }

  deleteUserByEmail(email:string):Observable<string>{
    return this.httpClient.delete<string>(this.endpoint+"/"+encodeURI(email))
  }


}
