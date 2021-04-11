import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationListComponent } from './list.component';
import { NgxNationsIconModule } from '@ngx-nations/icon';

@NgModule({
  imports: [CommonModule, NgxNationsIconModule],
  exports: [NationListComponent],
  declarations: [NationListComponent],
})
export class NationListModule { }
