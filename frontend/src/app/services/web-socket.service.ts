import { VariablesService } from './../../config/config';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  bearerToken = localStorage.getItem("ocioToken");
  io = io(this.variablesService.variables.host,{
    /* withCredentials:true, */
    autoConnect: true,
    extraHeaders: {
      "Authorization":"Bearer "+this.bearerToken
    }
  })
  constructor(private variablesService:VariablesService) {
    
  }
  
 /*  listenEvent(event_id){
    this.io.on(event_id,);
  } */
}
