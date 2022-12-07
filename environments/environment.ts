import { HttpHeaders, HttpParams } from "@angular/common/http";

export const environment = {
  production: false,
  name: 'development',
  httpOptions: {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  },
  params: new HttpParams({
  })
};
