import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
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
    ]
  }

  ngOnInit(): void {
    this.period = this.util.currentYearMonth();
    this.getTransactionsByPeriod(this.period)
  }

  getTransactionsByPeriod(period: string){
    this.getTransactions.getTransactionsByPeriod(period).subscribe(data => {
    this.revenueTable = data
    })
  }

}
