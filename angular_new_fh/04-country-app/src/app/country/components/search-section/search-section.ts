import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-section',
  imports: [],
  templateUrl: './search-section.html',
})
export class SearchSection {
  debounceTime = input(500);
  placeholder = input.required<string>();
  value = output<string>();

  inputValue = signal('');

  emitSearchValue = (input: HTMLInputElement) => {
    this.value.emit(input.value);
    this.resetInputValue(input);
  };

  resetInputValue = (input: HTMLInputElement) => {
    input.value = '';
  };

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(() => clearTimeout(timeout));
  });
}
