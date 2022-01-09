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
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify(proef);

    console.log('score formulier word verzonden...');

    return this.http.post<ScoreModel>(environment.linkDressuur + '/dressuur', body, {'headers':headers});
  }
}