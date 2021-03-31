import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';

import {
  ngxNationIconTwemojiEs,
  NgxNationsIconsTwemojiModule,
} from 'ngx-nations/twemoji-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [ngxNationIconTwemojiEs],
    }),
    NgxNationsIconsTwemojiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
