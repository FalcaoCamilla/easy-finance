import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Transaction } from '../model/transaction';
import { FinanceIntroduceService } from '../services/finance.introduce.service';

@Component({
  selector: 'app-introduce-transaction',
  templateUrl: './introduce-transaction.component.html',
  styleUrls: ['./introduce-transaction.component.css']
})
export class IntroduceTransactionComponent implements OnInit {

  transactions: Transaction[];
  newTransaction: any;
  type: string = '+';
  dates: any = [];

  constructor(private introduceT: FinanceIntroduceService, private primengConfig: PrimeNGConfig, private router: Router) {
    this.transactions = [];
  }

  ngOnInit(): void {
    this.newTransaction = {};
    this.primengConfig.ripple = true;
  }

  introduceTransaction(transactionForm: any){
    this.newTransaction.year = new Date(this.newTransaction.yearMonthDay).getFullYear();
    this.newTransaction.month = (new Date(this.newTransaction.yearMonthDay).getMonth()+1).toString();
    this.newTransaction.day = new Date(this.newTransaction.yearMonthDay).getUTCDate();
    this.newTransaction.yearMonth = this.newTransaction.year + '-' + this.newTransaction.month

    this.introduceT.setTransaction(this.newTransaction).subscribe(res => {

      this.transactions.push(res)

      this.router.navigate(["/account"])
    })
  }

}
