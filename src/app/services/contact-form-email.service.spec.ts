import { TestBed, inject } from '@angular/core/testing';

import { ContactFormEmailService } from './contact-form-email.service';

describe('ConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactFormEmailService]
    });
  });

  it('should be created', inject([ContactFormEmailService], (service: ContactFormEmailService) => {
    expect(service).toBeTruthy();
  }));
});
