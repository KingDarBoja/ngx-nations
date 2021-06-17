import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationListComponent } from './list.component';
import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [CommonModule, HighlightModule, NationFlagAngularModule],
  exports: [NationListComponent],
  declarations: [NationListComponent],
})
export class NationListModule { }
