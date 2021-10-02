import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../services/credit-card.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-credit-cards',
  templateUrl: './list-credit-cards.page.html',
  styleUrls: ['./list-credit-cards.page.scss'],
  providers: [CreditCardService]
})
export class ListCreditCardsPage implements OnInit {
  creditCards = [];
  constructor(private creditCardService: CreditCardService,
    private router: Router) { }

  ngOnInit() {
    this.getAllCreditCards();
  }

  public getAllCreditCards() {
    this.creditCardService.getAllCreditCards()
      .subscribe((res: any) => {
        if (!res)
          throw new Error("Get all credit cards failed");
        
        console.log(res);
        this.creditCards = res.data;
        
      })
  }

  public toDetail() {
    let navigationExtras: NavigationExtras = {
      state: {
        creditCards: this.creditCards
      }
    }
    this.router.navigate(['/credit-card-detail'], navigationExtras);
  }
}
