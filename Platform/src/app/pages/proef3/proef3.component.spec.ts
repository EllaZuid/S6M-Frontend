import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Proef3Component } from './proef3.component';

describe('Proef3Component', () => {
  let component: Proef3Component;
  let fixture: ComponentFixture<Proef3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proef3Component, HomeComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: []
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proef3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
