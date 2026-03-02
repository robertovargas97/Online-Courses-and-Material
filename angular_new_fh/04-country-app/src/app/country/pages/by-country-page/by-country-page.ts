import { Component, inject, signal } from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country-page',
  imports: [SearchSection, CountriesList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countriesService = inject(CountriesService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);
  headerIndicator = signal<string>('');
  isEmpty = signal<boolean>(true);

  onSearch(searchQuery: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countriesService.searchByCountryName(searchQuery).subscribe({
      next: (countries) => {
        this.countries.set(countries);
        this.isEmpty.set(countries.length === 0);
        this.headerIndicator.set(searchQuery);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isError.set('There was an error searching with the value: ' + searchQuery);
        this.countries.set([]);
        this.isEmpty.set(true);
        this.isLoading.set(false);
        this.headerIndicator.set('');
        console.error(error);
      },
    });
  }
}
