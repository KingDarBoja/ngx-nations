import { Component } from '@angular/core';
import { AfricaCountries } from './africa-country-list';

@Component({
  template: `
    <ngx-nations-country-list
      [title]="'Africa'"
      [countries]="countries"
    ></ngx-nations-country-list>
  `,
})
export class AfricaComponent {
  countries = AfricaCountries;
}
