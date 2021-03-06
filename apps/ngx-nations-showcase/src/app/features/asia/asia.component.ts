import { Component } from '@angular/core';
import { AsiaNations } from './asia';

@Component({
  template: `
    <ngx-nations-list
      [title]="'Asia'"
      [nations]="nations"
    ></ngx-nations-list>
  `,
})
export class AsiaComponent {
  readonly nations = AsiaNations;
}
