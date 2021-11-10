import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProevenComponent } from './pages/proeven/proeven.component';
import { Proef3Component } from './pages/proef3/proef3.component';
import { Proef4Component } from './pages/proef4/proef4.component';
import { Proef5Component } from './pages/proef5/proef5.component';
import { Proef6Component } from './pages/proef6/proef6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProevenComponent,
    Proef3Component,
    Proef4Component,
    Proef5Component,
    Proef6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }