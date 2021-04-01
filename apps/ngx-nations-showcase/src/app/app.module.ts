import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { NgxNationsFlagIconModule } from '@ngx-nations/flag-icon';
import { ngxNationFlagIconEs } from 'dist/libs/flag-icon/icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [ngxNationFlagIconEs],
    }),
    NgxNationsFlagIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
