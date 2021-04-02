# @ngx-nations/icon

Provides two sets of flag icons to use into your Angular-apps, both of them open-source and with nice looking rectangular svgs assets already optimized with [svg-to-ts](https://github.com/kreuzerk/svg-to-ts), which uses [svgo](https://github.com/svg/svgo) under the hood.

## Usage

Install the package with npm by running

`npm install @ngx-nations/icon`

or if you use yarn

`yarn add @ngx-nations/icon`

This will install [@ngneat/svg-icon](https://github.com/ngneat/svg-icon) as dependency as it is required for icon registry at your `app.module.ts` or for lazy-loaded modules.

- Register the icons at your `app.module.ts` and also import `NgxNationsIconModule` to render the icon in your components:

**`app.module.ts`**

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { NgxNationsIconModule } from '@ngx-nations/icon';
import { flagCo } from '@ngx-nations/icon/tw-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [flagCo],
    }),
    NgxNationsIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**`app.component.ts`**

```ts
import { Component } from '@angular/core';

@Component({
  template: ` <ngx-nations-icon [icon]="'co'" [fontSize]="'50px'"></ngx-nations-icon> `,
})
export class AppComponent {}
```

- You can also register icons in lazy-loaded modules using `SvgIconsModule.forChild([arrayOfIcons])`.

> **NOTE**: the `ngx-nations-icon` will be extended to support showing the country name in future versions, by making use of `ngx-nations-core` lib, which will implement [node-i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries).

## Switching Icon Set

You can export flag icons from either `@ngx-nations/icon/tw-icons` (Twemoji) or `@ngx-nations/icon/lp-icons` (flag-icon-css).

## Credits

The amazing country flag icons assets used for this library are listed below:

### [Twemoji](https://twemoji.twitter.com/)

Copyright 2019 Twitter, Inc and other contributors
Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/

### [flag-icon-css](https://github.com/lipis/flag-icon-css)

Copyright (c) 2013 Panayiotis Lipiridis
