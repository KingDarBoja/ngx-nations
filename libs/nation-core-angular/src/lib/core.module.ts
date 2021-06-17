import { ModuleWithProviders, NgModule } from '@angular/core';
import { registerLocale, LocaleEN } from '@nation/i18n';

import { NgxNationsCoreService } from './core.service';
import {
  NgxNationLocaleEntry,
  NgxNationsCoreConfig,
  NGX_NATIONS_CORE_CONFIG,
} from './core-di-tokens';
import { NationNamePipeModule } from './pipes/nation-name.pipe';

const PIPES = [NationNamePipeModule];

export function NgxNationsLocalesFactory(
  config: NgxNationsCoreConfig,
): NgxNationsCoreService {
  const defaultConfig: NgxNationsCoreConfig = {
    locales: config.locales || [],
    defaultLocale: config.defaultLocale || LocaleEN,
  };
  const locales = new Set<NgxNationLocaleEntry>(
    [].concat(defaultConfig.locales, [defaultConfig.defaultLocale]),
  );

  [...locales].forEach((locale) => registerLocale(locale));

  return new NgxNationsCoreService(defaultConfig);
}

@NgModule({
  exports: [...PIPES],
})
export class NgxNationsCoreModule {
  static forRoot(
    config: NgxNationsCoreConfig = {},
  ): ModuleWithProviders<NgxNationsCoreModule> {
    return {
      ngModule: NgxNationsCoreModule,
      providers: [
        {
          provide: NGX_NATIONS_CORE_CONFIG,
          useValue: config,
        },
        {
          provide: NgxNationsCoreService,
          useFactory: NgxNationsLocalesFactory,
          deps: [NGX_NATIONS_CORE_CONFIG],
        },
      ],
    };
  }
}
