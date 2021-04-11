import { InjectionToken } from '@angular/core';
import { LocaleData } from 'i18n-iso-countries/dist/types';

export declare type NgxNationLocale =
  | 'af'
  | 'am'
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bn'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'gl'
  | 'ha'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'hy'
  | 'id'
  | 'is'
  | 'it'
  | 'ja'
  | 'ka'
  | 'kk'
  | 'km'
  | 'ko'
  | 'ku'
  | 'ky'
  | 'lt'
  | 'lv'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'ms'
  | 'nb'
  | 'nl'
  | 'nn'
  | 'no'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sd'
  | 'sk'
  | 'sl'
  | 'so'
  | 'sq'
  | 'sr'
  | 'sv'
  | 'ta'
  | 'tg'
  | 'th'
  | 'tk'
  | 'tr'
  | 'tt'
  | 'uk'
  | 'ug'
  | 'ur'
  | 'uz'
  | 'vi'
  | 'zh';

export declare type NgxNationsLocaleData = {
  locale: NgxNationLocale | string;
  countries: LocaleData['countries'];
};

export interface NgxNationsCoreConfig {
  locales?: NgxNationsLocaleData[];
  defaultLocale?: NgxNationsLocaleData;
}

export const NGX_NATIONS_CORE_CONFIG = new InjectionToken<NgxNationsCoreConfig>(
  'NGX_NATIONS_CORE_CONFIG',
);
