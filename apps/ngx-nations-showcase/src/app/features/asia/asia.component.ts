import { Component } from '@angular/core';
import { AsiaCountries } from './asia-country-list';

@Component({
  template: `
    <ngx-nations-country-list
      [title]="'Asia'"
      [countries]="countries"
    ></ngx-nations-country-list>
  `,
})
export class AsiaComponent {
  countries = AsiaCountries;
}
