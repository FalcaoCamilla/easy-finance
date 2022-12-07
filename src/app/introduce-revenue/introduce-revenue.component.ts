import { Component, OnInit } from '@angular/core';
import { RevenueTransaction } from '../model/revenue.transaction';
import { RevenueApiService } from '../services/revenue.api.service';

@Component({
  selector: 'app-introduce-revenue',
  templateUrl: './introduce-revenue.component.html',
  styleUrls: ['./introduce-revenue.component.css']
})
export class IntroduceRevenueComponent implements OnInit {

  revenueTransaction: RevenueTransaction;

  constructor(private introduce: RevenueApiService) {
    this.revenueTransaction = new RevenueTransaction
  }

  ngOnInit(): void {
  }

  introduceRevenue(revenueTransaction: RevenueTransaction){
    this.introduce.introduceRevenue(revenueTransaction).subscribe(data => {
      this.revenueTransaction = data
    })
  }

}
