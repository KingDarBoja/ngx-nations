import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { NgxNationIcon } from './icon.model';
import { NGX_NATIONS_ICON_CONFIG, NgxNationsIconConfig } from './types';

@Component({
  selector: 'ngx-nations-icon',
  template: `
    <div class="">
      <svg-icon [key]="icon" [size]="size" [fontSize]="fontSize"></svg-icon>
      <ng-container *ngIf="showName">
        <div>{{ icon | nationName }}</div>
      </ng-container>
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
  @Input() icon: NgxNationIcon;
  @Input() size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() fontSize: string;
  /**
   * Display the country name, which can be changed at runtime based on the
   * selected locale.
   */
  @Input() showName: boolean;

  constructor(
    @Inject(NGX_NATIONS_ICON_CONFIG)
    private readonly config: NgxNationsIconConfig,
  ) {
    this.showName = this.config.showName;
  }
}
