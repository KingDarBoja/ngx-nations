import { InjectionToken } from '@angular/core';
import { LocaleCode, LocaleData } from '@nation/i18n';

export type NgxNationLocaleEntry = {
  locale: LocaleCode | string;
  countries: LocaleData['countries'];
};

export interface NgxNationsCoreConfig {
  locales?: NgxNationLocaleEntry[];
  defaultLocale?: NgxNationLocaleEntry;
}

export const NGX_NATIONS_CORE_CONFIG = new InjectionToken<NgxNationsCoreConfig>(
  'NGX_NATIONS_CORE_CONFIG',
);
