import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchSection } from '../../components/search-section/search-section';
import { CountriesList } from '../../components/countries-list/countries-list';

@Component({
  selector: 'by-capital-page',
  imports: [SearchSection, CountriesList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {}
