import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  linkedSignal,
  signal,
  untracked,
} from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute, Router } from '@angular/router';
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

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('capital') ?? '';
  query = linkedSignal<string>(() => this.queryParam || '');

  router = inject(Router);

  queryEffect = effect(() => {
    console.log('q', this.query());
    const capital = this.query();
    if (!capital) return;

    this.router.navigate(['/countries/by-capital'], {
      queryParams: {
        capital: capital,
      },
    });
    untracked(() => this.onSearch(capital));
  });

  onSearch(searchQuery: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countriesService.searchByCapital(searchQuery).subscribe({
      next: (countries) => {
        this.isEmpty.set(countries.length === 0);
        this.headerIndicator.set(searchQuery);
        this.isLoading.set(false);
        this.countries.set(countries);
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
