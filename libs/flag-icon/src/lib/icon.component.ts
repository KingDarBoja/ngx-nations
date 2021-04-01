import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxNationFlagIcon } from './icon.model';

@Component({
  selector: 'ngx-nations-flag-icon',
  template: `
    <div class="">
      <svg-icon [key]="icon" [size]="size" [fontSize]="fontSize"></svg-icon>
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
export class NgxNationsFlagIconComponent {
  @Input() icon!: NgxNationFlagIcon;
  @Input() size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() fontSize: string;
}
