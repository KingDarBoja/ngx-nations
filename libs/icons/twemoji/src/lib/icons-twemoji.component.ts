import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ngxNationIconTwemoji } from './icons';

@Component({
  selector: 'ngx-nations-icon-tw',
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
export class NgxNationIconTwemojiComponent {
  @Input() icon!: ngxNationIconTwemoji;
  @Input() size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() fontSize: string;
}
