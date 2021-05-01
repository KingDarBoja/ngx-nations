/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { Nation } from '@ngx-nations/core';
import '@ngx-nations/nation-flag';
import type { NationFlagVariant } from '@ngx-nations/nation-flag';
import {
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
} from './nation-di-tokens';
import { NationFlagAngularRegistry } from './nation-flag-angular.service';

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
        class="ni-svg"
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
          {{ code | nationName }}
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

  @Input() set nation(code: Nation) {
    const nation = this.registry.get(code);
    console.log(nation);
    if (nation) {
      this._code = code;
      this._nationSVG = nation;
    }
  }

  /**
   * Display the country name, which can be changed at runtime based on the
   * selected locale.
   */
  @Input() showName: boolean;
  @Input() direction: NgxNationFlagConfig['direction'];
  @Input() position: NgxNationFlagConfig['position'];

  private _code = '';
  get code() {
    return this._code;
  }
  private _fontSize = '1rem';
  private _nationSVG = '';
  get nationSVG() {
    return this._nationSVG;
  }

  constructor(
    @Inject(NGX_NATION_FlAG_CONFIG)
    private readonly config: NgxNationFlagConfig,
    private readonly registry: NationFlagAngularRegistry,
  ) {
    this.showName = this.config.showName ?? true;
    this.direction = this.config.direction ?? 'column';
    this.position = this.config.position ?? 'end';
  }

  private coerceCssPixelValue(value: string | number): string {
    return typeof value === 'string' ? value : `${value}px`;
  }
}
