/*api for general requests*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {

  URL = 'https://easy-finance-beta.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getTransactionsByPeriod(period: string): Observable<any>{
    return this.http.get(`${this.URL}transaction?period=${period}`)
  }

  getAllDates(): Observable<any>{
    return this.http.get(`${this.URL}transaction/dates`)
  }

}
