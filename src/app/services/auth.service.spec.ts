import { Router } from '@angular/router';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserModel } from '../models/loginUserModel';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tokenModel } from '../models/tokenModel';


describe('AuthService', () => {
  let fixture: ComponentFixture<LoginComponent>;

  let service: AuthService;
  let router: Router;
  let userModel: LoginUserModel;
  let component: LoginComponent;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
    ],
    providers: []
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    service = TestBed.get(AuthService);
    router = TestBed.get(Router);
    userModel = new LoginUserModel();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('login should be successful', () => {
    let o: tokenModel = new tokenModel();
    // tslint:disable-next-line: max-line-length
    o['token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTd2FnZ2VyIiwiaWQiOjQsImlhdCI6MTU3OTUyMDAxMywiZXhwIjoxNTc5NTI3MjEzfQ.CNEB4USJMPqmYkUEHy_Dg0naNepkyNp3V5XtOii-cHM';

    spyOn(service, 'login').and.returnValue(new Observable((observer) => {

      observer.next(o);
      observer.complete();
    }));
    spyOn(router, 'navigate');

    component.loginForm.controls['username'].setValue('admin1');
    component.loginForm.controls['password'].setValue('admin1');
    component.login();

    userModel.uname = 'admin1';
    userModel.password = 'admin1';

    expect(service.login).toHaveBeenCalledWith(userModel);
    expect(router.navigate).toHaveBeenCalledWith(['index']);
  });
});
