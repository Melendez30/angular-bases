import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 28;


  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName(): string{
    return this.name.toUpperCase();

  }

  changeHero(): void
  {
    this.name = 'Spiderman';
  }

  changeAge(): void
  {
    this.age = 35;
  }

  resetForm(): void
  {
    this.name = 'Spiderman';
    this.age = 28;
  }

}
