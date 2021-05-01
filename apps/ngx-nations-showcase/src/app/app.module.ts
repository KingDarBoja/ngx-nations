import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNationsCoreModule } from '@ngx-nations/core';

import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import { flagUa } from '@ngx-nations/icon/tw-icons';
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
    NgxNationsCoreModule.forRoot({
      locales: [LocaleEN, LocaleES, LocaleFR, LocalePT],
    }),
    NationFlagAngularModule.forRoot({
      icons: [flagUa],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
