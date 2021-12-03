import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-administration',
  templateUrl: './profile-administration.component.html',
  styleUrls: ['./profile-administration.component.scss']
})
export class ProfileAdministrationComponent implements OnInit {
  tittle = "Administración";
  image = "../../../assets/icons/data-icon.png";
  star = "../../../assets/icons/big-star.png";

  userEmail: string = this.activatedRoute.snapshot.params.email;
  userPosition: number = 0;
  user: User = new User();
  constructor(private userService: UsersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUserByEmail(this.userEmail).subscribe((res)=>{
      this.user=res;
    })
  }
}
