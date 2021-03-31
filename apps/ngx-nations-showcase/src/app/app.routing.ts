import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'america',
    loadChildren: () =>
      import('./features/america/america.module').then((m) => m.AmericaModule),
  },
  {
    path: 'africa',
    loadChildren: () =>
      import('./features/africa/africa.module').then((m) => m.AfricaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
