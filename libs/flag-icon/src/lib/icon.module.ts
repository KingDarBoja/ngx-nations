import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsFlagIconComponent } from './icon.component';

@NgModule({
  imports: [SvgIconsModule],
  declarations: [NgxNationsFlagIconComponent],
  exports: [NgxNationsFlagIconComponent],
})
export class NgxNationsFlagIconModule {}
