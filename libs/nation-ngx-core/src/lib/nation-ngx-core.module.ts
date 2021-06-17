import { ModuleWithProviders, NgModule } from '@angular/core';
import { registerLocale, LocaleEN } from '@nation/i18n';

import { NationNgxCoreService } from './nation-ngx-core.service';
import {
  NgxNationLocaleEntry,
  NgxNationsCoreConfig,
  NGX_NATIONS_CORE_CONFIG,
} from './nation-ngx-core-token';
import { NationNgxCoreNamePipeModule } from './pipes/nation-ngx-core-name.pipe';

export function NgxNationsLocalesFactory(
  config: Partial<NgxNationsCoreConfig>,
): NationNgxCoreService {
  const defaultConfig: NgxNationsCoreConfig = {
    locales: config.locales || [],
    defaultLocale: config.defaultLocale || LocaleEN,
  };
  const locales = new Set<NgxNationLocaleEntry>([
    ...defaultConfig.locales,
    defaultConfig.defaultLocale,
  ]);

  [...locales].forEach((locale) => registerLocale(locale));

  return new NationNgxCoreService(defaultConfig);
}

@NgModule({
  exports: [NationNgxCoreNamePipeModule],
})
export class NationNgxCoreModule {
  static forRoot(
    config: Partial<NgxNationsCoreConfig> = {},
  ): ModuleWithProviders<NationNgxCoreModule> {
    return {
      ngModule: NationNgxCoreModule,
      providers: [
        {
          provide: NGX_NATIONS_CORE_CONFIG,
          useValue: config,
        },
        {
          provide: NationNgxCoreService,
          useFactory: () => NgxNationsLocalesFactory(config),
          deps: [NGX_NATIONS_CORE_CONFIG],
        },
      ],
    };
  }
}
