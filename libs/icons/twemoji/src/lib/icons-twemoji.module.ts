import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationIconTwemojiComponent } from './icons-twemoji.component';

@NgModule({
  imports: [SvgIconsModule.forRoot()],
  declarations: [NgxNationIconTwemojiComponent],
  exports: [NgxNationIconTwemojiComponent],
})
export class NgxNationsIconsTwemojiModule {}
