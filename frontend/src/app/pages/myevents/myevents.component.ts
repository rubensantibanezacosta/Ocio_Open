import { Component, OnInit } from '@angular/core';


import {getDataFromToken} from '../../utils/jwtparser';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.scss']
})
export class MyeventsComponent implements OnInit {
 
  tittle="Mis Eventos";
  image=""
  constructor() { }

  ngOnInit(): void {
    
  }


  
  
}
