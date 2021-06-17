import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  nationFlagAd,
  nationFlagAl,
  nationFlagAm,
  nationFlagAt,
  nationFlagAx,
  nationFlagAz,
  nationFlagBa,
  nationFlagBe,
  nationFlagBg,
  nationFlagBy,
  nationFlagCh,
  nationFlagCy,
  nationFlagCz,
  nationFlagDe,
  nationFlagDk,
  nationFlagEe,
  nationFlagFi,
  nationFlagFo,
  nationFlagFr,
  nationFlagGb,
  nationFlagGe,
  nationFlagGg,
  nationFlagGi,
  nationFlagGr,
  nationFlagHr,
  nationFlagHu,
  nationFlagIe,
  nationFlagIm,
  nationFlagIs,
  nationFlagIt,
  nationFlagJe,
  nationFlagKz,
  nationFlagLi,
  nationFlagLt,
  nationFlagLu,
  nationFlagLv,
  nationFlagMc,
  nationFlagMd,
  nationFlagMe,
  nationFlagMk,
  nationFlagMt,
  nationFlagNl,
  nationFlagNo,
  nationFlagPl,
  nationFlagPt,
  nationFlagRo,
  nationFlagRs,
  nationFlagRu,
  nationFlagSe,
  nationFlagSi,
  nationFlagSj,
  nationFlagSk,
  nationFlagSm,
  nationFlagTr,
  nationFlagUa,
  nationFlagVa,
  nationFlagXk,
} from '@nation/tw-flags';
import { NationNgxFlagModule } from '@nation/ngx-flag';

import { EuropeComponent } from './europe.component';
import { EuropeRoutingModule } from './europe.routing';
import { NationListModule } from '../../shared/list/list.module';

@NgModule({
  declarations: [EuropeComponent],
  imports: [
    CommonModule,
    EuropeRoutingModule,
    NationListModule,
    NationNgxFlagModule.forChild([
      nationFlagAd,
      nationFlagAl,
      nationFlagAm,
      nationFlagAt,
      nationFlagAx,
      nationFlagAz,
      nationFlagBa,
      nationFlagBe,
      nationFlagBg,
      nationFlagBy,
      nationFlagCh,
      nationFlagCy,
      nationFlagCz,
      nationFlagDe,
      nationFlagDk,
      nationFlagEe,
      nationFlagFi,
      nationFlagFo,
      nationFlagFr,
      nationFlagGb,
      nationFlagGe,
      nationFlagGg,
      nationFlagGi,
      nationFlagGr,
      nationFlagHr,
      nationFlagHu,
      nationFlagIe,
      nationFlagIm,
      nationFlagIs,
      nationFlagIt,
      nationFlagJe,
      nationFlagKz,
      nationFlagLi,
      nationFlagLt,
      nationFlagLu,
      nationFlagLv,
      nationFlagMc,
      nationFlagMd,
      nationFlagMe,
      nationFlagMk,
      nationFlagMt,
      nationFlagNl,
      nationFlagNo,
      nationFlagPl,
      nationFlagPt,
      nationFlagRo,
      nationFlagRs,
      nationFlagRu,
      nationFlagSe,
      nationFlagSi,
      nationFlagSj,
      nationFlagSk,
      nationFlagSm,
      nationFlagTr,
      nationFlagUa,
      nationFlagVa,
      nationFlagXk,
    ]),
  ],
})
export class EuropeModule {}
