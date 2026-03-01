import { Component } from '@angular/core';
import { CountriesList } from '../../components/countries-list/countries-list';

@Component({
  selector: 'by-region-page',
  imports: [CountriesList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {}
