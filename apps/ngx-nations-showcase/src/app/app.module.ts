import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNationsCoreModule } from '@nation/core-angular';

import { NationFlagAngularModule } from '@ngx-nations/nation-flag-angular';
import { nationFlagUa } from '@nation/tw-flags';
import { LocaleEN, LocaleES, LocaleFR, LocalePT } from '@nation/i18n';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    NgxNationsCoreModule.forRoot({
      locales: [LocaleEN, LocaleES, LocaleFR, LocalePT],
    }),
    NationFlagAngularModule.forRoot({
      variant: 'combined',
      icons: [nationFlagUa],
    }),
    ScullyLibModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml'),
        }
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
