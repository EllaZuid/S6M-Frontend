import { LoginUserModel } from 'src/app/models/loginUserModel';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUserModel } from '../models/registerUserModel';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  token: any;

  login(userModel: LoginUserModel) {
    console.log('Attempting to connect.');

    this.token = this.http.post(environment.linkAuth + '/auth/login', userModel, {observe: 'response'});
    return this.token;
  }


  register(userModel: RegisterUserModel) {
    console.log('Attempting to connect.');

    const headers = {
      'Access-Control-Allow-Origin': '*'
    };

    return this.http.post(environment.linkAuth + '/auth/register', userModel, {'headers':headers});
  }
}
