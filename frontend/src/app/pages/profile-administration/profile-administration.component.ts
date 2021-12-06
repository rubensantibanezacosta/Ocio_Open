import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Event } from 'src/app/models/event';
import { UsersService } from 'src/app/services/users.service';
import { EventsService } from 'src/app/services/events.service';
import * as moment from 'moment';
import { AssistantsService } from 'src/app/services/assistants.service';
@Component({
  selector: 'app-profile-administration',
  templateUrl: './profile-administration.component.html',
  styleUrls: ['./profile-administration.component.scss']
})
export class ProfileAdministrationComponent implements OnInit {
  tittle = "Administración";
  image = "../../../assets/icons/data-icon.png";
  star = "../../../assets/icons/big-star.png";
  profileAvatar="../../../assets/images/avatar.jpg";
  userEmail: string = this.activatedRoute.snapshot.params.email;
  userPosition: number = 0;
  user: User = new User();
  events: Event[] = [];
  attendanceCounter:number=0;
  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private eventsService: EventsService, private assistantsService:AssistantsService) { }

  ngOnInit(): void {
    this.getUser();
    this.getUserPosition();
    this.getEventsByUser();
    this.countAttendance();
  }

  getUser() {
    this.userService.getUserByEmail(this.userEmail).subscribe((res) => {
      this.user = res;
    })
  }

  getUserPosition() {
    this.userService.getUserPosition(this.userEmail).subscribe((position) => {
      this.userPosition = position;
    })
  }

  getEventsByUser() {
    this.eventsService.getEventsByOrganizerDESC(this.userEmail).subscribe((events) => {
      this.events = events;
    })
  }

  countAttendance(){
    this.assistantsService.countAttendance(this.userEmail).subscribe((res)=>{
      
      this.attendanceCounter = res;
    })
  }

  formatDateString(date: string) {
    return moment(date).format("DD-MM-YY");
  }

  formatDate(date: Date) {
    return moment(date).format("DD-MM-YY");
  }

  formatDateTime(dateTime: string) {
    return moment(dateTime).format("DD-MM-YY HH:mm");
  }
}
