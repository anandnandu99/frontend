// show.model.ts
export interface Show {
    id?: number; // Optional if you generate IDs on the server side
    movieTitle: string;
    theatreName: string;
    screenName: string;
    showTimes: string[]; // Array of show times, e.g., ['10:45am', '2:20pm']
  }
  