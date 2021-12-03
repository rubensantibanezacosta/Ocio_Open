import { Component, OnInit } from '@angular/core';

import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { BehaviorSubject } from 'rxjs';
import { Token } from 'src/app/models/token';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import * as moment from 'moment';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  public isChecked$ = new BehaviorSubject(false);
  public rememberMe: boolean = false;

  googleIcon = ("../../../assets/icons/google-icon-white.png");
  openCanariasLogo = ("../../../assets/icons/open-canarias-logo.png")

  constructor(
    private authService: SocialAuthService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  toggleChecked() {
    this.isChecked$.next(!this.isChecked$.value)
    this.rememberMe = this.isChecked$.value;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (data) => {
        if (data.email) {

          const user: User = new User();
          user.email = data.email;
          user.image_url = data.photoUrl;
          user.name = data.firstName;
          user.surname = data.lastName;

          const loginData: any = {
            user: user,
            rememberMe: this.rememberMe
          }

          this.loginService.login(loginData).subscribe((data) => {
            if (data.token) {
              const token: Token = data;
              localStorage.setItem("ocioToken", token.token);

              this.router.navigateByUrl("/home");
            }
          })

        }
      }
    );
  }

  /* 
  email: "rubensantibanezacosta902@gmail.com"
  firstName: "Ruben"
  lastName: "Santibanez"
  name: "Ruben Santibanez"
  photoUrl: "https://lh3.googleusercontent.com/a/AATXAJwcvFaX_gz372p_URZppF-xJyJ2-AeOcW7t_poz=s96-c" */

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
