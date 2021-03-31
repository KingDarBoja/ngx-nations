import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfricaComponent } from './africa.component';

export const AfricaRoutes: Routes = [
  {
    path: '',
    component: AfricaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(AfricaRoutes)],
  exports: [RouterModule],
})
export class AfricaRoutingModule {}
