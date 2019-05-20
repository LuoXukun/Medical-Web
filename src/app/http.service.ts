import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://162.105.89.218:22081/';
  }

  get<T>(relativePath: string) {
    console.log('get:' + this.baseUrl + relativePath);
    return this.http.get<T>(this.baseUrl + relativePath + '?time=' + new Date().getTime(), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  post<T>(relativePath: string, data: T): Observable<any> {
    console.log('post: ' + this.baseUrl + relativePath);
    return this.http.post<any>(this.baseUrl + relativePath, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
