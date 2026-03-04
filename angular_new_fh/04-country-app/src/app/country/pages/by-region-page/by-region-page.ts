import { Component, inject, signal } from '@angular/core';
import { CountriesList } from '../../components/countries-list/countries-list';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';

@Component({
  selector: 'by-region-page',
  imports: [CountriesList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countriesService = inject(CountriesService);

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
  selectedRegion = signal<Region | null>(null);
  countries = signal<Country[]>([]);
  isError = signal<string | null>(null);
  isEmpty = signal<boolean>(true);
  headerIndicator = signal<string>('');
  isLoading = signal<boolean>(false);

  onClickRegionButton(region: Region, event: MouseEvent) {
    setTimeout(() => {
      (document.activeElement as HTMLElement | null)?.blur();
    });
    this.selectedRegion.set(region);
    this.searchByRegion(this.selectedRegion()!);
  }

  searchByRegion(region: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countriesService.searchByRegion(region).subscribe({
      next: (countries) => {
        this.countries.set(countries);
        this.isEmpty.set(countries.length === 0);
        this.headerIndicator.set(region);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isError.set('There was an error searching with the value: ' + region);
        this.countries.set([]);
        this.isEmpty.set(true);
        this.isLoading.set(false);
        this.headerIndicator.set('');
        console.error(error);
      },
    });
  }
}
