import { Component, OnInit } from '@angular/core';
import { RevenueTransaction } from '../model/revenue.transaction';
import { RevenueApiService } from '../services/revenue.api.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  revenueTransaction: RevenueTransaction;

  constructor(private introduce: RevenueApiService) {
    this.revenueTransaction = new RevenueTransaction
  }

  ngOnInit(): void {
  }

  introduceRevenue(revenueTransaction: RevenueTransaction){
    this.introduce.introduceRevenue(revenueTransaction).subscribe(data => {
      this.revenueTransaction = data
    })
  }

}
