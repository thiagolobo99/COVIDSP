import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../environments/environment'
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FezinhaService {

  url: string = 'https://poc-ibm-backend.mybluemix.net/twitter/'

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listTwitter(objTwitter) {    
    return this.http.get(this.url + objTwitter)
    .pipe(
      map(response => {
        return response;
      })
    );
  }

}
