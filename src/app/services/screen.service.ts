// screen.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Screen } from 'src/app/models/screen';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private apiUrl = 'http://localhost:3000/screens';

  constructor(private http: HttpClient) {}

  getScreens(): Observable<Screen[]> {
    return this.http.get<Screen[]>(this.apiUrl);
  }

  addScreen(newScreen: Screen): Observable<Screen> {
    return this.http.post<Screen>(this.apiUrl, newScreen);
  }

  removeScreen(screenId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${screenId}`;
    return this.http.delete<void>(deleteUrl);
  }
}
