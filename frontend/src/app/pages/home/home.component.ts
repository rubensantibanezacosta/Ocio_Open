import { Component, OnInit } from '@angular/core';
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

  events: Event[] = [];


  profileIcon = "../../../assets/icons/user-circle-icon.png";
  miniStar = "../../../assets/icons/mini-star.png";
  eventsIcon = "../../../assets/icons/events-icon.png";

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents().then(()=>{this.filterByToday()})
  }


  async getAllEvents() {
    return this.eventsService.getAllEvents().subscribe(data => {
      console.log(data);
      this.events = data;
    }).unsubscribe();
  }

  async filterByToday() {
    this.events = this.events.filter((event) => {
      return moment(event.date) >= moment()
    }
    )
  }
}
