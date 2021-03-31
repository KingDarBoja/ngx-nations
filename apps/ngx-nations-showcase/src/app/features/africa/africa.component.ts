import { Component } from '@angular/core';
import { AfricaCountries } from './africa-country-list';

@Component({
  templateUrl: 'africa.component.html',
})
export class AfricaComponent {
  countries = AfricaCountries;
}
