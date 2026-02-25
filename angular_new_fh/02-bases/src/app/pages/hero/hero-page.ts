import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizeName = computed(() => this.name().toUpperCase());

  changeHero = () => {
    this.name.set('Spiderman');
    this.age.set(25);
  };

  resetForm = () => {
    this.name.set('Ironman');
    this.age.set(45);
  };

  changeAge = () => {
    this.age.update((age) => 60);
  };
}
