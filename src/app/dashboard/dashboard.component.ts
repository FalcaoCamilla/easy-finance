import { Component, OnInit } from '@angular/core';
import { DashboardDto } from '../model/dashboard.dto';
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
  transactions: DashboardDto;
  transactionsData: any;

  constructor(private financeApi: FinanceApiService, private util: GlobalUtil) {
    this.period = new Period;
    this.transactions = new DashboardDto;
  }

  ngOnInit(): void {
    this.period.yearMonth = this.util.currentYearMonth();
    this.getDashboardTotals();
    this.buildChart()
  }

  getDashboardTotals(){
    this.financeApi.getDashboardTotals().subscribe(data => {
      this.transactions = data
      console.log("🚀 ~ file: dashboard.component.ts:32 ~ DashboardComponent ~ this.financeApi.getTransactionsByPeriod ~ this.transactions = data", this.transactions = data)
    })
  }

  buildChart(){
    this.transactionsData = {
      labels: ['Receitas', 'Despesas'],
          datasets: [
            {
              data: [this.transactions.totalRevenues, this.transactions.totalExpenses],
              backgroundColor: ["#ffd400", "#ff7f00"],
            }
          ],
    }
  }
}
