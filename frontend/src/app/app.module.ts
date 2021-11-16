import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { MyeventsComponent } from './pages/myevents/myevents.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { FinalizedeventsComponent } from './pages/finalizedevents/finalizedevents.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ProfileAdministrationComponent } from './pages/profile-administration/profile-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MyeventsComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    RankingComponent,
    FinalizedeventsComponent,
    AdministrationComponent,
    NofoundComponent,
    CalendarComponent,
    ProfileAdministrationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '481491250235-j401vq8g5o73j1hmm75b67j7104u2t70.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
