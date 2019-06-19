import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)])
    ])
  ]
})
export class ContactComponent implements OnInit, OnDestroy {
  pageTitle = 'Contact';

  contactForm: FormGroup;
  emailSubscription: Subscription;
  successMessage = 'Your message was sent';
  successConfig = { duration: 3000, panelClass: ['snack-bar-success'] };
  errorMessage = 'Something went wrong, please try again';
  errorConfig = { duration: 5000, panelClass: ['snack-bar-error'] };

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

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
    this.contactForm.disable();

    this.emailSubscription = this.emailService
      .sendMessage(this.contactForm.value)
      .subscribe(
        () => {
          this.openSnackbar(this.successMessage, this.successConfig);
          this.contactForm.reset();
          this.contactForm.enable();
        },
        () => {
          this.openSnackbar(this.errorMessage, this.errorConfig);
          this.contactForm.enable();
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

  ngOnDestroy() {
    if (this.emailSubscription) {
      this.emailSubscription.unsubscribe();
    }
  }
}
