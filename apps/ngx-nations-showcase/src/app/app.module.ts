import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNationsCoreModule } from '@nation/core-angular';

import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import { nationFlagUa } from '@nation/tw-flags';
import { LocaleEN, LocaleES, LocaleFR, LocalePT } from '@nation/i18n';

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
      icons: [nationFlagUa],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
