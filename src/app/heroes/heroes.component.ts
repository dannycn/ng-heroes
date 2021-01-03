import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {

    name = name.trim();

    if (!name) { return; }

    this.heroService.addHero({ name } as Hero)
      .subscribe(x => this.heroes.push(x));
  }

  delete(hero: Hero): void {

    this.heroService.deleteHero(hero)
      .subscribe(_ => this.getHeroes());
  }
}
