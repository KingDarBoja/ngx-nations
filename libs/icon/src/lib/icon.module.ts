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
    config: NgxNationsIconConfig = {
      showName: true,
    },
  ): ModuleWithProviders<NgxNationsIconModule> {
    return {
      ngModule: NgxNationsIconModule,
      providers: [
        {
          provide: NGX_NATIONS_ICON_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
