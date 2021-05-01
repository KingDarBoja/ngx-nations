import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import {
  flagAg,
  flagAr,
  flagAw,
  flagBb,
  flagBo,
  flagBr,
  flagBs,
  flagBz,
  flagCa,
  flagCl,
  flagCo,
  flagCr,
  flagCu,
  flagDm,
  flagDo,
  flagEc,
  flagGd,
  flagGt,
  flagGy,
  flagHn,
  flagHt,
  flagJm,
  flagKn,
  flagLc,
  flagMx,
  flagNi,
  flagPa,
  flagPe,
  flagPr,
  flagPy,
  flagSr,
  flagSv,
  flagTt,
  flagUs,
  flagUy,
  flagVc,
  flagVe,
} from '@ngx-nations/icon/tw-icons';

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
      flagAg,
      flagAr,
      flagAw,
      flagBb,
      flagBo,
      flagBr,
      flagBs,
      flagBz,
      flagCa,
      flagCl,
      flagCo,
      flagCr,
      flagCu,
      flagDm,
      flagDo,
      flagEc,
      flagGd,
      flagGt,
      flagGy,
      flagHn,
      flagHt,
      flagJm,
      flagKn,
      flagLc,
      flagMx,
      flagNi,
      flagPa,
      flagPe,
      flagPr,
      flagPy,
      flagSr,
      flagSv,
      flagTt,
      flagUs,
      flagUy,
      flagVc,
      flagVe,
    ]),
  ],
})
export class AmericaModule {}
