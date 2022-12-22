import { Component, Input, OnInit } from '@angular/core';
import { DashboardDto } from '../model/dashboard.dto';
import { Transaction } from '../model/transaction';
import { GlobalUtil } from '../model/util.global';
import { FinanceApiService } from '../services/finance.api.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  period: any;
  columnsTransaction: any[];
  expenseTable: Transaction[];
  transactionsData: DashboardDto;
  lineData: any;
  barData: any;

  @Input() set tableTransaction(tableTransaction: Transaction[]){
    this.expenseTable = tableTransaction;
  }

  constructor(private getTransactions: FinanceApiService, private util: GlobalUtil) {
    this.expenseTable = [];
    this.columnsTransaction = [
      { field: 'type', header: 'Tipo' },
      { field: 'category', header: 'Categoria' },
      { field: 'description', header: 'Descrição' },
      { field: 'value', header: 'Valor' },
      { field: 'date', header: 'Data' }
    ];
    this.transactionsData = new DashboardDto
  }

  ngOnInit(): void {
    this.period = this.util.currentYearMonth();
    this.getTransactionsByPeriod(this.period);
    this.getDashboardTotals()
  }

  getTransactionsByPeriod(period: string){
    this.getTransactions.getTransactionsByPeriod(period).subscribe(data => {
    this.expenseTable = data
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
          label: 'Despesas',
          data: this.transactionsData.totalizersByDay.map(item => item.totalExpenses),
          fill: true,
          borderColor: 'lightgrey',
          backgroundColor: '#ff7f00',
          tension: .4
        }
      ]
    }
    this.barData = {
      labels:  this.transactionsData.totalizersByDay.map(item => item.day),
      datasets: [
        {
          label: 'Despesas',
          data: this.transactionsData.totalizersByDay.map(item => item.totalExpenses),
          fill: true,
          borderColor: 'lightgrey',
          backgroundColor: '#ffd400',
          tension: .4
        }
      ]
    }
  }
}
