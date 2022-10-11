import { TestBed } from '@angular/core/testing';

import { DostavljacService } from './dostavljac.service';

describe('DostavljacService', () => {
  let service: DostavljacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DostavljacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
