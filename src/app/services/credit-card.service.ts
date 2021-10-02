import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { CreditCard } from '../models/CreditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  public getAllCreditCards(): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.token
    });
    // header.append('Accept', 'application/json');
    // header.append('Content-Type', 'application/json');
    const options = { headers: header };

    return this.http.get(environment.baseUrl, options)
      .pipe(
        map((data: any) => {
          console.log("Before mapping: ", data);
          return data;
        }),
        filter((data: any) => {
          return true;
        })
      );
    
  }
}
