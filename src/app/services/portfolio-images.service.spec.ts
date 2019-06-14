import { TestBed, inject } from '@angular/core/testing';

import { PortfolioImagesService } from './portfolio-images.service';
import { HttpClientModule } from '@angular/common/http';

describe('PortfolioImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioImagesService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PortfolioImagesService], (service: PortfolioImagesService) => {
    expect(service).toBeTruthy();
  }));
});
