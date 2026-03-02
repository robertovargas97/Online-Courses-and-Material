import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CountryAlert } from '../../components/country-alert/country-alert';
@Component({
  selector: 'country-page',
  imports: [CountryAlert, RouterLink],
  templateUrl: './country-page.html',
})
export class CountryPage implements OnInit {
  countryData = signal<Country | undefined>(undefined);
  countriesService = inject(CountriesService);
  countryCode = inject(ActivatedRoute).snapshot.params['countryCode'];
  errorMessage = signal<string>('');

  getCountryData() {
    this.countriesService.searchCountryByCode(this.countryCode).subscribe({
      next: (country) => {
        this.countryData.set(country);
        console.log(this.countryData());
      },
      error: (error) => {
        this.errorMessage.set('There is no country with the code: ' + this.countryCode);
        console.error(error);
      },
    });
  }

  ngOnInit() {
    this.getCountryData();
  }
}
