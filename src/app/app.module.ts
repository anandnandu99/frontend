import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TheatresComponent } from './components/theatres/theatres.component';
import { SeatingComponent } from './components/seating/seating.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowsComponent } from './components/shows/shows.component';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    MoviesComponent,
    TheatresComponent,
    SeatingComponent,
    ShowsComponent,
    BookTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
