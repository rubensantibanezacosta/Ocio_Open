import { Component, Input, OnInit } from '@angular/core';
import { Punctuation } from 'src/app/models/punctuation';
import { AssistantsService } from 'src/app/services/assistants.service';
import { PunctuationsService } from 'src/app/services/punctuations.service';
import { getDataFromToken } from '../../../utils/jwtparser';

@Component({
  selector: 'app-valoration',
  templateUrl: './valoration.component.html',
  styleUrls: ['./valoration.component.scss']
})
export class ValorationComponent implements OnInit {
  userEmail:string=getDataFromToken().username;
  myPunctuation:number;

@Input() event_id:number;
assisted:boolean=false;

  

  emptyStar = "../../../../assets/icons/big-empty-star.png";
  fullStar = "../../../../assets/icons/big-star.png";
  constructor(private punctuationService:PunctuationsService, private assistantService:AssistantsService) { }

  ngOnInit(): void {
    this.assistedValidation();
  }


  assistedValidation(){
    return this.assistantService.getAssistantByPk(this.event_id, this.userEmail)
    .subscribe((assistant)=>{
     
      if(assistant[0]){
        if(assistant[0].attendance)
        this.assisted=true;
        this.loadPunctuationByPk();
      }
    })
  }

  loadPunctuationByPk(){
    return this.punctuationService.getPunctuationByPk(this.event_id, this.userEmail)
    .subscribe((Punctuation)=>{
      return this.myPunctuation= Punctuation[0].punctuation
    })
}

  createOrUpdatePunctuation(value:number){
    
    let punctuation:Punctuation=new Punctuation();
    punctuation.assistant=this.userEmail;
    punctuation.event_id=this.event_id;
    punctuation.punctuation=value;
    this.punctuationService.createOrUpdatePunctuation(punctuation).subscribe(()=>{
      this.loadPunctuationByPk();
    })
  }
}
