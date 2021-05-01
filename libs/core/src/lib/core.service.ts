import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { langs } from 'i18n-iso-countries';
import {
  NGX_NATIONS_CORE_CONFIG,
  NgxNationsCoreConfig,
  NgxNationLocaleEntry,
} from './core-di-tokens';

export interface NgxNationsConfiguration {
  /**
   * Observable language-aware pipes subscribe to get notified when the locale changes,
   * this is useful when pipes live in an OnPush component.
   */
  locale$: Subject<never>;

  /**
   * Returns the default locale used by i18n-iso-countries
   */
  locale(): NgxNationLocaleEntry['locale'];

  /**
   * Sets the default locale used by i18n-iso-countries
   */
  setLocale(locale: NgxNationLocaleEntry['locale']): void;
}

@Injectable({ providedIn: 'root' })
export class NgxNationsCoreService {
  readonly locale$: Subject<never> = new Subject();
  private _locale: NgxNationLocaleEntry['locale'];

  constructor(
    @Inject(NGX_NATIONS_CORE_CONFIG)
    private readonly config: NgxNationsCoreConfig,
  ) {
    this.setLocale(this.config.defaultLocale.locale);
  }

  locale(): NgxNationLocaleEntry['locale'] {
    return this._locale;
  }

  setLocale(locale: NgxNationLocaleEntry['locale']): void {
    this._locale = locale;
    this.locale$.next();
  }

  /**
   * Wrapper for `langs()` method of `i18n-iso-countries` library.
   * @returns array of registered locales.
   */
  getLocales(): string[] {
    return langs();
  }
}
