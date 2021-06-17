import {
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationNgxCoreModule } from '@nation/ngx-core';
import { NationNgxFlagComponent } from './nation-ngx-flag.component';
import {
  NationFlagSVG,
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
  NGX_NATION_FLAG_ICON_CONFIG,
} from './nation-ngx-flag-token';
import { NationNgxFlagService } from './nation-ngx-flag.service';

@NgModule({
  imports: [CommonModule, NationNgxCoreModule],
  declarations: [NationNgxFlagComponent],
  exports: [NationNgxFlagComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NationNgxFlagModule {
  static forRoot(
    config: Partial<NgxNationFlagConfig> = {},
  ): ModuleWithProviders<NationNgxFlagModule> {
    return {
      ngModule: NationNgxFlagModule,
      providers: [
        {
          provide: NGX_NATION_FlAG_CONFIG,
          useValue: config,
        },
        NationNgxFlagService,
      ],
    };
  }

  static forChild(
    icons: NationFlagSVG[],
  ): ModuleWithProviders<NationNgxFlagModule> {
    return {
      ngModule: NationNgxFlagModule,
      providers: [
        {
          provide: NGX_NATION_FLAG_ICON_CONFIG,
          useValue: icons,
        },
      ],
    };
  }

  constructor(
    @Optional() @Inject(NGX_NATION_FLAG_ICON_CONFIG) icons: NationFlagSVG[],
    private registry: NationNgxFlagService,
  ) {
    if (icons) {
      this.registry.register(icons);
    }
  }
}
