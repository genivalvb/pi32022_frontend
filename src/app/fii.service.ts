import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , retry} from 'rxjs/operators';
import { Fii } from './model/fii';

@Injectable({
  providedIn: 'root'
})
export class FiiService {

  private baseURL = "https://floating-headland-69192.herokuapp.com/api/v1/fiis";
  //private baseURL = "http://localhost:8080/api/v1/fiis"

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getFiisList(): Observable<Fii[]>{
    return this.httpClient.get<Fii[]>(`${this.baseURL}`)
      .pipe(
        retry(2),
        catchError(this.handleError('getFiisList', []))
        );
  }

  getFiiById(id: number): Observable<Fii>{
    return this.httpClient.get<Fii>(`${this.baseURL}/${id}`);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
