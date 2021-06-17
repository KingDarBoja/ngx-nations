import {
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxNationsCoreModule } from '@nation/ngx-core';
import { NationFlagAngularComponent } from './nation-flag-angular.component';
import {
  NationFlagSVG,
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
  NGX_NATION_FLAG_ICON_CONFIG,
} from './nation-di-tokens';
import { NationFlagAngularRegistry } from './nation-flag-angular.service';

@NgModule({
  imports: [CommonModule, NgxNationsCoreModule],
  declarations: [NationFlagAngularComponent],
  exports: [NationFlagAngularComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NationFlagAngularModule {
  static forRoot(
    config: Partial<NgxNationFlagConfig> = {},
  ): ModuleWithProviders<NationFlagAngularModule> {
    return {
      ngModule: NationFlagAngularModule,
      providers: [
        {
          provide: NGX_NATION_FlAG_CONFIG,
          useValue: config,
        },
        NationFlagAngularRegistry,
      ],
    };
  }

  static forChild(
    icons: NationFlagSVG[],
  ): ModuleWithProviders<NationFlagAngularModule> {
    return {
      ngModule: NationFlagAngularModule,
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
    private nationFlagRegistry: NationFlagAngularRegistry,
  ) {
    if (icons) {
      this.nationFlagRegistry.register(icons);
    }
  }
}
