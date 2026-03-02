import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CountryListAlert } from '../../components/country-list-alert/country-list-alert';
@Component({
  selector: 'by-capital-page',
  imports: [SearchSection, CountriesList, CountryListAlert],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countriesService = inject(CountriesService);

  isLoading = signal(false);
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
        this.headerIndicator.set(searchQuery);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isError.set('Countries with capital ' + searchQuery + ' not found');
        this.countries.set([]);
        this.isLoading.set(false);
        this.headerIndicator.set('');
      },
    });
  }
}
