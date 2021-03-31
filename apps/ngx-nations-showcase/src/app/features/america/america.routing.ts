import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmericaComponent } from './america.component';

export const AmericaRoutes: Routes = [
  {
    path: '',
    component: AmericaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(AmericaRoutes)],
  exports: [RouterModule],
})
export class AmericaRoutingModule {}
