import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CountryAlert } from '../country-alert/country-alert';
import { Location } from '@angular/common';

@Component({
  selector: 'country-not-found',
  imports: [CountryAlert],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  location = inject(Location);
  message = input.required<string>();

  goBack() {
    this.location.back();
  }
}
