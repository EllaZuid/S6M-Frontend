import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUserModel } from 'src/app/models/loginUserModel';
import { AuthService } from 'src/app/services/auth.service';
import { tokenModel } from 'src/app/models/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  currentUser = new LoginUserModel();
  currentUserDecoded = new LoginUserModel();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.getRawValue());

    this.currentUser.uname = this.loginForm.value.uname;
    this.currentUser.password = this.loginForm.value.password;

    console.log(this.currentUser);
    console.log("responseCode");

    this.authService.login(this.currentUser).subscribe((result: any) => {
      console.log(result);

      const helper = new JwtHelperService();
      var tokenString = JSON.stringify(result.token);
      localStorage.setItem('Token', tokenString);
      var decoded = helper.decodeToken(tokenString);
      console.log(decoded);

      this.currentUserDecoded.id = decoded.id;

      localStorage.setItem('user', JSON.stringify(this.currentUserDecoded));

      this.router.navigate(['timeline']);
    }, (error: any) => {
      console.log('Authcomponent zegt error');
      console.log(error);
    });
  }

}
