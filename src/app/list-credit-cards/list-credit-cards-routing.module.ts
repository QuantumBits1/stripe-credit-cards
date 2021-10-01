import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCreditCardsPage } from './list-credit-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ListCreditCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCreditCardsPageRoutingModule {}
