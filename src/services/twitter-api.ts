import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterApiService {

  url: string = 'https://poc-ibm-backend.mybluemix.net/twitter'

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  dataTwitter() {
    return this.http.get(this.url + '/').pipe(
      map(response => {
        console.log(response)
        return response;
      })
    );
  }
}
