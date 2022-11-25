import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { Period } from '../model/transaction.filterPeriod';
import { GlobalUtil } from '../model/util.global';
import { FinanceApiService } from '../services/finance.api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  period: Period;
  transactions: Transaction[];

  constructor(private financeApi: FinanceApiService, private util: GlobalUtil) {
    this.period = new Period;
    this.transactions = []
  }

  ngOnInit(): void {
    this.period.yearMonth = this.util.currentYearMonth();
    this.getTransactionsByPeriod(this.period.yearMonth)
  }

  getTransactionsByPeriod(period: string){
    this.financeApi.getTransactionsByPeriod(period).subscribe(data => {
      this.transactions = data
      console.log("🚀 ~ file: dashboard.component.ts ~ line 30 ~ DashboardComponent ~ this.financeApi.getTransactionsByPeriod ~ this.transactions", this.transactions)
    })
  }

}
