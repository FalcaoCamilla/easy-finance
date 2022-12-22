import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  constructor(private editT: EditTransactionService,
    private route: ActivatedRoute,
    private router: Router,
    private primengConfig: PrimeNGConfig) {
    this.transactions = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
    this.id = (param['id'])});
    this.newTransaction = {};
    this.primengConfig.ripple = true;
  }

  setTransaction(transactionForm: any){

    this.editT.setTransactionById(this.id, this.newTransaction.value).subscribe(res => {
      console.log(this.newTransaction.value)
      this.newTransaction = res
      this.router.navigate(["/account"])
    })
  }

  // setTransaction(transactionForm: any){
  //   this.editT.setTransactionById(this.id, this.newTransaction).subscribe(res => {

  //     this.newTransaction.year = new Date(this.newTransaction.yearMonthDay).getFullYear();
  //     this.newTransaction.month = (new Date(this.newTransaction.yearMonthDay).getMonth()+1).toString();
  //     this.newTransaction.day = new Date(this.newTransaction.yearMonthDay).getUTCDate();
  //     this.newTransaction.yearMonth = this.newTransaction.year + '-' + this.newTransaction.month;

  //     this.newTransaction.push(res)
  //     this.router.navigate(["/account"])
  //   })
  // }

}
