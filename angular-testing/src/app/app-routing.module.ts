import { Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: '/presentation',
    pathMatch: 'full'
  },
  {
    path: 'presentation',
    loadChildren: () => import('./features/presentation/presentation-module').then(m => m.PresentationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)
  }
];