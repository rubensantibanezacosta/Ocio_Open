import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './pages/administration/administration.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FinalizedeventsComponent } from './pages/finalizedevents/finalizedevents.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyeventsComponent } from './pages/myevents/myevents.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { ProfileAdministrationComponent } from './pages/profile-administration/profile-administration.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myevents', component: MyeventsComponent },
  { path: 'finalizedevents', component: FinalizedeventsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'profileAdministration', component: ProfileAdministrationComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: NofoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
