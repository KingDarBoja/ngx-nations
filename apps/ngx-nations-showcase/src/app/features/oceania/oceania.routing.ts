import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OceaniaComponent } from './oceania.component';

export const AsiaRoutes: Routes = [
  {
    path: '',
    component: OceaniaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(AsiaRoutes)],
  exports: [RouterModule],
})
export class OceaniaRoutingModule {}
