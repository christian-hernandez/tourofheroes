import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
//import { HEROES } from './mock_heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHero(id: number): Observable<Hero>{
    //const hero = HEROES.find(h => h.id );
    const hero = this.httpClient.get<Hero>('http://127.0.0.1:5000/detail/' + id.toString());
    this.messageService.add("the heroServ fetched the hero with id of " + id.toString());
  return hero;
  }

  //constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes');
    this.messageService.add("the heroServ fetched the heroes");
  return heroes;
  }
  updateHero(hero: Hero): Observable<Hero>{
  return this.httpClient.post<Hero>('http://127.0.0.1:5000/update',hero)
  }

}
