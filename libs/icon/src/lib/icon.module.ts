import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsCoreModule } from '@ngx-nations/core';
import { NgxNationsIconComponent } from './icon.component';
import { NgxNationsIconConfig, NGX_NATIONS_ICON_CONFIG } from './types';

@NgModule({
  imports: [CommonModule, SvgIconsModule, NgxNationsCoreModule],
  declarations: [NgxNationsIconComponent],
  exports: [NgxNationsIconComponent],
})
export class NgxNationsIconModule {
  static forRoot(
    config: NgxNationsIconConfig = {},
  ): ModuleWithProviders<NgxNationsIconModule> {
    return {
      ngModule: NgxNationsIconModule,
      providers: [
        {
          provide: NGX_NATIONS_ICON_CONFIG,
          useValue: {
            showName: config?.showName ?? true,
            direction: config?.direction ?? 'column',
            position: config?.position ?? 'end',
          } as NgxNationsIconConfig,
        },
      ],
    };
  }
}
