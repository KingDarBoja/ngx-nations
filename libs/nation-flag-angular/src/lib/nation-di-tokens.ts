import { InjectionToken } from '@angular/core';
import { Nation } from '@nation/core-angular';

export interface NgxNationFlagConfig {
  icons?: NationFlagSVG[];
  showName: boolean;
  direction: 'row' | 'column';
  position: 'start' | 'end';
}

export interface NationFlagSVG {
  name: Nation;
  data: string;
}

export interface NgxNationFlagIconConfig {
  icons?: NationFlagSVG[];
}

export const NGX_NATION_FlAG_CONFIG = new InjectionToken<NgxNationFlagConfig>(
  'NGX_NATION_FlAG_CONFIG',
);
export const NGX_NATION_FLAG_ICON_CONFIG = new InjectionToken<NgxNationFlagIconConfig>(
  'NGX_NATION_FlAG_CONFIG',
);
