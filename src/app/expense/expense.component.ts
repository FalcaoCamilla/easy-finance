import { Component, Input, OnInit } from '@angular/core';
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
    ]
  }

  ngOnInit(): void {
    this.period = this.util.currentYearMonth();
    this.getTransactionsByPeriod(this.period)
  }

  getTransactionsByPeriod(period: string){
    this.getTransactions.getTransactionsByPeriod(period).subscribe(data => {
    this.expenseTable = data
    })
  }
}
