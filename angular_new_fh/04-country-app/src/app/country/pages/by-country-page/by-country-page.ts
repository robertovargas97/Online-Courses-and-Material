import { Component } from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';

@Component({
  selector: 'by-country-page',
  imports: [SearchSection, CountriesList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {}
