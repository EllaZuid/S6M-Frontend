import { TestBed } from '@angular/core/testing';

import { ProefService } from './proef.service';

describe('ProefService', () => {
  let service: ProefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
