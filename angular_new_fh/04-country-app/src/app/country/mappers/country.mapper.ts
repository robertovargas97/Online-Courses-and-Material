import type { RESTCountry } from '../interfaces/rest-countries.interface';
import type { Country } from '../interfaces/country.interface';

export class CountryMapper {
  static readonly mapIntoCountryType = (restCountry: RESTCountry): Country => {
    return {
      capital: restCountry.capital?.join(', '),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSVG: restCountry.flags.svg,
      name: restCountry.name.common,
      population: restCountry.population,
      spanishName: restCountry.translations?.['spa']?.common ?? '',
    };
  };

  static readonly mapToCountries = (countries: RESTCountry[]): Country[] => {
    return countries.map(CountryMapper.mapIntoCountryType);
  };
}
