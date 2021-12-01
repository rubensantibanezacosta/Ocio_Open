import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EventsService } from 'src/app/services/events.service';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';


import { getDataFromToken } from '../../utils/jwtparser';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.scss']
})
export class MyeventsComponent implements OnInit {

  tittle = "Mis Eventos";
  image = "../../../assets/icons/my-event-icon.png";
  star = "../../../assets/icons/big-star.png";
  trash = "../../../assets/icons/trash-icon.png";
  editIcon = "../../../assets/icons/pencil-icon.png";
  plus = "../../../assets/icons/plus-icon-empty.png";
  miniStar = "../../../assets/icons/mini-star.png";
  

  userEmail: string = getDataFromToken().username;
  userPosition: number = 0;
  user: User = new User();
  pastEvents: Event[] = [];
  futureEvents: Event[] = [];

  constructor(private userService: UsersService, private eventService: EventsService) { }

  ngOnInit(): void {
    this.getUserByEmail();
    this.getUserPosition();
    this.getPastEventsByUser();
    this.getFutureEventsByUser();
  }

  getUserByEmail() {
    this.userService.getUserByEmail(this.userEmail).subscribe((user) => {
      this.user = user;
    })
  }

  getUserPosition() {
    this.userService.getUserPosition(this.userEmail).subscribe((position) => {
      this.userPosition = position;
    })
  }

  getFutureEventsByUser() {
    this.eventService.getEventsByOrganizer(this.userEmail).subscribe((events) => {
      return this.futureEvents = events.filter((event) => {
        return moment(event.date).isAfter(moment());
      })

    });
  }

  getPastEventsByUser() {
    this.eventService.getEventsByOrganizer(this.userEmail).subscribe((events) => {
      return this.pastEvents = events.filter((event) => {
        return moment(event.date).isBefore(moment());
      });
    });
  }

  deleteEventById(id:number){
    this.eventService.deleteEventById(id).subscribe(res=>{return this.getFutureEventsByUser(); });
  }
    
  formatDate(date:Date){
    return moment(date).format("DD-MM-YYYY");
  }
}
