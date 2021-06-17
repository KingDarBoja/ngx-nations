import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationListComponent } from './list.component';
import { NationNgxFlagModule } from '@nation/ngx-flag';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [CommonModule, HighlightModule, NationNgxFlagModule],
  exports: [NationListComponent],
  declarations: [NationListComponent],
})
export class NationListModule {}
