import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroesService: HeroesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroService: Hero ID ${hero.id}`)
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
