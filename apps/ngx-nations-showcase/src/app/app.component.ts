import { Component } from '@angular/core';
import { NgxNationsCoreService } from '@ngx-nations/core';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngx-nations-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly title = 'ngx-nations-showcase';
  readonly continents = ['america', 'africa', 'asia', 'europe', 'oceania'];
  readonly locales = this.config.getLocales();
  readonly currentLocale$ = this.config.locale$.pipe(
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
