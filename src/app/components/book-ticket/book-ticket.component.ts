// book-ticket.component.ts
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';
import { BookTicketService } from 'src/app/services/book-ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css'],
})
export class BookTicketComponent implements OnInit {
  shows: Show[] = [];
  selectedShowTime: string | null = null;
  selectedSeat: string | null = null;
  showTimes: string[] = [];

  constructor(private showService: ShowService, private bookTicketService: BookTicketService) {}

  ngOnInit(): void {
    this.showService.shows$.subscribe((shows) => {
      this.shows = shows;
    });
  }

  bookTicket(): void {
  }
}
