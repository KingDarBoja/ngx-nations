import { Component, Input } from '@angular/core';
import { Nation } from '@ngx-nations/core';

export interface NationData {
  name: string;
  iconCode: Nation;
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
          <nation-flag-angular [nation]="'co'" fontSize="100px"></nation-flag-angular>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Tanzania</p> -->
          <p class="nation-code">tz</p>
          <nation-flag-angular [nation]="'tz'" fontSize="100px"></nation-flag-angular>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Ukraine</p> -->
          <p class="nation-code">ua</p>
          <nation-flag-angular [nation]="'ua'" fontSize="100px"></nation-flag-angular>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Tajikistan</p> -->
          <p class="nation-code">tj</p>
          <nation-flag-angular [nation]="'tj'" fontSize="100px"></nation-flag-angular>
        </div>
        <div class="nation-item">
          <!-- <p class="nation-name">Tonga</p> -->
          <p class="nation-code">to</p>
          <nation-flag-angular [nation]="'to'" fontSize="100px"></nation-flag-angular>
        </div>
      </div>
    </div>

    <div class="py-2">
      <h3 class="section-subtitle">All {{ title }} nation Flags</h3>
      <div class="nation-grid">
        <div class="nation-item" *ngFor="let nation of nations">
          <!-- <p class="nation-name">{{ nation.name }}</p> -->
          <p class="nation-code">{{ nation.iconCode }}</p>
          <nation-flag-angular
            [nation]="nation.iconCode"
            fontSize="100px"
          ></nation-flag-angular>
        </div>
      </div>
    </div>
  `,
})
export class NationListComponent {
  @Input() title: string;
  @Input() nations: NationData[] = [];
}
