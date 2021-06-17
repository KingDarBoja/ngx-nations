import { Component, Input } from '@angular/core';
import { NationFlag } from '@nation/tw-flags';

export interface NationData {
  name: string;
  iconCode: NationFlag['name'];
}

@Component({
  selector: 'ngx-nations-list',
  template: `
    <section class="flex flex-col space-y-4">
      <h1 class="section-title">{{ title }} Section</h1>
      <section class="nation-grid">
        <div class="nation-item">
          <!-- <p class="nation-name">Colombia</p> -->
          <p class="nation-code">Style - Default (None)</p>
          <p class="nation-code">co</p>
          <nation-flag-angular
            [nation]="'co'"
            fontSize="100px"
          ></nation-flag-angular>
        </div>
        <div class="nation-item">
          <p class="nation-name">Style - Bordered</p>
          <p class="nation-code">tz</p>
          <nation-flag-angular
            [nation]="'tz'"
            [variant]="'bordered'"
            fontSize="100px"
          ></nation-flag-angular>
        </div>
        <div class="nation-item">
          <p class="nation-name">Style - None</p>
          <p class="nation-code">ua</p>
          <nation-flag-angular
            [nation]="'ua'"
            [variant]="'none'"
            fontSize="100px"
          ></nation-flag-angular>
        </div>
        <div class="nation-item">
          <p class="nation-name">Style - Wavy</p>
          <p class="nation-code">tj</p>
          <nation-flag-angular
            [nation]="'tj'"
            [variant]="'wavy'"
            fontSize="100px"
          ></nation-flag-angular>
        </div>
        <div class="nation-item">
          <p class="nation-name">Style - Combined</p>
          <p class="nation-code">to</p>
          <nation-flag-angular
            [nation]="'to'"
            [variant]="'combined'"
            fontSize="100px"
          ></nation-flag-angular>
        </div>
      </section>

      <section class="">
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
      </section>
    </section>
  `,
})
export class NationListComponent {
  @Input() title: string;
  @Input() nations: NationData[] = [];
}
