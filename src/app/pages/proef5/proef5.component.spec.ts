import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proef5Component } from './proef5.component';

describe('Proef5Component', () => {
  let component: Proef5Component;
  let fixture: ComponentFixture<Proef5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proef5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proef5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
