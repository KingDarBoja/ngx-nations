import { Component } from '@angular/core';
import { AfricaNations } from './africa';

@Component({
  template: `
    <ngx-nations-list
      [title]="'Africa'"
      [nations]="nations"
    ></ngx-nations-list>
  `,
})
export class AfricaComponent {
  readonly nations = AfricaNations;
}
