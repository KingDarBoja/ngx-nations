import { Component } from '@angular/core';
import { AmericaNations } from './america';

@Component({
  template: `
    <ngx-nations-list
      [title]="'America'"
      [nations]="nations"
    ></ngx-nations-list>
  `,
})
export class AmericaComponent {
  readonly nations = AmericaNations;
}
