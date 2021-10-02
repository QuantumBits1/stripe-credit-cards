import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-credit-cards/list-credit-cards.module').then( m => m.ListCreditCardsPageModule)
  },
  {
    path: 'credit-card-detail',
    loadChildren: () => import('./credit-card-detail/credit-card-detail.module').then( m => m.CreditCardDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
