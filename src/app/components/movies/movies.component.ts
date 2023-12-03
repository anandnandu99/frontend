// movies.component.ts
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = { title: '', director: '', genre: '', language: '', rating: 0, imageUrl: '' };
  showAddMovieForm: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.refreshMovies();
  }

  addMovie(): void {
    this.movieService.addMovie(this.newMovie).subscribe(() => {
      this.showAddMovieForm = false;
      this.refreshMovies();
    });
  }

  removeMovie(index: number): void {
    const movieId = this.movies[index].id;

    if (movieId !== undefined) {
      this.movieService.removeMovie(movieId).subscribe(() => {
        this.movies.splice(index, 1);
      });
    } else {
      console.error('Attempted to remove a movie without a valid ID.');
    }
  }

  toggleAddMovieForm(): void {
    this.showAddMovieForm = !this.showAddMovieForm;
  }

  

  private refreshMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
