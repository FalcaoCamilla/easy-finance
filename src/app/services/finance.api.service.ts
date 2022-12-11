/*api for general requests*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardDto } from '../model/dashboard.dto';

@Injectable({
  providedIn: 'root'
})
export class FinanceApiService {

  URL = 'https://easy-finance-api.netlify.app/.netlify/functions/api/';

  constructor(private http: HttpClient) { }

  getTransactionsByPeriod(period: string): Observable<any>{
    return this.http.get(`${this.URL}transaction?period=${period}`)
  }

  getDashboardTotals(): Observable<DashboardDto>{
    return this.http.get<DashboardDto>(`${this.URL}dashboard`)
  }

  getAllDates(): Observable<any>{
    return this.http.get(`${this.URL}transaction/dates`)
  }

}
