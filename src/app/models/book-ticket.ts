// book-ticket.model.ts
export interface BookTicket {
    id?: number; // Optional if you generate IDs on the server side
    showId: number;
    seat: string;
  }
  