import { Component } from '@angular/core';
import { NgxNationsCoreService } from '@ngx-nations/core';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngx-nations-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngx-nations-showcase';
  continents = ['america', 'africa', 'asia'];
  locales = this.config.getLocales();
  currentLocale$ = this.config.locale$.pipe(
    startWith([]),
    map(() => this.config.locale())
  );
  menuVisible = false;

  constructor(private readonly config: NgxNationsCoreService) {}

  changeLocale(locale: string) {
    this.config.setLocale(locale);
    this.menuVisible = false;
  }
}
