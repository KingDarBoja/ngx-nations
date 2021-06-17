import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { langs } from '@nation/i18n';
import {
  NGX_NATIONS_CORE_CONFIG,
  NgxNationsCoreConfig,
  NgxNationLocaleEntry,
} from './nation-ngx-core-token';

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
export class NationNgxCoreService {
  readonly locale$: BehaviorSubject<
    NgxNationLocaleEntry['locale']
  > = new BehaviorSubject(this.config.defaultLocale.locale);
  private _locale: NgxNationLocaleEntry['locale'] = this.config.defaultLocale
    .locale;

  constructor(
    @Inject(NGX_NATIONS_CORE_CONFIG)
    private readonly config: NgxNationsCoreConfig,
  ) {}

  locale(): NgxNationLocaleEntry['locale'] {
    return this._locale;
  }

  setLocale(locale: NgxNationLocaleEntry['locale']): void {
    this._locale = locale;
    this.locale$.next(locale);
  }

  /**
   * Wrapper for `langs()` method of `i18n-iso-countries` library.
   * @returns array of registered locales.
   */
  getLocales(): string[] {
    return langs();
  }
}
