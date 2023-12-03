import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TheatresComponent } from './components/theatres/theatres.component';
import { SeatingComponent } from './components/seating/seating.component';
import { ShowsComponent } from './components/shows/shows.component';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  {path:'movies', component: MoviesComponent},
  {path:'theatres', component: TheatresComponent},
  {path:'seating', component:SeatingComponent},
  {path:'shows', component: ShowsComponent},
  {path:'bookTicket', component: BookTicketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
