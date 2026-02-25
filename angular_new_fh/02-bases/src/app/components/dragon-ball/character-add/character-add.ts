import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  newName = signal('');
  newPower = signal(0);

  // # Value to emit
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.newName() || !this.newPower()) {
      return;
    }

    const newCharacter = {
      name: this.newName(),
      power: this.newPower(),
      id: Math.floor(Math.random() * 1000),
    };

    this.newCharacter.emit(newCharacter);
    this.resetInputs();
  }

  resetInputs() {
    this.newName.set('');
    this.newPower.set(0);
  }
}
