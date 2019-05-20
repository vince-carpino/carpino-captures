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

  processForm() {
    this.disableSubmitButton = true;

    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disableSubmitButton = true;
      },
      error => {
        console.log('ERROR:', error);
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService
  ) {
    this.contactForm = fb.group({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

  ngOnInit() {}
}
