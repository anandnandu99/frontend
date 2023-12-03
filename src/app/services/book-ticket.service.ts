// book-ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookTicketService {
  private baseUrl = 'http://localhost:3000/bookings'; // Adjust the URL based on your backend

  constructor(private http: HttpClient) {}

  bookTicket(showId: number, showTime: string, seat: string): Observable<any> {
    const bookingData = { showId, showTime, seat };
    return this.http.post(`${this.baseUrl}`, bookingData);
  }
}
