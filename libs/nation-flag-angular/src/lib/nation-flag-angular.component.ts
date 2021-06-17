/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import '@ngx-nations/nation-flag';
import {
  NgxNationFlagConfig,
  NGX_NATION_FlAG_CONFIG,
} from './nation-di-tokens';
import { NationFlagAngularRegistry } from './nation-flag-angular.service';

@Component({
  selector: 'nation-flag-angular',
  styles: [
    `
      :host {
        display: block;
      }

      .ni-container {
        display: flex;
        align-items: center;

        & > * {
          display: flex;
        }

        .ni-name {
          padding: 4px;
        }
      }
    `,
  ],
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NationFlagAngularComponent {
  @Input() set fontSize(value: number | string) {
    this._fontSize = this.coerceCssPixelValue(value);
  }

  get fontSize() {
    return this._fontSize;
  }

  @Input() set nation(code: string) {
    const nation = this.registry.get(code);
    if (nation) {
      this._code = code;
      this._nationSVG = nation;
    }
  }

  @Input() variant: NgxNationFlagConfig['variant'];
  /**
   * Display the country name, which can be changed at runtime based on the
   * selected locale.
   */
  @Input() showName: NgxNationFlagConfig['showName'];
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
    this.variant = this.config.variant ?? 'none';
    this.showName = this.config.showName ?? true;
    this.direction = this.config.direction ?? 'column';
    this.position = this.config.position ?? 'end';
  }

  private coerceCssPixelValue(value: string | number): string {
    return typeof value === 'string' ? value : `${value}px`;
  }
}
