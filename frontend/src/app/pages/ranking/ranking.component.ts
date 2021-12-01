import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { ZonesService } from 'src/app/services/zones.service';
import { getDataFromToken } from 'src/app/utils/jwtparser';
import { Zones } from 'src/app/models/zone';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  animations: [
    trigger('organizerClip', [
      state('active', style({display:"inherit"})),
      state('inactive', style({
        display: "none",
      })),
      transition("inactive <=> active", animate('0.3s')),
    ]),
    trigger('zonesClip', [
      state('inactive', style({display:"none"})),
      state('active', style({
        display: "inherit",
      })),
      transition("inactive <=> active", animate('0.3s')),
    ]),
    trigger('organizerTittle', [
      state('active', style({border: "1px solid white",
    borderBottom:"0"})),
      state('inactive', style({borderBottom:"1px white solid"})),
      transition("inactive <=> active", animate('0.3s')),
    ]),
    trigger('zonesTittle', [
      state('inactive', style({borderBottom:"1px white solid",
    })),
      state('active', style({
        border: "1px solid white",
        borderBottom:"0"
      })),
      transition("inactive <=> active", animate('0.3s')),
    ])
  ]
})
export class RankingComponent implements OnInit {
  tittle = "Ranking";
  image = "../../../assets/icons/ranking-icon.png";
  star = "../../../assets/icons/big-star.png";
  rankingIconBlack = "../../../assets/icons/ranking-icon-black.png";
  profileIcon = "../../../assets/icons/user-icon.png";
  miniStar = "../../../assets/icons/mini-star.png";
  zoneIcon = "../../../assets/icons/zone-icon.png";

  userEmail: string = getDataFromToken().username;

  user: User = new User();
  organizers: User[] = [];
  zones: Zones[] = [];
  userPosition: number = 0;

  //Animations

  organizerState:string="active";
  zonesState:string="inactive";
  

  constructor(private userService: UsersService, private zonesService: ZonesService) { }

  ngOnInit(): void {

    this.getUserByEmail();
    this.getUserPosition();
    this.getOrganizers();
    this.getZones();
  }

  getUserByEmail() {
    this.userService.getUserByEmail(this.userEmail).subscribe((user) => {
      this.user = user;
    })
  }

  getUserPosition() {
    this.userService.getUserPosition(this.userEmail).subscribe((position) => {
      this.userPosition = position;
    })
  }

  getOrganizers() {
    this.userService.getAllUsers().subscribe((organizers) => {
      this.organizers = organizers;
    })
  }

  getZones() {
    this.zonesService.getAllZones().subscribe((zones) => {
      this.zones = zones;
    })
  }

  showZones(){
    this.organizerState="inactive";
    this.zonesState="active";
  }

  showOrganizers(){
    this.organizerState="active";
    this.zonesState="inactive";
  }
}
