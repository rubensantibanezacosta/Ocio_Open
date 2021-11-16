import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../../../config/config')[env];

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  endpoint = config.host+'/api/user';
  bearerToken = localStorage.getItem("ocioToken");
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearerToken}` }
    )
  };
  constructor(private httpClient:HttpClient) { }

  getAllZones():Observable<Zone[]>{
    return this.httpClient.get<Zone[]>(this.endpoint, this.httpOptions)
  }

  
}
