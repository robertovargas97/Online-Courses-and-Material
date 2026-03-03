import type { RESTCountry } from '../interfaces/rest-countries.interface';
import type { Country } from '../interfaces/country.interface';

export class CountryMapper {
  static readonly mapIntoCountryType = (restCountry: RESTCountry): Country => {
    return {
      capital: restCountry.capital?.join(', '),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSVG: restCountry.flags.svg,
      commonName: restCountry.name.common,
      officialName: restCountry.name.official,
      population: restCountry.population,
      spanishName: restCountry.translations?.['spa']?.common ?? '',
      region: restCountry.region,
    };
  };

  static readonly mapToCountries = (countries: RESTCountry[]): Country[] => {
    return countries.map(CountryMapper.mapIntoCountryType);
  };
}
