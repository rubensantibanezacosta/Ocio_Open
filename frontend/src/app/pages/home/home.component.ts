import { Component, OnInit, Output } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from '../../models/event';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  tittle = "Eventos disponibles";
  image = "../../../assets/icons/events-icon.png";

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {

  }
}
