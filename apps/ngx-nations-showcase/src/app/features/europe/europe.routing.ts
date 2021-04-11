import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuropeComponent } from './europe.component';

export const EuropeRoutes: Routes = [
  {
    path: '',
    component: EuropeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(EuropeRoutes)],
  exports: [RouterModule],
})
export class EuropeRoutingModule {}
