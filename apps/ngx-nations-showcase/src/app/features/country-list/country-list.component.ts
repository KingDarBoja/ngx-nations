import { Component, Input } from '@angular/core';
import { NgxNationIcon } from '@ngx-nations/icon';

export interface NationData {
  name: string;
  iconCode: NgxNationIcon;
}

@Component({
  selector: 'ngx-nations-country-list',
  template: `
    <h1 class="section-title">{{ title }} Section</h1>

    <div class="py-2">
      <h3 class="section-subtitle">Tree-shakeable Demo</h3>

      <div class="country-grid">
        <div class="country-item">
          <p class="country-name">Colombia</p>
          <p class="country-code">co</p>
          <ngx-nations-icon [icon]="'co'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="country-item">
          <p class="country-name">Tanzania</p>
          <p class="country-code">tz</p>
          <ngx-nations-icon [icon]="'tz'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="country-item">
          <p class="country-name">Ukraine</p>
          <p class="country-code">ua</p>
          <ngx-nations-icon [icon]="'ua'" fontSize="50px"></ngx-nations-icon>
        </div>
        <div class="country-item">
          <p class="country-name">Tajikistan</p>
          <p class="country-code">tj</p>
          <ngx-nations-icon [icon]="'tj'" fontSize="50px"></ngx-nations-icon>
        </div>
      </div>
    </div>

    <div class="py-2">
      <h3 class="section-subtitle">All {{ title }} Country Flags</h3>
      <div class="country-grid">
        <div class="col-span-1 mb-3" *ngFor="let country of countries">
          <div class="items-center text-center">
            <p class="country-name">{{ country.name }}</p>
            <p class="country-code">{{ country.iconCode }}</p>
            <div class="country-item">
              <ngx-nations-icon
                [icon]="country.iconCode"
                fontSize="50px"
              ></ngx-nations-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CountryListComponent {
  @Input() title: string;
  @Input() countries: NationData[] = [];
}
