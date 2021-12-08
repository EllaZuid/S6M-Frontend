import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProevenComponent } from './proeven.component';

describe('ProevenComponent', () => {
  let component: ProevenComponent;
  let fixture: ComponentFixture<ProevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
