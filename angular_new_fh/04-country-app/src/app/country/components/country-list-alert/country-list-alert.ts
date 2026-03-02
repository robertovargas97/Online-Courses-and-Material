import { Component, input } from '@angular/core';

@Component({
  selector: 'country-list-alert',
  imports: [],
  templateUrl: './country-list-alert.html',
})
export class CountryListAlert {
  message = input.required<string>();
  alertType = input.required<string>();
}
