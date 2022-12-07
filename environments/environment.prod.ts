import { HttpHeaders } from "@angular/common/http";


export const environment = {
  production: true,
  name: 'production',
  httpOptions: {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
};


