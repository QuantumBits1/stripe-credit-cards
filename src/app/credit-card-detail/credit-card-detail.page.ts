import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.page.html',
  styleUrls: ['./credit-card-detail.page.scss'],
})
export class CreditCardDetailPage implements OnInit {
  creditCard: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(() => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.creditCard = this.router.getCurrentNavigation().extras.state.creditCard;
      }
    })
  }

  ngOnInit() {
  }

}
