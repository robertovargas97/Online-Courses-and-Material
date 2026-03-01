import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-list',
  imports: [],
  templateUrl: './countries-list.html',
})
export class CountriesList {
  countries = input.required<Country[]>();
}
