import { MeditationService } from './services/meditation.service';
import { Component } from '@angular/core';
import { Meditation } from './models/Meditation';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(meditationService: MeditationService) {
    meditationService
      .getMeditations()
      .pipe(tap((medis: Meditation[]) => console.log(medis)));
  }
}
