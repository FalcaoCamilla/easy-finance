/*api for revenue posts and put*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class DeleteApiService {

  URL = 'https://easy-finance-beta.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  deleteTransactionById(id: number){
    return this.http.delete(`/transaction/remove?id=${id}`)
  }

}
