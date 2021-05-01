import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationListComponent } from './list.component';
import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';

@NgModule({
  imports: [CommonModule, NationFlagAngularModule],
  exports: [NationListComponent],
  declarations: [NationListComponent],
})
export class NationListModule { }
