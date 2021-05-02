import { InjectionToken } from '@angular/core';

export interface NgxNationFlagConfig {
  icons?: NationFlagSVG[];
  showName: boolean;
  direction: 'row' | 'column';
  position: 'start' | 'end';
}

export interface NationFlagSVG {
  name: string;
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
