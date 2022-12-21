import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Transaction } from '../model/transaction';
import { EditTransactionService } from '../services/edit-transaction.api.service';
import { FinanceIntroduceService } from '../services/finance.introduce.service';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  transactions: Transaction[];
  newTransaction: any;
  type: string = '+';
  dates: any = [];
  id: string = '';

  constructor(private editT: EditTransactionService, private primengConfig: PrimeNGConfig) {
    this.transactions = [];
  }

  ngOnInit(): void {
    this.newTransaction = {};
    this.primengConfig.ripple = true;
  }

  setTransaction(id: string, transactionForm: any){
    this.editT.setTransactionById(id, transactionForm).subscribe(res => {
      transactionForm = res
    })
  }

}
