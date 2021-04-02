import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxNationIcon } from './icon.model';

@Component({
  selector: 'ngx-nations-icon',
  template: `
    <div class="">
      <svg-icon [key]="icon" [size]="size" [fontSize]="fontSize"></svg-icon>
      <div>{{ icon | nationName }}</div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxNationsIconComponent {
  @Input() icon!: NgxNationIcon;
  @Input() size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() fontSize: string;
}
