import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsIconComponent } from './icon.component';

@NgModule({
  imports: [SvgIconsModule],
  declarations: [NgxNationsIconComponent],
  exports: [NgxNationsIconComponent],
})
export class NgxNationsIconModule {}
