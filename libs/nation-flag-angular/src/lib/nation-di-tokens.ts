import { InjectionToken } from '@angular/core';

export interface NgxNationFlagConfig {
  showName: boolean;
  direction: 'row' | 'column';
  position: 'start' | 'end';
}

export const NGX_NATION_FlAG_CONFIG = new InjectionToken<NgxNationFlagConfig>(
  'NGX_NATION_FlAG_CONFIG',
);
