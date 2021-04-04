import { Component } from '@angular/core';
import { getName, registerLocale } from 'i18n-iso-countries';
import { LocaleEN } from 'i18n-iso-countries/langs';

@Component({
  selector: 'ngx-nations-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngx-nations-showcase';
  continents = ['america', 'africa', 'asia'];

  constructor() {
    registerLocale(LocaleEN);
    console.log(getName('co', 'en'));
    console.log(getName('co', 'es'));
  }
}
