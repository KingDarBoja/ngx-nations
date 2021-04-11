import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsIconModule } from '@ngx-nations/icon';
import {
  flagAs,
  flagAu,
  flagCk,
  flagFj,
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
    NgxNationsIconModule,
    SvgIconsModule.forChild([
      flagAs,
      flagAu,
      flagCk,
      flagFj,
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
