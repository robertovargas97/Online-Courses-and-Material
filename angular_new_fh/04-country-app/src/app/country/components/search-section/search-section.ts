import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-section',
  imports: [],
  templateUrl: './search-section.html',
})
export class SearchSection {
  placeholder = input.required<string>();
  value = output<string>();
}
