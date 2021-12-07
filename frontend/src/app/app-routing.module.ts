import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AssistantsComponent } from './pages/assistants/assistants.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { EventFormComponent } from './pages/event-form/event-form.component';
import { EventsAdministrationComponent } from './pages/events-administration/events-administration.component';
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
  { path: 'comments/:event_id', component: CommentsComponent },
  { path: 'assistants/:event_id', component: AssistantsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'eventform/:event_id/:type', component: EventFormComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profileAdministration/:email', component: ProfileAdministrationComponent },
  { path: 'eventsAdministration/:event_id', component: EventsAdministrationComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: NofoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
