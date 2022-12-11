import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class FinanceIntroduceService {

  URL = 'https://easy-finance-api.netlify.app/.netlify/functions/api/transaction/';

  constructor(private http: HttpClient) { }

  setTransaction(transaction: any): Observable<any>{
    return this.http.post<any>(`${this.URL}create`, transaction)
  }

}
