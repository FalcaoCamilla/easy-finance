/*api for revenue posts and put*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class RevenueApiService {

  URL = 'https://easy-finance-beta.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  setRevenueById(id: number, obj: Transaction){
    return this.http.put<Transaction>(`${this.URL}/transaction/edit?id=${id}&value=${obj}`, obj);
  }

  //corrigir put e verificar uso de Observables

}
