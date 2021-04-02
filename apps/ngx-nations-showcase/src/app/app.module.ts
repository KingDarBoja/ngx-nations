import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsCoreModule } from '@ngx-nations/core';

import { NgxNationsIconModule } from '@ngx-nations/icon';
import { flagEs } from 'dist/libs/icon/tw-icons';
import { LocaleFR } from 'i18n-iso-countries/langs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [flagEs],
    }),
    NgxNationsCoreModule.forRoot({
      defaultLocale: LocaleFR,
    }),
    NgxNationsIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
