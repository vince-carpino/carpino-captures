import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageTitle = 'Contact';

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  nameString = '';
  emailString = '';
  messageString = '';

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

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.nameString}. My email is ${
      this.emailString
    }. My message is ${this.messageString}`;

    alert(allInfo);
  }

  anyErrors(): boolean {
    return (
      this.name.hasError('required') ||
      this.email.hasError('required') ||
      this.email.hasError('email') ||
      this.message.hasError('required')
    );
  }

  constructor() {}

  ngOnInit() {}
}
