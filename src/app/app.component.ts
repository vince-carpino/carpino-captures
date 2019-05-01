import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconsToRegister: string[] = [
    'about-me-icon',
    'home-icon',
    'instagram-icon',
    'email-icon'
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.iconsToRegister.forEach((icon) => {
      this.registerSvgIcon(icon);
    });
  }

  registerSvgIcon(iconName: string) {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/svg/${iconName}.svg`
      )
    );
  }
}
