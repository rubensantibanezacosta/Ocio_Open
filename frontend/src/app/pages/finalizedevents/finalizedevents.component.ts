import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizedevents',
  templateUrl: './finalizedevents.component.html',
  styleUrls: ['./finalizedevents.component.scss']
})
export class FinalizedeventsComponent implements OnInit {
tittle:string="Eventos Terminados";
image="../../../assets/icons/calendar-ok-icon.png";
  constructor() { }

  ngOnInit(): void {
  }

}
