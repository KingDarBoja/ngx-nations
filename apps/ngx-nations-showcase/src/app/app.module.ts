import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { NgxNationsIconModule } from '@ngx-nations/icon';
import { flagEs } from 'dist/libs/icon/tw-icons';

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
    NgxNationsIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
