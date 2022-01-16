import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProevenComponent } from './pages/proeven/proeven.component';
import { Proef3Component } from './pages/proef3/proef3.component';
import { Proef4Component } from './pages/proef4/proef4.component';
import { Proef5Component } from './pages/proef5/proef5.component';
import { Proef6Component } from './pages/proef6/proef6.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'proeven', component: ProevenComponent},
  {path: 'proef3', component: Proef3Component},
  {path: 'proef4', component: Proef4Component},
  {path: 'proef5', component: Proef5Component},
  {path: 'proef6', component: Proef6Component},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
