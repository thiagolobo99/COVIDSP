import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  url: string = 'https://poc-ibm-backend.mybluemix.net/covid'

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  dataCovid() {
    return this.http.get(this.url + '/covid/general').pipe(
      map(response => {
        return response;
      })
    );
  }
}
