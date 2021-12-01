import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() imageId:number;
  downloaded: File;
  src: string | ArrayBuffer = "";
  bearerToken = localStorage.getItem("ocioToken");
  spinner="../../../../assets/loaders/Spinner.gif";
  loaded=false;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.getImage();
  }


  getImage() {
    return this.imagesService.getImageById(this.imageId).subscribe((data) => {
      this.downloaded = new File([data], "filename", { type: "image/jpg" });
      return this.createImageFromBlob(this.downloaded);
    })
  }


  createImageFromBlob(image: any) {
    let reader = new FileReader();
    reader.addEventListener("load", async () => {
      this.src = reader.result;
      this.loaded=true;
    },false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
