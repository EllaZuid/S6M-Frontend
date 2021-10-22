import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proef6Component } from './proef6.component';

describe('Proef6Component', () => {
  let component: Proef6Component;
  let fixture: ComponentFixture<Proef6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proef6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proef6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
