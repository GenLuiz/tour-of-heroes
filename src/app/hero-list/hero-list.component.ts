import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './../hero/hero';
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;  
  constructor(private heroService:HeroService, private router: Router) { }

 ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    // Simulate server latency with 2 second delay
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name:string):void{
    name = name.trim();
    if (!name) {
      return; 
    }
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero:Hero):void{
    this.heroService.delete(hero.id)
    .then(() => {
      this.heroes = this.heroes.filter(h =>  h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }
}
