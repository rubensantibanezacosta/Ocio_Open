import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reusable-back-icon',
  templateUrl: './reusable-back-icon.component.html',
  styleUrls: ['./reusable-back-icon.component.scss']
})
export class ReusableBackIconComponent implements OnInit {

  constructor(private router:Router) { }
  
  @Input()  anchor:number;
  collapseIcon = "../../../assets/icons/collapse-icon.png";
  ngOnInit(): void {
  }


  backToEvent(anchor){
    const url=window.history.state.prevUrl.toString().split("/");
    const lenght=window.history.state.prevUrl.toString().split("/").length-2;
    console.log(url);
    this.router.navigateByUrl(url[lenght]+"#"+anchor);
  }
}
