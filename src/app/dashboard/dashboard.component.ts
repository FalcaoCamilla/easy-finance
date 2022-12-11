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
  lineData: any;

  constructor(private financeApi: FinanceApiService, private util: GlobalUtil) {
    this.period = new Period;
    this.transactions = new DashboardDto;
  }

  ngOnInit(): void {
    this.period.yearMonth = this.util.currentYearMonth();
    this.getDashboardTotals();

  }

  getDashboardTotals(){
    this.financeApi.getDashboardTotals().subscribe(data => {
      this.transactions = data
      this.buildChart(this.transactions)
      console.log("🚀 ~ file: dashboard.component.ts:32 ~ DashboardComponent ~ this.financeApi.getTransactionsByPeriod ~ this.transactions = data", this.transactions = data)
    })
  }

  buildChart(transactions: DashboardDto){
    this.transactionsData = {
      labels: ['Receitas', 'Despesas'],
          datasets: [
            {
              data: [this.transactions.totalRevenues, this.transactions.totalExpenses],
              backgroundColor: ["#ffd400", "#ff7f00"],
            }
          ],
    }
  //   this.lineData = {
  //     labels: [this.transactions.totalTransactions],
  //     datasets: [
  //         {
  //             label: 'Receita',
  //             data: [this.transactions.totalRevenues],
  //             fill: false,
  //             borderColor: '#42A5F5',
  //             tension: .4
  //         },
  //         {
  //             label: 'Despesa',
  //             data: [this.transactions.totalExpenses],
  //             fill: false,
  //             borderColor: '#FFA726',
  //             tension: .4
  //         }
  //     ]
  // }
  }
}
