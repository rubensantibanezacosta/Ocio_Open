import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../../../config/config')[env];

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  endpoint = config.host+'/api/images';
  bearerToken = localStorage.getItem("ocioToken");
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearerToken}` }
    )
  };
  constructor(private httpClient:HttpClient) { }

  getAllImages():Observable<Image[]>{
    return this.httpClient.get<Image[]>(this.endpoint,this.httpOptions)
  }

  getImageById(id:number):Observable<Image>{
    return this.httpClient.get<Image>(this.endpoint+"/"+id, this.httpOptions);
  }

  deleteImageById(id:number):Observable<string>{
    return this.httpClient.delete<string>(this.endpoint+"/"+id, this.httpOptions)
  }

}
