import { Inject, Injectable } from '@angular/core';
import {
  NationFlagSVG,
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
} from './nation-ngx-flag-token';

@Injectable()
// export class NationFlagAngularRegistry {
export class NationNgxFlagService {
  private readonly flagRegistryMap = new Map<string, string>();

  constructor(@Inject(NGX_NATION_FlAG_CONFIG) private readonly config: NgxNationFlagConfig) {
    if (this.config.icons) {
      this.register(this.config.icons);
    }
  }

  getAll() {
    return this.flagRegistryMap;
  }

  get(key: NationFlagSVG['name']) {
    return this.flagRegistryMap.get(key);
  }

  register(icons: NationFlagSVG[]) {
    for (const { name, data } of icons) {
      if (!this.flagRegistryMap.has(name)) {
        this.flagRegistryMap.set(name, data);
      }
    }
  }
}
