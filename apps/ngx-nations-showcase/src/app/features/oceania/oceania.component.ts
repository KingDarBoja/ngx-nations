import { Component } from '@angular/core';
import { OceaniaNations } from './oceania';

@Component({
  template: `
    <ngx-nations-list
      [title]="'Oceania'"
      [nations]="nations"
    ></ngx-nations-list>
  `,
})
export class OceaniaComponent {
  readonly nations = OceaniaNations;
}
