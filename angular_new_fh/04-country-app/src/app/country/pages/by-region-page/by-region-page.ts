import { Component, input } from '@angular/core';
import { CountriesList } from '../../components/countries-list/countries-list';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'by-region-page',
  imports: [CountriesList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countries = input.required<RESTCountry[]>();
}
