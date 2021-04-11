import { Component } from '@angular/core';
import { EuropeNations } from './europe';

@Component({
  template: `
    <ngx-nations-list
      [title]="'Europe'"
      [nations]="nations"
    ></ngx-nations-list>
  `,
})
export class EuropeComponent {
  readonly nations = EuropeNations;
}
