import { VariablesService } from './../../config/config';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  bearerToken = localStorage.getItem("ocioToken");
  io = io(this.variablesService.variables.socket,{
    transports: ['websocket'],
    upgrade:false,
    
    /* withCredentials:true, */
    autoConnect: true,
  
    
  })

  constructor(private variablesService:VariablesService) {
    this.io.on("connection",(socket)=>console.log(socket.id))
  
  
  }
  
 /*  listenEvent(event_id){
    this.io.on(event_id,);
  } */
}
