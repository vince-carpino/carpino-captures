import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ConnectionService } from '../services/connection.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageTitle = 'Contact';

  contactForm: FormGroup;
  disableSubmitButton = true;

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  nameString = '';
  emailString = '';
  messageString = '';

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disableSubmitButton = false;
    }
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

  processForm() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disableSubmitButton = true;
    },
    error => {
      console.log('ERROR:', error);
    });
  }

  anyErrors(): boolean {
    return (
      this.name.hasError('required') ||
      this.email.hasError('required') ||
      this.email.hasError('email') ||
      this.message.hasError('required')
    );
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService
  ) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {}
}
