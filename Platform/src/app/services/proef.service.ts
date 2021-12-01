import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScoreModel } from './../models/scoreModel';
import * as cors from 'cors'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'}
)
export class ProefService {

  constructor(private http: HttpClient) { }

  sendScore(proef: ScoreModel): Observable<ScoreModel>{

    const headers = {
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    const body = JSON.stringify(proef);

    console.log('score formulier word verzonden...');

    return this.http.post<ScoreModel>(environment.link + '/dressuur', body, {'headers':headers});
  }

  // handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }
}

// export const sendScore = (proef: ScoreModel) => {
//   return() => {
//     fetch(environment.link + '/dressuur', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       },
//       body: JSON.stringify(proef)
//     })
//   }
// }
