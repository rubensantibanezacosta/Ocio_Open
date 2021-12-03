import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { EventsService } from 'src/app/services/events.service';
import * as moment from 'moment';
import { getDataFromToken } from 'src/app/utils/jwtparser';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  animations: [
    trigger('userClip', [
      state('active', style({ display: "inherit" })),
      state('inactive', style({
        display: "none",
      })),
      transition("inactive <=> active", animate('0.3s')),
    ]),
    trigger('eventClip', [
      state('inactive', style({ display: "none" })),
      state('active', style({
        display: "inherit",
      })),
      transition("inactive <=> active", animate('0.3s')),
    ]),
    trigger('userTittle', [
      state('active', style({
        border: "1px solid white",
        borderBottom: "0"
      })),
      state('inactive', style({ borderBottom: "1px white solid" })),
      transition("inactive <=> active", animate('0.3s')),
    ]),
    trigger('eventTittle', [
      state('inactive', style({
        borderBottom: "1px white solid",
      })),
      state('active', style({
        border: "1px solid white",
        borderBottom: "0"
      })),
      transition("inactive <=> active", animate('0.3s')),
    ])
  ]
})

export class AdministrationComponent implements OnInit {
  tittle = "Administración";
  image = "../../../assets/icons/data-icon.png";
  openCanariasLogo = ("../../../assets/icons/open-canarias-logo.png")
  searchIcon = "../../../assets/icons/search-icon.png";
  orderByIcon = "../../../assets/icons/order-by.png";

  userEmail: string = getDataFromToken().username;
  userData: User = new User();
  usersState: string = "active";
  eventsState: string = "inactive";
  users: User[] = [];
  events: Event[] = [];

  constructor(private usersService: UsersService, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  async loadInfo() {
    this.getUser();
    this.eventsService.getAllEventsDESC().subscribe((res) => {
      return this.events = res;
    })
    this.usersService.getAllUsers().subscribe((res) => {
      return this.users = res;
    })
  }
  showEvents() {
    this.usersState = "inactive";
    this.eventsState = "active";
  }

  showUsers() {
    this.usersState = "active";
    this.eventsState = "inactive";
  }

  formatDate(date: Date) {
    return moment(date).format("DD-MM-YY");
  }

  formatDateTime(dateTime: string) {
    return moment(dateTime).format("DD-MM-YY HH:mm");
  }

  getUser() {
    this.usersService.getUserByEmail(this.userEmail).subscribe((res) => {
      this.userData = res;
    });
  }
  filterBy(word: string) {
    console.log(word);
    this.loadInfo().then(() => {
      if (word != "") {
        this.users = this.users.filter((user) => {
          return user.email.includes(word) || user.name.includes(word) || user.surname.includes(word)
        })
        this.events = this.events.filter((event) => {
          return event.tittle.includes(word) || event.description.includes(word) || event.place.includes(word) || event.zone.includes(word) || event.organizer.includes(word);
        })
      } else {
        this.loadInfo()
      }
    });


  }
}
