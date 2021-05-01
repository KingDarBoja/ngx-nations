import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxNationsCoreModule } from '@ngx-nations/core';

import { NgxNationsIconModule } from '@ngx-nations/icon';
import { flagUa } from '@ngx-nations/icon/tw-icons';
import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import {
  LocaleEN,
  LocaleES,
  LocaleFR,
  LocalePT,
} from 'i18n-iso-countries/langs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [flagUa],
    }),
    NgxNationsCoreModule.forRoot({
      locales: [LocaleEN, LocaleES, LocaleFR, LocalePT],
    }),
    NgxNationsIconModule.forRoot(),
    NationFlagAngularModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
