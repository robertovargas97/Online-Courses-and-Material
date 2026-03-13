import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  cardTitle = input<string>();
}
