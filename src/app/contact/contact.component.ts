import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { GOOGLE_SCRIPT_URL } from '../constants';
import { take } from 'rxjs/operators';

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
export class ContactComponent implements OnInit {
  pageTitle = 'Contact';

  contactForm: FormGroup;
  sendingMessage = 'Sending...';
  sendingConfig = { panelClass: ['snack-bar-sending'] };
  successMessage = 'Sent!';
  successConfig = { duration: 3000, panelClass: ['snack-bar-success'] };
  errorMessage = 'Something went wrong, please try again';
  errorConfig = { duration: 5000, panelClass: ['snack-bar-error'] };

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  formData = [
    {
      title: 'Name',
      placeholder: 'Michael Scott',
      controlName: 'name',
      control: this.name
    },
    {
      title: 'Email',
      placeholder: 'm.scott@dundermifflin.com',
      controlName: 'email',
      control: this.email
    },
    {
      title: 'Message',
      placeholder: 'That\'s what she said',
      controlName: 'message',
      control: this.message
    }
  ];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private http: HttpClient,
  ) {
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

  ngOnInit() { }

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

  onSubmit() {
    this.openSnackbar(this.sendingMessage, this.sendingConfig);
    this.contactForm.disable();

    let formData: FormData = new FormData();
    formData.append('name', this.contactForm.controls.name.value);
    formData.append('email', this.contactForm.controls.email.value);
    formData.append('message', this.contactForm.controls.message.value);

    this.http.post(GOOGLE_SCRIPT_URL, formData).pipe(take(1)).subscribe({
      next: () => {
        this.openSnackbar(this.successMessage, this.successConfig);
        this.contactForm.reset();
        this.contactForm.enable();
      },
      error: () => {
        this.openSnackbar(this.errorMessage, this.errorConfig);
        this.contactForm.enable();
      }
    });
  }
}
