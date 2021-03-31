import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsIconsTwemojiModule } from 'ngx-nations/twemoji-icons';

import { AfricaComponent } from './africa.component';
import { AfricaRoutingModule } from './africa.routing';

@NgModule({
  declarations: [AfricaComponent],
  imports: [
    CommonModule,
    AfricaRoutingModule,
    SvgIconsModule.forChild([]),
    NgxNationsIconsTwemojiModule,
  ],
})
export class AfricaModule {}
