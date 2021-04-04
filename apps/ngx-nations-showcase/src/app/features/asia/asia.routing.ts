import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsiaComponent } from './asia.component';

export const AsiaRoutes: Routes = [
  {
    path: '',
    component: AsiaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(AsiaRoutes)],
  exports: [RouterModule],
})
export class AsiaRoutingModule {}
