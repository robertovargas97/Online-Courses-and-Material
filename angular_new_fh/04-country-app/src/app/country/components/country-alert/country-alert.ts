import { Component, input } from '@angular/core';

@Component({
  selector: 'country-alert',
  imports: [],
  templateUrl: './country-alert.html',
})
export class CountryAlert {
  message = input.required<string>();
  alertType = input.required<string>();
}
