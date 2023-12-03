// theatre.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from 'src/app/models/theatre';

@Injectable({
  providedIn: 'root',
})
export class TheatreService {
  private apiUrl = 'http://localhost:3000/theatres';

  constructor(private http: HttpClient) {}

  getTheatres(): Observable<Theatre[]> {
    return this.http.get<Theatre[]>(this.apiUrl);
  }

  addTheatre(newTheatre: Theatre): Observable<Theatre> {
    return this.http.post<Theatre>(this.apiUrl, newTheatre);
  }

  removeTheatre(theatreId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${theatreId}`;
    return this.http.delete<void>(deleteUrl);
  }
}
