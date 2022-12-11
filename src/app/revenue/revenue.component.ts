import { Component, OnInit } from '@angular/core';
import { RevenueTransaction } from '../model/revenue.transaction';
import { Transaction } from '../model/transaction';
import { FinanceIntroduceService } from '../services/finance.introduce.service';
import { RevenueApiService } from '../services/revenue.api.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  revenueTransaction: Transaction;

  constructor(private introduce: FinanceIntroduceService) {
    this.revenueTransaction = new Transaction
  }

  ngOnInit(): void {
  }

  // introduceRevenue(revenue: Transaction){
  //   this.introduce.setTransaction(revenueTransaction).subscribe(data => {
  //     this.revenueTransaction = data
  //   })
  // }

}
