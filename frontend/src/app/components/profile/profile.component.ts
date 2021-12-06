import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { getDataFromToken } from 'src/app/utils/jwtparser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userEmail: string = getDataFromToken().username;
  userPosition: number = 0;
  user: User = new User();

  star = "../../../assets/icons/big-star.png";
  trash = "../../../assets/icons/trash-icon.png";
  editIcon = "../../../assets/icons/pencil-icon.png";
  plus = "../../../assets/icons/plus-icon-empty.png";
  miniStar = "../../../assets/icons/mini-star.png";
  profileAvatar = "../../../assets/images/avatar.jpg";
  
  constructor(private userService: UsersService,) { }

  ngOnInit(): void {
    this.getUserByEmail();
    this.getUserPosition();
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
}
