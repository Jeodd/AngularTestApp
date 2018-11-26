import { Injectable } from '@angular/core';
import { Hero} from './hero';
import {HEROES} from './db';
import {Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private ms: MessagesService) { }

  getHeroes(): Observable<Hero> {
    // TODO: send the message _after_ fetching the heroes
    this.ms.add('HeroService : Hero Fetched');
    return of (HEROES);
  }
}
