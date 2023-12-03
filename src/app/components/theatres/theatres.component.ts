// theatres.component.ts
import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/models/theatre';
import { TheatreService } from 'src/app/services/theatre.service';
import { Screen } from 'src/app/models/screen';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css'],
})
export class TheatresComponent implements OnInit {
  theatres: Theatre[] = [];
  screens: Screen[] = [];
  newTheatre: Theatre = { theatreName: '', location: '' };
  newScreen: Screen = { screenName: '', capacity: 0 };
  showAddTheatreForm: boolean = false;
  showAddScreenForm: boolean = false;
  selectedTheatre: Theatre | null = null;

  constructor(private theatreService: TheatreService, private screenService: ScreenService) {}

  ngOnInit(): void {
    this.refreshTheatres();
    this.refreshScreens();
  }

  addTheatre(): void {
    this.theatreService.addTheatre(this.newTheatre).subscribe(() => {
      this.showAddTheatreForm = false;
      this.refreshTheatres();
    });
  }

  removeTheatre(index: number): void {
    const theatreId = this.theatres[index].id;

    if (theatreId !== undefined) {
      this.theatreService.removeTheatre(theatreId).subscribe(() => {
        this.theatres.splice(index, 1);
      });
    } else {
      console.error('Attempted to remove a theatre without a valid ID.');
    }
  }

  addScreen(): void {
    if (this.selectedTheatre) {
      // Assign the selected theatre's ID to the new screen
      this.newScreen.theatreId = this.selectedTheatre.id;

      this.screenService.addScreen(this.newScreen).subscribe(() => {
        this.showAddScreenForm = false;
        this.refreshScreens();
      });
    }
  }
  removeScreen(index: number): void {
    const screenId = this.screens[index].id;

    if (screenId !== undefined) {
      this.screenService.removeScreen(screenId).subscribe(() => {
        this.screens.splice(index, 1);
      });
    } else {
      console.error('Attempted to remove a screen without a valid ID.');
    }
  }

  toggleAddTheatreForm(): void {
    this.showAddTheatreForm = !this.showAddTheatreForm;
  }

  toggleAddScreenForm(theatre: Theatre): void {
    this.selectedTheatre = theatre;
    this.showAddScreenForm = !this.showAddScreenForm;
  }

  cancelAddTheatre(): void {
    this.showAddTheatreForm = false;
  }

  cancelAddScreen(): void {
    this.showAddScreenForm = false;
  }

  private refreshTheatres(): void {
    this.theatreService.getTheatres().subscribe((theatres) => {
      this.theatres = theatres;
    });
  }

  private refreshScreens(): void {
    this.screenService.getScreens().subscribe((screens) => {
      this.screens = screens;
    });
  }
}
