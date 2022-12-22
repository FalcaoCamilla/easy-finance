import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DashboardDto } from '../model/dashboard.dto';
import { Transaction } from '../model/transaction';
import { GlobalUtil } from '../model/util.global';
import { FinanceApiService } from '../services/finance.api.service';
import { FinanceIntroduceService } from '../services/finance.introduce.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  period: any;
  columnsTransaction: any[];
  revenueTable: Transaction[];
  transactionsData: DashboardDto;
  lineData: any;
  barData: any;

  @Input() set tableTransaction(tableTransaction: Transaction[]){
    this.revenueTable = tableTransaction;
  }

  constructor(private getTransactions: FinanceApiService, private util: GlobalUtil) {
    this.revenueTable = [];
    this.columnsTransaction = [
      { field: 'type', header: 'Tipo' },
      { field: 'category', header: 'Categoria' },
      { field: 'description', header: 'Descrição' },
      { field: 'value', header: 'Valor' },
      { field: 'date', header: 'Data' }
    ];
    this.transactionsData = new DashboardDto;
  }

  ngOnInit(): void {
    this.period = this.util.currentYearMonth();
    this.getTransactionsByPeriod(this.period)
    this.getDashboardTotals()
  }

  getTransactionsByPeriod(period: string){
    this.getTransactions.getTransactionsByPeriod(period).subscribe(data => {
    this.revenueTable = data
    })
  }

  getDashboardTotals(){
    this.getTransactions.getDashboardTotals().subscribe(data => {
      this.transactionsData.totalizersByMonth = data['totalizersByMonth']
      this.transactionsData.totalizersByDay = data['totalizersByDay']
      console.log("🚀 ~ file: dashboard.component.ts:34 ~ DashboardComponent ~ this.financeApi.getDashboardTotals ~ this.transactionsData.totalizersByDay = data['totalizersByDay']", this.transactionsData.totalizersByDay = data['totalizersByDay'])
      this.buildChart(this.transactionsData)
    })
  }

  buildChart(transactionsData: DashboardDto){
    this.lineData = {
      labels:  this.transactionsData.totalizersByDay.map(item => item.day),
      datasets: [
        {
          label: 'Receitas',
          data: this.transactionsData.totalizersByDay.map(item => item.totalRevenues),
          fill: true,
          borderColor: 'lightgrey',
          backgroundColor: '#58af0d',
          tension: .4
        }
      ]
    }
    this.barData = {
      labels:  this.transactionsData.totalizersByDay.map(item => item.day),
      datasets: [
        {
          label: 'Receitas',
          data: this.transactionsData.totalizersByDay.map(item => item.totalRevenues),
          fill: true,
          borderColor: 'lightgrey',
          backgroundColor: '#ffd400',
          tension: .4
        }
      ]
    }
  }
}
