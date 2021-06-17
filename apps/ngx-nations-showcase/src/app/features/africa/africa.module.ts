import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  nationFlagAo,
  nationFlagBf,
  nationFlagBi,
  nationFlagBj,
  nationFlagBw,
  nationFlagCd,
  nationFlagCf,
  nationFlagCg,
  nationFlagCi,
  nationFlagCm,
  nationFlagCv,
  nationFlagDj,
  nationFlagDz,
  nationFlagEg,
  nationFlagEh,
  nationFlagEr,
  nationFlagEt,
  nationFlagGa,
  nationFlagGh,
  nationFlagGm,
  nationFlagGn,
  nationFlagGq,
  nationFlagGw,
  nationFlagKe,
  nationFlagKm,
  nationFlagLr,
  nationFlagLs,
  nationFlagLy,
  nationFlagMa,
  nationFlagMg,
  nationFlagMl,
  nationFlagMr,
  nationFlagMu,
  nationFlagMw,
  nationFlagMz,
  nationFlagNa,
  nationFlagNe,
  nationFlagNg,
  nationFlagRw,
  nationFlagSc,
  nationFlagSd,
  nationFlagSl,
  nationFlagSn,
  nationFlagSo,
  nationFlagSs,
  nationFlagSt,
  nationFlagSz,
  nationFlagTd,
  nationFlagTg,
  nationFlagTn,
  nationFlagTz,
  nationFlagUg,
  nationFlagZa,
  nationFlagZm,
  nationFlagZw,
} from '@nation/tw-flags';
import { NationFlagAngularModule } from '@nation/ngx-flag';

import { AfricaComponent } from './africa.component';
import { AfricaRoutingModule } from './africa.routing';
import { NationListModule } from '../../shared/list/list.module';

@NgModule({
  declarations: [AfricaComponent],
  imports: [
    CommonModule,
    AfricaRoutingModule,
    NationListModule,
    NationFlagAngularModule.forChild([
      nationFlagAo,
      nationFlagBf,
      nationFlagBi,
      nationFlagBj,
      nationFlagBw,
      nationFlagCd,
      nationFlagCf,
      nationFlagCg,
      nationFlagCi,
      nationFlagCm,
      nationFlagCv,
      nationFlagDj,
      nationFlagDz,
      nationFlagEg,
      nationFlagEh,
      nationFlagEr,
      nationFlagEt,
      nationFlagGa,
      nationFlagGh,
      nationFlagGm,
      nationFlagGn,
      nationFlagGq,
      nationFlagGw,
      nationFlagKe,
      nationFlagKm,
      nationFlagLr,
      nationFlagLs,
      nationFlagLy,
      nationFlagMa,
      nationFlagMg,
      nationFlagMl,
      nationFlagMr,
      nationFlagMu,
      nationFlagMw,
      nationFlagMz,
      nationFlagNa,
      nationFlagNe,
      nationFlagNg,
      nationFlagRw,
      nationFlagSc,
      nationFlagSd,
      nationFlagSl,
      nationFlagSn,
      nationFlagSo,
      nationFlagSs,
      nationFlagSt,
      nationFlagSz,
      nationFlagTd,
      nationFlagTg,
      nationFlagTn,
      nationFlagTz,
      nationFlagUg,
      nationFlagZa,
      nationFlagZm,
      nationFlagZw,
    ]),
  ],
})
export class AfricaModule {}
