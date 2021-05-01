import { InjectionToken } from '@angular/core';

export interface NgxNationsIconConfig {
  showName?: boolean;
  direction?: 'row' | 'column';
  position?: 'start' | 'end';
}

export const NGX_NATIONS_ICON_CONFIG = new InjectionToken<NgxNationsIconConfig>(
  'NGX_NATIONS_ICON_CONFIG',
);
