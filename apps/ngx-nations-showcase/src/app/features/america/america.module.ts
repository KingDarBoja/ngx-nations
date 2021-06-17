import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  nationFlagAg,
  nationFlagAr,
  nationFlagAw,
  nationFlagBb,
  nationFlagBo,
  nationFlagBr,
  nationFlagBs,
  nationFlagBz,
  nationFlagCa,
  nationFlagCl,
  nationFlagCo,
  nationFlagCr,
  nationFlagCu,
  nationFlagDm,
  nationFlagDo,
  nationFlagEc,
  nationFlagGd,
  nationFlagGt,
  nationFlagGy,
  nationFlagHn,
  nationFlagHt,
  nationFlagJm,
  nationFlagKn,
  nationFlagLc,
  nationFlagMx,
  nationFlagNi,
  nationFlagPa,
  nationFlagPe,
  nationFlagPr,
  nationFlagPy,
  nationFlagSr,
  nationFlagSv,
  nationFlagTt,
  nationFlagUs,
  nationFlagUy,
  nationFlagVc,
  nationFlagVe,
} from '@nation/tw-flags';
import { NationFlagAngularModule } from '@nation/ngx-flag';

import { AmericaComponent } from './america.component';
import { AmericaRoutingModule } from './america.routing';
import { NationListModule } from '../../shared/list/list.module';

@NgModule({
  declarations: [AmericaComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule,
    NationListModule,
    NationFlagAngularModule.forChild([
      nationFlagAg,
      nationFlagAr,
      nationFlagAw,
      nationFlagBb,
      nationFlagBo,
      nationFlagBr,
      nationFlagBs,
      nationFlagBz,
      nationFlagCa,
      nationFlagCl,
      nationFlagCo,
      nationFlagCr,
      nationFlagCu,
      nationFlagDm,
      nationFlagDo,
      nationFlagEc,
      nationFlagGd,
      nationFlagGt,
      nationFlagGy,
      nationFlagHn,
      nationFlagHt,
      nationFlagJm,
      nationFlagKn,
      nationFlagLc,
      nationFlagMx,
      nationFlagNi,
      nationFlagPa,
      nationFlagPe,
      nationFlagPr,
      nationFlagPy,
      nationFlagSr,
      nationFlagSv,
      nationFlagTt,
      nationFlagUs,
      nationFlagUy,
      nationFlagVc,
      nationFlagVe,
    ]),
  ],
})
export class AmericaModule {}
