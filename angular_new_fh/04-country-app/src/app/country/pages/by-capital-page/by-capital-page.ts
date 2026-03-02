import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'by-capital-page',
  imports: [SearchSection, CountriesList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countriesService = inject(CountriesService);

  isLoading = signal(false);
  isEmpty = signal<boolean>(true);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);
  headerIndicator = signal<string>('');

  onSearch(searchQuery: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countriesService.searchByCapital(searchQuery).subscribe({
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
