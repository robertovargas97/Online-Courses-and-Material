import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface';
import { map, tap } from 'rxjs/operators';
import { CountryMapper } from '../mappers/country.mapper';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl = 'https://restcountries.com/v3.1';

  private readonly httpClient = inject(HttpClient);

  private readonly queryCacheCapital = new Map<string, Country[]>();
  private readonly queryCacheName = new Map<string, Country[]>();
  private readonly queryCacheRegion = new Map<string, Country[]>();

  executeRequest<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  searchByCapital(searchQuery: string): Observable<Country[]> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    if (!lowerCaseSearchQuery) {
      return of([]);
    }

    if (this.queryCacheCapital.has(lowerCaseSearchQuery)) {
      return of(this.queryCacheCapital.get(lowerCaseSearchQuery) ?? []);
    }

    const url = `${this.baseUrl}/capital/${lowerCaseSearchQuery}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      tap((countries) => this.queryCacheCapital.set(lowerCaseSearchQuery, countries)),
      delay(1500),
    );
  }

  searchByCountryName(searchQuery: string): Observable<Country[]> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    if (!lowerCaseSearchQuery) {
      return of([]);
    }

    if (this.queryCacheName.has(lowerCaseSearchQuery)) {
      return of(this.queryCacheName.get(lowerCaseSearchQuery) ?? []);
    }

    const url = `${this.baseUrl}/name/${lowerCaseSearchQuery}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      tap((countries) => this.queryCacheName.set(lowerCaseSearchQuery, countries)),
      delay(1500),
    );
  }

  searchCountryByCode(searchQuery: string): Observable<Country | undefined> {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    if (!lowerCaseSearchQuery) {
      return of(undefined);
    }
    const url = `${this.baseUrl}/alpha/${lowerCaseSearchQuery}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      map((countries) => countries.at(0)),
    );
  }

  searchByRegion(region: string): Observable<Country[]> {
    const lowerCaseRegion = region.toLowerCase();
    if (!lowerCaseRegion) {
      return of([]);
    }

    const url = `${this.baseUrl}/region/${lowerCaseRegion}`;

    return this.executeRequest<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapToCountries),
      tap((countries) => this.queryCacheRegion.set(lowerCaseRegion, countries)),
      delay(1500),
    );
  }
}
