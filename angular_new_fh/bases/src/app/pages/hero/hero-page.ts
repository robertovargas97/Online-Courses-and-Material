import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription = computed(() => `${this.name()} - ${this.age()}`);

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

  capitalizeName = computed(() => this.name().toUpperCase());
}
