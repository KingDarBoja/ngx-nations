import { Inject, Injectable } from '@angular/core';
import {
  NgxNationsCoreConfig,
  NgxNationsLocaleData,
  NGX_NATIONS_CONFIG,
} from './types';
import { getName } from 'i18n-iso-countries';

@Injectable({ providedIn: 'root' })
export class NgxNationsCoreService {
  constructor(
    @Inject(NGX_NATIONS_CONFIG) readonly config: NgxNationsCoreConfig,
  ) {}

  // i18n-iso-countries wrappers
  getName(countryCode: string | number, lang?: NgxNationsLocaleData['locale']) {
    if (!lang) {
      lang = this.config.defaultLocale.locale;
    }

    return getName(countryCode, lang);
  }
}
