/*api for revenue posts and put*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class EditTransactionService {

  URL = 'https://easy-finance-api.netlify.app/.netlify/functions/api/transaction/edit';

  constructor(private http: HttpClient) { }

  // setTransactionById(id: string, obj: Transaction){
  //   return this.http.put<Transaction>(`${this.URL}?id=${id}&value=`, obj);
  // }

  setTransactionById(id: string, value: number) {
    return this.http.put<Transaction>(`${this.URL}?id=${id}&value=${value}`, null);
  }

  //corrigir put e verificar uso de Observables

}
