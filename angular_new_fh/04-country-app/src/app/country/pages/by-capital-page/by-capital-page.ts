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
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(searchQuery: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countriesService.searchByCapital(searchQuery).subscribe({
      next: (countries) => {
        console.log('Entre next', countries);
        this.countries.set(countries);
      },
      error: (error) => {
        console.log('Entre error');
        this.countries.set([]);
        this.isError.set(error.error.message);
        this.isLoading.set(false);
      },
      complete: () => {
        console.log('Entre complete');
        this.isLoading.set(false);
      },
    });
  }
}
