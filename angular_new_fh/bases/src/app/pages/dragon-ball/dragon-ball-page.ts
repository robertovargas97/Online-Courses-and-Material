import { Component, signal, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball-page.html',
  imports: [
    // NgClass,
  ],
})
export class DragonBallPageComponent {
  newName = signal('');
  newPower = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 7000 },
    // { id: 4, name: 'Gohan', power: 6000 },
    // { id: 5, name: 'Yamcha', power: 500 },
  ]);

  addCharacter(character: { name: string; power: number }) {
    if (!character.name || !character.power) {
      return;
    }

    const lastId = this.characters().length > 0 ? this.characters().length + 1 : 1;

    const existingCharacter = this.characters().filter((c) => c.name === character.name);

    if (existingCharacter.length === 0) {
      const newCharacter = { ...character, id: lastId };
      this.characters.update((characters) => [...characters, newCharacter]);
      this.resetInputs();
    }
  }

  resetInputs() {
    this.newName.set('');
    this.newPower.set(0);
  }

  parseToNumber(value: string): number {
    return parseInt(value);
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
