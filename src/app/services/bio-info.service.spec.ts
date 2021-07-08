import { TestBed } from '@angular/core/testing';

import { BioInfoService } from './bio-info.service';

describe('BioInfoService', () => {
  let service: BioInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
