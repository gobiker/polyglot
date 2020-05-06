import { HomeGuard } from './services/home.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'card-list/:id',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/card-list/card-list.module').then(m => m.CardListPageModule)
  },
  {
    path: 'card',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'settings',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'hanzi',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/input-hanzi/input-hanzi.module').then(m => m.InputHanziPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
