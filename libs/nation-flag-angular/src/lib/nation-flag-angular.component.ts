/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import '@ngx-nations/nation-flag';
import type { NationFlagVariant } from '@ngx-nations/nation-flag';
import { NgxNationsIconConfig, NGX_NATIONS_ICON_CONFIG } from './nation-di-tokens';
import { NgxNationIcon } from './nation-types';

@Component({
  selector: 'nation-flag-angular',
  template: `
    <div
      class="ni-container"
      [ngStyle]="{
        'flex-direction': direction
      }"
    >
      <nation-flag
        [ngStyle]="{ 'font-size': fontSize }"
        [attr.variant]="variant"
        [attr.nation]="nationSVG"
      ></nation-flag>
      <ng-container *ngIf="showName">
        <div
          class="ni-name"
          [ngStyle]="{
            order: position === 'start' ? -1 : 1
          }"
        >
          {{ nation | nationName }}
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./nation-flag-angular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NationFlagAngularComponent {
  @Input() variant: NationFlagVariant = 'combined';
  @Input() set fontSize(value: number | string) {
    this._fontSize = this.coerceCssPixelValue(value);
  }

  get fontSize() {
    return this._fontSize;
  }

  @Input() set nation(code: NgxNationIcon) {
    const nation = this.svgIconRegistry.get(code);
    // console.log(nation);
    if (nation) {
      this._nationSVG = nation;
    }
  }

  /**
   * Display the country name, which can be changed at runtime based on the
   * selected locale.
   */
  @Input() showName = false;
  @Input() direction: NgxNationsIconConfig['direction'];
  @Input() position: NgxNationsIconConfig['position'];

  private _fontSize = '1rem';
  private _nationSVG = '';
  get nationSVG() {
    return this._nationSVG;
  }

  constructor(
    @Inject(NGX_NATIONS_ICON_CONFIG) private readonly config: NgxNationsIconConfig,
    private readonly svgIconRegistry: SvgIconRegistry,
  ) {}

  private coerceCssPixelValue(value: string | number): string {
    return typeof value === 'string' ? value : `${value}px`;
  }
}
