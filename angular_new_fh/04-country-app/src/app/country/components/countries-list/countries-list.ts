import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'countries-list',
  imports: [DecimalPipe],
  templateUrl: './countries-list.html',
})
export class CountriesList {
  countries = input.required<Country[]>();
  headerIndicator = input<string>('');
}
