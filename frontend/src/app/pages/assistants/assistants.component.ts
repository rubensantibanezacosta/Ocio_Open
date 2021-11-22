import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssistantsService } from 'src/app/services/assistants.service';
import {Asisstant} from '../../models/assistant'

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss']
})
export class AssistantsComponent implements OnInit {
  event_id:number=this.activatedRoute.snapshot.params.event_id;
  tittle:string="Asistentes"
  image="../../../assets/icons/assistants_icon.png";
  miniStar="../../../assets/icons/mini-star.png";

  assistants:Asisstant[]=[];
  constructor(private activatedRoute: ActivatedRoute, private assistantsService:AssistantsService) { }

  ngOnInit(): void {
    this.getAssistantsByEvent();
  }

  getAssistantsByEvent(){
    return this.assistantsService.getAssistantsByEvent(this.event_id).subscribe((assistants)=>{
      this.assistants=assistants;
    })
  }
}
