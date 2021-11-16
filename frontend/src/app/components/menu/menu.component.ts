import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }
  menuIcon = "../../../assets/icons/menu-icon.png";
  viewIcon = "../../../assets/icons/view-icon.png";
  plusIcon = "../../../assets/icons/plus-icon.png";
  profileIcon = "../../../assets/icons/user-icon.png";
  logoutIcon = "../../../assets/icons/logout-icon.png";
  developerImage = "../../../assets/images/developer-site.png";
  collapseIcon = "../../../assets/icons/collapse-icon.png";
  menuShown:boolean=false;

  ngOnInit(): void {
  }




  navigateTo(url:string){
    setTimeout(() =>this.router.navigateByUrl(url), 800);
  }







  //Animations
  showMenu() {
    const menuIcon: HTMLElement = document.querySelector("#menuIcon");
    menuIcon.style.animationPlayState = "running";
    setTimeout((() => {
      menuIcon.style.animationPlayState = "paused";
    }
    ), 800);
    if(!this.menuShown){
      document.querySelector("#slider").classList.toggle("sliderShow");
    setTimeout((() => {
      this.menuShown=true;
      document.querySelector("#menu").classList.add("showMenu");
      document.querySelector("#collapse-icon").classList.add("collapse-icon-show");
    }), 300);
    }else{
      document.querySelector("#menu").classList.remove("showMenu");
      document.querySelector("#collapse-icon").classList.remove("collapse-icon-show");
      setTimeout((() => {
        document.querySelector("#slider").classList.remove("sliderShow");
        this.menuShown=false;
      }), 1000);

    }
  }
}