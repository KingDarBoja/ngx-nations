import { Inject, Injectable } from '@angular/core';
import {
  NationFlagSVG,
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
} from './nation-di-tokens';

@Injectable()
export class NationFlagAngularRegistry {
  private readonly flagRegistryMap = new Map<string, string>();

  constructor(@Inject(NGX_NATION_FlAG_CONFIG) config: NgxNationFlagConfig) {
    if (config.icons) {
      this.register(config.icons);
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
