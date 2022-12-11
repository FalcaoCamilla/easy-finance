import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-introduce-transaction',
  templateUrl: './introduce-transaction.component.html',
  styleUrls: ['./introduce-transaction.component.css']
})
export class IntroduceTransactionComponent implements OnInit {

  newTransaction: Transaction;

  constructor() {
    this.newTransaction = new Transaction;
  }

  ngOnInit(): void {
  }

  introduceTransaction(){
    
  }

}
