import { Component, input } from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'by-country-page',
  imports: [SearchSection, CountriesList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countries = input.required<RESTCountry[]>();
}
