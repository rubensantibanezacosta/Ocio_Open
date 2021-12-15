import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { getDataFromToken } from 'src/app/utils/jwtparser';
import { Comment } from '../../models/comment';
import * as moment from 'moment';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  event_id:number=this.activatedRoute.snapshot.params.event_id;
  userEmail:string=getDataFromToken().username;
  image ='../../../assets/icons/comments-icon.png';
  tittle:string="Comentarios";
  xIcon="../../../assets/icons/x-icon.png";
  checkIcon="../../../assets/icons/check-icon.png";
  textComment:string="";

  ErrorMessage:string;

  comments:Comment[]=[];

  constructor(private activatedRoute: ActivatedRoute, private commentsService:CommentsService,  private errorHandlerService:ErrorHandlerService) { }

  ngOnInit(): void {
    this.getCommentsByEvent();
    console.log(window.history.state);
  }

  getCommentsByEvent(){
    return this.commentsService.getCommentsByEvent(this.event_id).subscribe((comments)=>{
      this.comments=comments;
    },
    (error) => {
      this.ErrorMessage=error.error;
      this.createModal();

    })
  }

  createComment(text:string){
    let comment:Comment=new Comment()
    comment.assistant=this.userEmail;
    comment.event_id=this.event_id;
    comment.comment=text;
    
    this.commentsService.createComment(comment).subscribe((res)=>{
        this.textComment="";
        this.getCommentsByEvent();
      },
      (error) => {
        this.ErrorMessage=error.error;
        this.createModal();
  
      }
    )
  }
  keyDownFunction(event, text:string){
    if(event.code==='Enter'){
      this.createComment(text);
    }
  }

  deleteComment(comment_id:number){
    this.commentsService.deleteComment(comment_id).subscribe((res)=>{
      this.getCommentsByEvent();
    },
    (error) => {
      this.ErrorMessage=error.error;
      this.createModal();

    })
  }

  formatTime = (date:Date) => { return moment(date).format("DD.MM.YY HH:mm:ss") }

    //Error handler modals
    @ViewChild('modal', { read: ViewContainerRef })
    entry!: ViewContainerRef;
    sub!: Subscription;
  
  
    createModal(){
        this.sub = this.errorHandlerService
          .openModal(this.entry, 'ERROR', this.ErrorMessage)
          .subscribe((v) => {
            //your logic
          });
    }
}
