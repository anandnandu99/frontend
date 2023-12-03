// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, newMovie);
  }

  removeMovie(movieId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${movieId}`;
    return this.http.delete<void>(deleteUrl);
  }
}
