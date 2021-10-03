import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  loader: any;
  constructor(private http: HttpClient, private loadingController: LoadingController) { }

  public getAllCreditCards(): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + environment.token
    });
    // header.append('Accept', 'application/json');
    // header.append('Content-Type', 'application/json');
    const options = { headers: header };
    
    this.showLoader();

    return this.http.get(environment.baseUrl, options)
      .pipe(
        map((res: any) => {
          //console.log("Before mapping: ", data);
          this.hideLoader();
          return res.data;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          this.hideLoader();
          return throwError(error);
        })
    );
  }

  showLoader() {
    this.loader = this.loadingController.create({
      message: 'Loading'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }

  hideLoader() {
      this.loadingController.dismiss();
  }
}
