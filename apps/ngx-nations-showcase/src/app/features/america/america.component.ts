import { Component } from '@angular/core';
import { AmericaCountries } from './america-country-list';

@Component({
  template: `
    <ngx-nations-country-list
      [title]="'America'"
      [countries]="countries"
    ></ngx-nations-country-list>
  `,
})
export class AmericaComponent {
  countries = AmericaCountries;
}
