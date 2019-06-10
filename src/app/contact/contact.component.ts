import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ContactFormEmailService } from '../services/contact-form-email.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1, top: '0px' })),
      transition(':enter', [style({ opacity: 0, top: '-10px' }), animate(600)])
    ])
  ]
})
export class ContactComponent implements OnInit {
  pageTitle = 'Contact';

  contactForm: FormGroup;
  disableSubmitButton = true;
  successMessage = 'Your message was sent';
  successDelay = { duration: 3000 };
  errorMessage = 'There was an error sending your message, please try again';
  errorDelay = { duration: 5000 };

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  @HostListener('input') onInput() {
    this.disableSubmitButton = !this.contactForm.valid;
  }

  getErrorMessage(field: string) {
    switch (field) {
      case 'name':
        return this.name.hasError('required') ? 'Please enter a value' : '';
      case 'email':
        return this.email.hasError('required')
          ? 'Please enter a value'
          : this.email.hasError('email')
          ? 'Invalid email'
          : '';
      case 'message':
        return this.message.hasError('required') ? 'Please enter a value' : '';
      default:
        break;
    }
  }

  openSnackbar(message: string, delay: {}) {
    this.snackbar.open(message, '', delay);
  }

  processForm() {
    this.disableSubmitButton = true;
    this.contactForm.disable();

    this.emailService.sendMessage(this.contactForm.value).subscribe(
      () => {
        this.openSnackbar(this.successMessage, this.successDelay);
        this.contactForm.reset();
        this.contactForm.enable();
        this.disableSubmitButton = true;
      },
      error => {
        this.openSnackbar(this.errorMessage, this.errorDelay);
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private emailService: ContactFormEmailService
  ) {
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

  ngOnInit() {}
}
