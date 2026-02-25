import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.html',
  styleUrls: ['./styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  increaseValue = 1;
  decreaseValue = 1;
  counterSignal = signal(10);

  constructor() {}

  increaseCounter(value: number) {
    this.counter += value;

    this.counterSignal.update((current) => current + value);
  }

  decreaseCounter(value: number) {
    this.counter -= value;

    this.counterSignal.update((current) => current - value);
  }

  resetCounter() {
    this.counter = 10;

    this.counterSignal.set(10);
  }
}
