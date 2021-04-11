import { InjectionToken } from '@angular/core';

export interface NgxNationsIconConfig {
  showName?: boolean;
}

export const NGX_NATIONS_ICON_CONFIG = new InjectionToken<NgxNationsIconConfig>(
  'NGX_NATIONS_ICON_CONFIG',
);
