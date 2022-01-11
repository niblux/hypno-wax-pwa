import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meditation } from '../models/Meditation';

@Injectable({
  providedIn: 'root',
})
export class MeditationService {
  constructor() {}

  public meditations: Meditation[] = [
    {
      name: 'Wax Meditation',
      title: 'Fade away with this relaxing hypno therapy',
      headerImage: 'image path',
    },
  ];

  getMeditations(): Observable<any> {
    return of(true);
  }
}
