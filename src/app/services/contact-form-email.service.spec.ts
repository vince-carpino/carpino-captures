import { TestBed, inject } from '@angular/core/testing';

import { ContactFormEmailService } from './contact-form-email.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactFormEmailService],
      imports: [NoopAnimationsModule]
    });
  });

  it('should be created', inject(
    [ContactFormEmailService],
    (service: ContactFormEmailService) => {
      expect(service).toBeTruthy();
    }
  ));
});
