// show.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private apiUrl = 'http://localhost:3000/shows';

  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  addShow(newShow: Show): Observable<Show> {
    return this.http.post<Show>(this.apiUrl, newShow);
  }
  shows$: Observable<Show[]> = this.http.get<Show[]>(`${this.apiUrl}`);


  removeShow(showId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${showId}`;
    return this.http.delete<void>(deleteUrl);
  }
}
