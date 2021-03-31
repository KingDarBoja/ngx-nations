import { Component } from '@angular/core';
import { AmericaCountries } from './america-country-list';

@Component({
  templateUrl: 'america.component.html',
})
export class AmericaComponent {
  countries = AmericaCountries;
}
