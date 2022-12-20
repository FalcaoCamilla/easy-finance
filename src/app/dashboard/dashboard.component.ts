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
  pieData: any;
  barData: any;

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
      this.transactions.totalizersByMonth = data['totalizersByMonth']
      this.transactions.totalizersByDay = data['totalizersByDay']
      console.log("🚀 ~ file: dashboard.component.ts:34 ~ DashboardComponent ~ this.financeApi.getDashboardTotals ~ this.transactions.totalizersByDay = data['totalizersByDay']", this.transactions.totalizersByDay = data['totalizersByDay'])
      this.buildChart(this.transactions)
    })
  }

  buildChart(transactions: DashboardDto){
    this.pieData = {
      labels: ['Receitas', 'Despesas'],
      datasets: [
        {
          data: [this.transactions.totalizersByMonth.totalRevenues, this.transactions.totalizersByMonth.totalExpenses],
          backgroundColor: ["#ffd400", "#ff7f00"],
        }
      ],
    }
    this.barData = {
      labels:  this.transactions.totalizersByDay.map(item => item.day),
      datasets: [
        {
          label: 'Receita',
          data: this.transactions.totalizersByDay.map(item => item.totalRevenues),
          fill: false,
          borderColor: '#25adab',
          backgroundColor: "#ffd400",
        },
        {
          label: 'Despesa',
          data: this.transactions.totalizersByDay.map(item => item.totalExpenses),
          fill: false,
          borderColor: '#25adab',
          backgroundColor: "#ff7f00",
        }
      ]
    }
  }
}
