import { Component } from '@angular/core';
import { NationNgxCoreService } from '@nation/ngx-core';
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
    map(() => this.config.locale()),
  );
  menuVisible = false;
  readonly installCode = `
  npm install @ngx-nations
  yarn add @ngx-nations
  `;
  readonly importCode = `
  import { NationNgxFlagModule } from '@nation/ngx-flag';
  import { nationFlagUa } from '@nation/tw-flags';
  import { LocaleEN, LocaleES, LocaleFR, LocalePT } from '@nation/i18n';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      // ... Other module imports
      NgxNationsCoreModule.forRoot({
        locales: [LocaleEN, LocaleES, LocaleFR, LocalePT],
      }),
      NationNgxFlagModule.forRoot({
        variant: 'combined',
        icons: [nationFlagUa],
      }),
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  `;
  readonly lazyCode = `
  import { nationFlagXX } from '@nation/tw-flags';

  @NgModule({
    imports: [
      NationNgxFlagModule.forChild([nationFlagXX]),
    ],
  })
  export class AppModule {}
  `;
  readonly configCode = `
  <nation-ngx-flag
    [nation]="'to'"
    [variant]="'combined'"
    fontSize="100px"
  ></nation-ngx-flag>
  `;

  constructor(private readonly config: NationNgxCoreService) {}

  changeLocale(locale: string) {
    this.config.setLocale(locale);
    this.menuVisible = false;
  }
}
