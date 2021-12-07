import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as MyEvent from 'src/app/models/event';
import { getDataFromToken } from 'src/app/utils/jwtparser';
import * as moment from 'moment';
import { ImagesService } from 'src/app/services/images.service';
import { EventsService } from 'src/app/services/events.service';




@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  image = "../../../assets/icons/my-event-icon.png";

  userEmail: string = getDataFromToken().username;
  event_id: number = this.activatedRoute.snapshot.params.event_id;
  type: string = this.activatedRoute.snapshot.params.type;
  tittle = this.type == "new" ? "Nuevo evento" : "Editar evento";
  minDate: string = moment().add(2, "hour").locale("es").format("YYYY-MM-DD[T]hh:mm");


  galeryIcon = "../../../assets/icons/galery-icon.png";
  fileIcon = "../../../assets/icons/file-icon.png";

  myEvent: MyEvent.Event = new MyEvent.Event();
  imageSrc: string | ArrayBuffer;
  file: File;

  imageFormVisible: boolean = false;
  galleryVisible: boolean = false;
  dateinputVisible: boolean = false;


  constructor(private activatedRoute: ActivatedRoute, private imagesService: ImagesService, private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.myEvent.zone = "GC";
    this.getEventToEdit();
    this.validateDate();
  }

  validateDate() {
    this.type != "new" ? this.dateinputVisible = false : this.dateinputVisible = true;
  }

  submit() {
    
    if(this.type == "new"){
    this.eventsService.createEvent(this.myEvent).subscribe(res => window.history.back())
  }else{
      this.eventsService.updateEvent(this.myEvent).subscribe(res => {
        window.history.back()
      });
    }
  }

  async getEventToEdit() {
    if (this.type != "new") {
      this.eventsService.getEventById(this.event_id).subscribe(res => {
        return this.myEvent = res
      })
    }
  }
  onPhotoSelected(event: any): void {

    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  uploadImage(): boolean {
    this.imagesService.createImage(this.file).subscribe((res) => {
      this.hideImageForm();
      this.myEvent.image_id = res[0].id;
    },
      (err) => {
        console.error(err);
      })

    return false;
  }

  showImageForm() {
    this.imageFormVisible = true;
  }

  hideImageForm() {
    this.file = undefined;
    this.imageSrc = undefined;
    this.imageFormVisible = false;
  }

  showGallery() {
    this.galleryVisible = true;
  }

  hideGallery() {
    this.myEvent.image_id;
    this.galleryVisible = false;
  }

  getId(e) {
    this.myEvent.image_id = e;
    this.hideGallery();
  }

  zoneSelected() {
    switch (this.myEvent.zone) {
      case "TNF":
        return "Tenerife";
        break;
      case "GC":
        return "Gran Canaria";
        break;
      case "VIRTUAL":
        return "Virtual";
        break;
      default:
        return "";
        break;
    }
  }

  setVisibleDate() {
    return this.dateinputVisible = true;
  }

  formatDate(date: Date) {
    return moment(date).format("DD-MM-YYYY hh:mm")
  }
}
