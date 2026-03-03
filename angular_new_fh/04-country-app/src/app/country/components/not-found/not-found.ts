import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CountryAlert } from '../country-alert/country-alert';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'country-not-found',
  imports: [CountryAlert, RouterLink],
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
