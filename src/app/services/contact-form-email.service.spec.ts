import { TestBed, inject } from '@angular/core/testing';

import { ContactFormEmailService } from './contact-form-email.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('ContactFormEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactFormEmailService],
      imports: [NoopAnimationsModule, HttpClientModule]
    });
  });

  it('should be created', inject(
    [ContactFormEmailService],
    (service: ContactFormEmailService) => {
      expect(service).toBeTruthy();
    }
  ));
});
