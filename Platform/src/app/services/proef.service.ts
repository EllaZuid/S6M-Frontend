import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScoreModel } from './../models/scoreModel';

@Injectable({
  providedIn: 'root'
})
export class ProefService {

  constructor(private http: HttpClient) { }

  sendScore(proef: ScoreModel){
    let headers;
    console.log(proef);
    console.log('score formulier word verzonden...');
    return this.http.post(environment.link + '/dressuur/score', proef, {observe: 'response'});
  }
}
