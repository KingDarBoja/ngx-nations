import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import {
  flagAd,
  flagAl,
  flagAm,
  flagAt,
  flagAx,
  flagAz,
  flagBa,
  flagBe,
  flagBg,
  flagBy,
  flagCh,
  flagCy,
  flagCz,
  flagDe,
  flagDk,
  flagEe,
  flagFi,
  flagFo,
  flagFr,
  flagGb,
  flagGe,
  flagGg,
  flagGi,
  flagGr,
  flagHr,
  flagHu,
  flagIe,
  flagIm,
  flagIs,
  flagIt,
  flagJe,
  flagKz,
  flagLi,
  flagLt,
  flagLu,
  flagLv,
  flagMc,
  flagMd,
  flagMe,
  flagMk,
  flagMt,
  flagNl,
  flagNo,
  flagPl,
  flagPt,
  flagRo,
  flagRs,
  flagRu,
  flagSe,
  flagSi,
  flagSj,
  flagSk,
  flagSm,
  flagTr,
  flagUa,
  flagVa,
  flagXk,
} from '@ngx-nations/icon/tw-icons';

import { EuropeComponent } from './europe.component';
import { EuropeRoutingModule } from './europe.routing';
import { NationListModule } from '../../shared/list/list.module';

@NgModule({
  declarations: [EuropeComponent],
  imports: [
    CommonModule,
    EuropeRoutingModule,
    NationListModule,
    NationFlagAngularModule.forChild([
      flagAd,
      flagAl,
      flagAm,
      flagAt,
      flagAx,
      flagAz,
      flagBa,
      flagBe,
      flagBg,
      flagBy,
      flagCh,
      flagCy,
      flagCz,
      flagDe,
      flagDk,
      flagEe,
      flagFi,
      flagFo,
      flagFr,
      flagGb,
      flagGe,
      flagGg,
      flagGi,
      flagGr,
      flagHr,
      flagHu,
      flagIe,
      flagIm,
      flagIs,
      flagIt,
      flagJe,
      flagKz,
      flagLi,
      flagLt,
      flagLu,
      flagLv,
      flagMc,
      flagMd,
      flagMe,
      flagMk,
      flagMt,
      flagNl,
      flagNo,
      flagPl,
      flagPt,
      flagRo,
      flagRs,
      flagRu,
      flagSe,
      flagSi,
      flagSj,
      flagSk,
      flagSm,
      flagTr,
      flagUa,
      flagVa,
      flagXk,
    ]),
  ],
})
export class EuropeModule {}
