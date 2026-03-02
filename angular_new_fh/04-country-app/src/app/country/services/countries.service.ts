import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface';
import { map } from 'rxjs/operators';
import { CountryMapper } from '../mappers/country.mapper';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl = 'https://restcountries.com/v3.1';

  private readonly httpClient = inject(HttpClient);

  executeRequest<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  searchByCapital(searchQuery: string): Observable<Country[]> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const url = `${this.baseUrl}/capital/${lowerCaseSearchQuery}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      delay(1500),
    );
  }

  searchByCountryName(searchQuery: string): Observable<Country[]> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const url = `${this.baseUrl}/name/${lowerCaseSearchQuery}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      delay(1500),
    );
  }

  searchCountryByCode(searchQuery: string): Observable<Country | undefined> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const url = `${this.baseUrl}/alpha/${lowerCaseSearchQuery}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      map((countries) => countries.at(0)),
    );
  }
}
