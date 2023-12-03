// shows.component.ts
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';
import { Theatre } from 'src/app/models/theatre';
import { TheatreService } from 'src/app/services/theatre.service';
import { Screen } from 'src/app/models/screen';
import { ScreenService } from 'src/app/services/screen.service';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [];
  newShow: Show = { movieTitle: '', theatreName: '', screenName: '', showTimes: [] };
  selectedTheatre: Theatre | null = null;
  selectedScreen: Screen | null = null;
  selectedMovie: Movie | null = null;
  movies: Movie[] = [];
  theatres: Theatre[] = [];
  screens: Screen[] = [];
  showTimes: string[] = ['10:45am', '2:20pm', '6:00pm', '9:45pm'];
  selectedShowTimes: string[] = [];
  filteredScreens: Screen[] = [];

  constructor(
    private showService: ShowService,
    private theatreService: TheatreService,
    private screenService: ScreenService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.refreshShows();
    this.refreshTheatres();
    this.refreshScreens();
    this.refreshMovies();
  }

  addShow(): void {
    if (this.selectedTheatre && this.selectedScreen && this.selectedShowTimes.length > 0 && this.selectedMovie) {
      // Assign the selected values to the new show
      this.newShow.movieTitle = this.selectedMovie.title;
      this.newShow.theatreName = this.selectedTheatre.theatreName;
      this.newShow.screenName = this.selectedScreen.screenName;
      this.newShow.showTimes = [...this.selectedShowTimes];

      this.showService.addShow(this.newShow).subscribe(() => {
        this.refreshShows();
      });

      // Reset form
      this.selectedMovie = null;
      this.selectedShowTimes = [];
    }
  }

  removeShow(id: number): void {
    this.showService.removeShow(id).subscribe(() => {
      this.refreshShows();
    });
  }

  toggleShowTime(time: string): void {
    const index = this.selectedShowTimes.indexOf(time);
    if (index !== -1) {
      this.selectedShowTimes.splice(index, 1);
    } else {
      this.selectedShowTimes.push(time);
    }
  }

  onTheatreChange(): void {
    // Filter screens based on the selected theatre
    if (this.selectedTheatre) {
      this.filteredScreens = this.screens.filter(
        (screen) => screen.theatreId === this.selectedTheatre?.id
      );
    } else {
      // If no theatre selected, show all screens
      this.filteredScreens = this.screens;
    }
  }

  isSelectedShowTime(time: string): boolean {
    return this.selectedShowTimes.includes(time);
  }

  private refreshShows(): void {
    this.showService.getShows().subscribe((shows) => {
      this.shows = shows;
    });
  }

  private refreshTheatres(): void {
    this.theatreService.getTheatres().subscribe((theatres) => {
      this.theatres = theatres;
    });
  }

  private refreshMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  private refreshScreens(): void {
    this.screenService.getScreens().subscribe((screens) => {
      this.screens = screens;
    });
  }
}
