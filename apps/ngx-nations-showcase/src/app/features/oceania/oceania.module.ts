import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  nationFlagAs,
  nationFlagAu,
  nationFlagCk,
  nationFlagFj,
  nationFlagPf,
  nationFlagGu,
  nationFlagKi,
  nationFlagMh,
  nationFlagFm,
  nationFlagWs,
  nationFlagSb,
  nationFlagNr,
  nationFlagNc,
  nationFlagNz,
  nationFlagNu,
  nationFlagMp,
  nationFlagPw,
  nationFlagPg,
  nationFlagPn,
  nationFlagTo,
  nationFlagTv,
  nationFlagVu,
} from '@nation/tw-flags';
import { NationFlagAngularModule } from '@nation/ngx-flag';

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
      nationFlagAs,
      nationFlagAu,
      nationFlagCk,
      nationFlagFj,
      nationFlagPf,
      nationFlagGu,
      nationFlagKi,
      nationFlagMh,
      nationFlagFm,
      nationFlagWs,
      nationFlagSb,
      nationFlagNr,
      nationFlagNc,
      nationFlagNz,
      nationFlagNu,
      nationFlagMp,
      nationFlagPw,
      nationFlagPg,
      nationFlagPn,
      nationFlagTo,
      nationFlagTv,
      nationFlagVu,
    ]),
  ],
})
export class OceaniaModule {}
