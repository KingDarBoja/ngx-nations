import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
  {
    path: 'asia',
    loadChildren: () =>
      import('./features/asia/asia.module').then((m) => m.AsiaModule),
  },
  {
    path: 'europe',
    loadChildren: () =>
      import('./features/europe/europe.module').then((m) => m.EuropeModule),
  },
  {
    path: 'oceania',
    loadChildren: () =>
      import('./features/oceania/oceania.module').then((m) => m.OceaniaModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
