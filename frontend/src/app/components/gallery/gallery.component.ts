
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations:[
    trigger('filter',[
      state("inactive",style({
        display:"none"
      })),
      state("active",style({display:"block"})),
    ])

  ]
})
export class GalleryComponent implements OnInit {

  tittle = "Galeria";
  images: Image[] = [];
  bearerToken = localStorage.getItem("ocioToken"); 
  @Output() imageSelected = new EventEmitter<number>();

  //animations
  filterState="inactive";


  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.getAllUrls();

  }


  getAllUrls() {
    this.imagesService.getAllImages().subscribe((data) => {
      this.images = data;
    });
  }

  bindParameterInUrl(parameter: number) {
    return `http://localhost:4000/api/images/${parameter}?Bearer=+${this.bearerToken}`;
  }


  selectImage(id:number){
    this.imageSelected.emit(id);
  }

  //animations
  filterStateToogle(){
    this.filterState=="inactive"?this.filterState="active":this.filterState="inactive";
  }
}

