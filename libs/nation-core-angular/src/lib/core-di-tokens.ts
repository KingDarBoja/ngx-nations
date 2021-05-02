import { InjectionToken } from '@angular/core';
import { NationLocale } from './types';
import { LocaleData } from '@nation/i18n';

export declare type NgxNationLocaleEntry = {
  locale: NationLocale | string;
  countries: LocaleData['countries'];
};

export interface NgxNationsCoreConfig {
  locales?: NgxNationLocaleEntry[];
  defaultLocale?: NgxNationLocaleEntry;
}

export const NGX_NATIONS_CORE_CONFIG = new InjectionToken<NgxNationsCoreConfig>(
  'NGX_NATIONS_CORE_CONFIG',
);
