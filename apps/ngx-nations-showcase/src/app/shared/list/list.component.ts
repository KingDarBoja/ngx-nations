import { Component, Input } from '@angular/core';
import { NgxNationIcon } from '@ngx-nations/icon';

export interface NationData {
  name: string;
  iconCode: NgxNationIcon;
}

@Component({
  selector: 'ngx-nations-list',
  template: `
    <h1 class="section-title">{{ title }} Section</h1>

    <div class="py-2">
      <h3 class="section-subtitle">Tree-shakeable Demo</h3>

      <div class="nation-grid">
        <div class="nation-item">
          <!-- <p class="nation-name">Colombia</p> -->
          <p class="nation-code">co</p>
          <ngx-nations-icon [icon]="'co'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Tanzania</p> -->
          <p class="nation-code">tz</p>
          <ngx-nations-icon [icon]="'tz'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Ukraine</p> -->
          <p class="nation-code">ua</p>
          <ngx-nations-icon [icon]="'ua'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Tajikistan</p> -->
          <p class="nation-code">tj</p>
          <ngx-nations-icon [icon]="'tj'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Tonga</p> -->
          <p class="nation-code">to</p>
          <ngx-nations-icon [icon]="'to'" fontSize="50px"></ngx-nations-icon>
        </div>
      </div>
    </div>

    <div class="py-2">
      <h3 class="section-subtitle">All {{ title }} nation Flags</h3>
      <div class="nation-grid">
        <div class="col-span-1 mb-3" *ngFor="let nation of nations">
          <div class="nation-item">
            <!-- <p class="nation-name">{{ nation.name }}</p> -->
            <p class="nation-code">{{ nation.iconCode }}</p>
            <div class="nation-item">
              <ngx-nations-icon
                [icon]="nation.iconCode"
                fontSize="50px"
              ></ngx-nations-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NationListComponent {
  @Input() title: string;
  @Input() nations: NationData[] = [];
}
