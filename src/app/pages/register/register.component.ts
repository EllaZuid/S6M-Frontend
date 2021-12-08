import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterUserModel } from 'src/app/models/registerUserModel';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

interface Month {
  value: number;
  viewValue: string;
}

interface Day {
  value: number;
  viewValue: string;
}

interface Year {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public registerForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  currentUser = new RegisterUserModel();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(+ this.registerForm.getRawValue());

    this.currentUser.uname = this.registerForm.value.uname;
    this.currentUser.password = this.registerForm.value.password;
    this.currentUser.password2 = this.registerForm.value.password2;
    this.currentUser.email = this.registerForm.value.email;

    console.log(this.currentUser);

    if(this.currentUser.password == this.currentUser.password2){
      this.authService.register(this.currentUser).subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['home']);
  
      }, (error) => {
        console.log('Authcomponent zegt error');
        console.log(error);
      });
    }else{
      console.log("De ingevoerde wachtwoorden zijn niet gelijk.");
    }
  }
}
