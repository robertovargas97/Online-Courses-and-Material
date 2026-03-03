import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { NotFound } from '../../components/not-found/not-found';
import { LoadingSection } from '../../components/loading-section/loading-section';
import { CountryDetails } from './country-details/country-details';
@Component({
  selector: 'country-page',
  imports: [NotFound, LoadingSection, CountryDetails],
  templateUrl: './country-page.html',
})
export class CountryPage implements OnInit {
  countryData = signal<Country | undefined>(undefined);
  countriesService = inject(CountriesService);
  countryCode = inject(ActivatedRoute).snapshot.params['countryCode'];
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(true);

  getCountryData() {
    this.countriesService.searchCountryByCode(this.countryCode).subscribe({
      next: (country) => {
        this.countryData.set(country);
        this.isLoading.set(false);
        console.log(this.countryData());
      },
      error: (error) => {
        this.errorMessage.set('There is no country with the code: ' + this.countryCode);
        this.isLoading.set(false);
        console.error(error);
      },
    });
  }

  ngOnInit() {
    this.getCountryData();
  }
}
