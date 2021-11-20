import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { config } from '../../config/config.js';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  endpoint = '/api/events';
  bearerToken = localStorage.getItem("ocioToken");
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearerToken}` }
    )
  };
  constructor(private httpClient:HttpClient) { }

  createEvent(event:Event):Observable<Event>{
    return this.httpClient.post<Event>(this.endpoint, JSON.stringify(event), this.httpOptions)
  }

  getAllEvents():Observable<Event[]>{
    console.log(config);
    return this.httpClient.get<Event[]>(this.endpoint, this.httpOptions)
  }

  getEventsByDate(date:Date):Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.endpoint+"/bydate/"+date, this.httpOptions)
  }

  getEventsByOrganizer(organizer:string):Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.endpoint+"/byorganizer/"+ encodeURI(organizer), this.httpOptions)
  }

  getEventById(event_id:number):Observable<Event>{
    return this.httpClient.get<Event>(this.endpoint+"/"+event_id, this.httpOptions)
  }

  updateEvent(event:Event):Observable<string>{
    return this.httpClient.put<string>(this.endpoint, JSON.stringify(event), this.httpOptions)
  }
  
  deleteEventById(event_id:number):Observable<string>{
    return this.httpClient.delete<string>(this.endpoint+"/"+event_id, this.httpOptions)
  }
}
