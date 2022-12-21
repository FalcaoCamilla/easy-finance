import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IntroduceTransactionComponent } from '../introduce-transaction/introduce-transaction.component';
import { Transaction } from '../model/transaction';
import { GlobalUtil } from '../model/util.global';
import { DeleteApiService } from '../services/delete.api.service';
import { EditTransactionService } from '../services/edit-transaction.api.service';
import { FinanceApiService } from '../services/finance.api.service';

@Component({
  selector: 'app-account-extract',
  templateUrl: './account-extract.component.html',
  styleUrls: ['./account-extract.component.css'],
})
export class AccountExtractComponent implements OnInit {

  period: any;
  columnsTransaction: any[];
  transactionsTable: Transaction[];

  @ViewChild(Table)
  dtable!: Table;

  @Input() set tableTransaction(tableTransaction: Transaction[]){
    this.transactionsTable = tableTransaction;
    // this.dtable.reset();
  }

  constructor(private getTransactions: FinanceApiService,
    private delTransaction: DeleteApiService,
    private editT: EditTransactionService,
    private util: GlobalUtil,
    private router: Router) {
    this.transactionsTable = [];
    this.columnsTransaction = [
      { field: 'type', header: 'Tipo' },
      { field: 'category', header: 'Categoria' },
      { field: 'description', header: 'Descrição' },
      { field: 'value', header: 'Valor' },
      { field: 'date', header: 'Data' },
      { field: 'options', header: 'Opções' },
    ]
  }

  ngOnInit(): void {
    this.period = this.util.currentYearMonth();
    this.getTransactionsByPeriod(this.period)
  }

  getTransactionsByPeriod(period: string){
    this.getTransactions.getTransactionsByPeriod(period).subscribe(data => {
      this.transactionsTable = data
    })
  }


  editTransactionById(id: string){
    this.router.navigate([`/edit/${id}`])
    return id
  }

  deleteTransaction(id: string){
    this.delTransaction.deleteTransactionById(id).subscribe();
    setTimeout(function(){
      window.location.reload();
   }, 800)
  }

}
