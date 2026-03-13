import { Component, signal } from '@angular/core';
import { DecimalPipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'numbers-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {
  totalSells = signal(12_344_556.5679);
  percentage = signal(0.1234567);
  number = signal(1234.567);
}
