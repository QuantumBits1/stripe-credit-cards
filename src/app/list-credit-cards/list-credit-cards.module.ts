import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCreditCardsPageRoutingModule } from './list-credit-cards-routing.module';

import { ListCreditCardsPage } from './list-credit-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCreditCardsPageRoutingModule
  ],
  declarations: [ListCreditCardsPage]
})
export class ListCreditCardsPageModule {}
