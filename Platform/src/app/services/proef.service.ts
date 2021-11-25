import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScoreModel } from './../models/scoreModel';
import * as cors from 'cors'

@Injectable({
  providedIn: 'root'
})
export class ProefService {

  constructor(private http: HttpClient) { }

  sendScore(proef: ScoreModel){

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // }

    console.log('score formulier word verzonden...');

    return this.http.post(environment.link + '/dressuur', JSON.stringify(proef));
  }
}
