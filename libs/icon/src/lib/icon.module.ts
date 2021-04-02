import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsIconComponent } from './icon.component';
import { NgxNationsCoreModule } from '@ngx-nations/core';

@NgModule({
  imports: [SvgIconsModule, NgxNationsCoreModule],
  declarations: [NgxNationsIconComponent],
  exports: [NgxNationsIconComponent],
})
export class NgxNationsIconModule {}
