import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsCoreModule } from '@ngx-nations/core';
import { NationFlagAngularComponent } from './nation-flag-angular.component';
import {
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
} from './nation-di-tokens';

@NgModule({
  imports: [CommonModule, SvgIconsModule, NgxNationsCoreModule],
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
          useValue: {
            showName: config?.showName ?? true,
            direction: config?.direction ?? 'column',
            position: config?.position ?? 'end',
          } as NgxNationFlagConfig,
        },
      ],
    };
  }
}
