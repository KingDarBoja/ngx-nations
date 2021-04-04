import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { NgxNationsIconModule } from '@ngx-nations/icon';

@NgModule({
  imports: [CommonModule, NgxNationsIconModule],
  exports: [CountryListComponent],
  declarations: [CountryListComponent],
})
export class CountryListModule { }
