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
    <div
      class="nation-icon-container"
      [ngStyle]="{
        'flex-direction': direction
      }"
    >
      <svg-icon [key]="icon" [size]="size" [fontSize]="fontSize" class="nation-icon-svg"></svg-icon>
      <ng-container *ngIf="showName">
        <div
          class="nation-icon-name"
          [ngStyle]="{
            order: position === 'start' ? -1 : 1
          }"
        >
          {{ icon | nationName }}
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./icon.component.scss'],
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
  @Input() direction: NgxNationsIconConfig['direction'];
  @Input() position: NgxNationsIconConfig['position'];

  constructor(
    @Inject(NGX_NATIONS_ICON_CONFIG)
    private readonly config: NgxNationsIconConfig,
  ) {
    this.showName = this.config.showName;
    this.direction = this.config.direction;
    this.position = this.config.position;
  }
}
