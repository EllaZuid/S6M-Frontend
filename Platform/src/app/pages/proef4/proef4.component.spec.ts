import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proef4Component } from './proef4.component';

describe('Proef4Component', () => {
  let component: Proef4Component;
  let fixture: ComponentFixture<Proef4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proef4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proef4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
