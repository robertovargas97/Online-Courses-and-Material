import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-section',
  imports: [],
  templateUrl: './search-section.html',
})
export class SearchSection {
  placeholder = input.required<string>();
  value = output<string>();

  emitSearchValue = (input: HTMLInputElement) => {
    this.value.emit(input.value);
    this.resetInputValue(input);
  };

  resetInputValue = (input: HTMLInputElement) => {
    input.value = '';
  };
}
