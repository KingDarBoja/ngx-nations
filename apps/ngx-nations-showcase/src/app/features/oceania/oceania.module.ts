import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import {
  flagAs,
  flagAu,
  flagCk,
  flagFj,
  flagPf,
  flagGu,
  flagKi,
  flagMh,
  flagFm,
  flagWs,
  flagSb,
  flagNr,
  flagNc,
  flagNz,
  flagNu,
  flagMp,
  flagPw,
  flagPg,
  flagPn,
  flagTo,
  flagTv,
  flagVu,
} from '@ngx-nations/icon/tw-icons';

import { OceaniaComponent } from './oceania.component';
import { OceaniaRoutingModule } from './oceania.routing';
import { NationListModule } from '../../shared/list/list.module';

@NgModule({
  declarations: [OceaniaComponent],
  imports: [
    CommonModule,
    OceaniaRoutingModule,
    NationListModule,
    NationFlagAngularModule.forChild([
      flagAs,
      flagAu,
      flagCk,
      flagFj,
      flagPf,
      flagGu,
      flagKi,
      flagMh,
      flagFm,
      flagWs,
      flagSb,
      flagNr,
      flagNc,
      flagNz,
      flagNu,
      flagMp,
      flagPw,
      flagPg,
      flagPn,
      flagTo,
      flagTv,
      flagVu,
    ]),
  ],
})
export class OceaniaModule {}
