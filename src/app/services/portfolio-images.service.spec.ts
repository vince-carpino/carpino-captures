import { TestBed, inject } from '@angular/core/testing';

import { PortfolioImagesService } from './portfolio-images.service';

describe('PortfolioImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioImagesService]
    });
  });

  it('should be created', inject([PortfolioImagesService], (service: PortfolioImagesService) => {
    expect(service).toBeTruthy();
  }));
});
