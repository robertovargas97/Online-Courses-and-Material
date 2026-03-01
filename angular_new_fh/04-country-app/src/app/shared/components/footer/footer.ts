import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
