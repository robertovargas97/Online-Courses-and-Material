import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragon-ball/character-list/character-list';
import { CharacterAdd } from '../../components/dragon-ball/character-add/character-add';
import { DragonBallService } from '../../services/dragon-ball.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dragon-ball-super',
  templateUrl: './dragon-ball-super-page.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonBallSuperPageComponent {
  // # Traditional way to inject a service
  // constructor(private dragonBallService: DragonBallService) {}

  // # Recommended way to inject a service
  dragonBallService = inject(DragonBallService);

  characters = this.dragonBallService.characters;

  addCharacter(character: Character) {
    this.dragonBallService.addCharacter(character);
  }
}
