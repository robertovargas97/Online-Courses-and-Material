import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface';
import { map } from 'rxjs/operators';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl = 'https://restcountries.com/v3.1';

  private readonly httpClient = inject(HttpClient);

  searchByCapital(searchQuery: string): Observable<Country[]> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return this.httpClient
      .get<RESTCountry[]>(`${this.baseUrl}/capital/${lowerCaseSearchQuery}`)
      .pipe(map(CountryMapper.mapToCountries));
  }
}
