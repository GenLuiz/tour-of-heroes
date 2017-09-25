import { Hero } from './../hero/hero';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http:Http){}

  private handleError(error:any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error );
  }
  
  getHeroes():Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
    .toPromise().then(response => response.json().data as Hero[])
    .catch(this.handleError);
  }

  getHero(id:number):Promise<Hero>{
    const url=`${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

  // Simulate server latency with 2 second delay
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}

