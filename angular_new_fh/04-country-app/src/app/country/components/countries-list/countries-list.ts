import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingSection } from '../loading-section/loading-section';
import { CountryAlert } from '../country-alert/country-alert';

@Component({
  selector: 'countries-list',
  imports: [DecimalPipe, RouterLink, LoadingSection, CountryAlert],
  templateUrl: './countries-list.html',
})
export class CountriesList {
  countries = input.required<Country[]>();
  headerIndicator = input<string>('');
  isEmpty = input<boolean>(true);
  isLoading = input<boolean>(false);
  isError = input<string | null>(null);
}
