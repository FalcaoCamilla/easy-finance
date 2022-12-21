/*api for revenue posts and put*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class DeleteApiService {

  URL = 'https://easy-finance-api.netlify.app/.netlify/functions/api/';

  constructor(private http: HttpClient) { }

  deleteTransactionById(id: string){
    return this.http.delete(`${this.URL}transaction/remove?id=${id}`)
  }

}
