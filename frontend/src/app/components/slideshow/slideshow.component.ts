import { Component, Input, OnInit, Output } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from '../../models/event';
import * as moment from 'moment';
import { PunctuationsService } from 'src/app/services/punctuations.service';
import { Punctuation } from 'src/app/models/punctuation';
import { getDataFromToken } from '../../utils/jwtparser';
import { Asisstant } from 'src/app/models/assistant';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})


export class SlideshowComponent implements OnInit {
  @Input() future:boolean;
  @Input() userEmailOutput:string;

  
  profileIcon = "../../../assets/icons/user-icon.png";
  miniStar = "../../../assets/icons/mini-star.png";
  zoneIcon= "../../../assets/icons/zone-icon.png";
  hourIcon = "../../../assets/icons/hour-icon.png";
  placeIcon = "../../../assets/icons/place-icon.png";
  assistantsIcon = "../../../assets/icons/assistants_icon.png";
  commentIcon = "../../../assets/icons/comments-icon-white.png";
  navigateIcon= "../../../assets/icons/navigate-icon.png";



  events: Event[] = [];

  
  formatDate = (date) => { return moment(date).locale("es").format("D [de] MMMM") };
  formatTime = (date) => { return moment(date).format("HH:mm") }

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.loadEvents();
  }
  loadEvents() {
      if(this.future){
    return this.eventsService.getAllEventsASC().subscribe(data => {
      this.events = data.filter((event => {
        return moment(event.date).isAfter(moment())==this.future;
      }));
    })
  }else{
    return this.eventsService.getAllEventsDESC().subscribe(data => {
      this.events = data.filter((event => {
        return moment(event.date).isAfter(moment())==this.future;
      }));
    })
  }
  }

  windowToEvent(url:string){
    window.open(url);
  }

  filterByAttendance(assistants:Asisstant[]){
    return assistants.filter((assistant)=>{
      return assistant.attendance==true;
    }).length
  }
  
}
