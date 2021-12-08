import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proef3Component } from './proef3.component';

describe('Proef3Component', () => {
  let component: Proef3Component;
  let fixture: ComponentFixture<Proef3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proef3Component ]
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
