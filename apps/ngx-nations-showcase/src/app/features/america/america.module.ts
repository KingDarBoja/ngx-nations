import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsIconsTwemojiModule } from 'ngx-nations/twemoji-icons';

import { AmericaComponent } from './america.component';
import { AmericaRoutingModule } from './america.routing';

@NgModule({
  declarations: [AmericaComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule,
    SvgIconsModule.forChild([]),
    NgxNationsIconsTwemojiModule,
  ],
})
export class AmericaModule {}
