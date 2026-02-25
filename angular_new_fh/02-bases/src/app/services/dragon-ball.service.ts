import { Injectable, effect, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const CHARACTER_STORAGE_KEY = 'characters';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem(CHARACTER_STORAGE_KEY);
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem(CHARACTER_STORAGE_KEY, JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    if (!character) return;
    const existingCharacter = this.characters().filter((c) => c.name === character.name);

    if (existingCharacter.length === 0) {
      this.characters.update((currentCharactersList) => [...currentCharactersList, character]);
    }
  }
}
