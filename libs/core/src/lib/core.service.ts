import { Inject, Injectable } from '@angular/core';
import {
  NgxNationsCoreConfig,
  NgxNationsLocaleData,
  NGX_NATIONS_CONFIG,
} from './types';
import { Subject } from 'rxjs';
import { langs } from 'i18n-iso-countries';

export interface NgxNationsConfiguration {
  /**
   * Observable language-aware pipes subscribe to get notified when the locale changes,
   * this is useful when pipes live in an OnPush component.
   */
  locale$: Subject<never>;

  /**
   * Returns the default locale used by i18n-iso-countries
   */
  locale(): NgxNationsLocaleData['locale'];

  /**
   * Sets the default locale used by i18n-iso-countries
   */
  setLocale(locale: NgxNationsLocaleData['locale']): void;
}

@Injectable({ providedIn: 'root' })
export class NgxNationsCoreService {
  locale$: Subject<never> = new Subject();
  private _locale: NgxNationsLocaleData['locale'];

  constructor(
    @Inject(NGX_NATIONS_CONFIG) readonly config: NgxNationsCoreConfig,
  ) {
    this.setLocale(config.defaultLocale.locale);
  }

  locale(): NgxNationsLocaleData['locale'] {
    return this._locale;
  }

  setLocale(locale: NgxNationsLocaleData['locale']): void {
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
