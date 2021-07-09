import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NightModeService } from './services/night-mode.service';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconsToRegister: string[] = [
    'about-me-icon',
    'angular-icon',
    'home-icon',
    'instagram-icon',
    'email-icon'
  ];

  isNight = this.nightModeService.isNight();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public nightModeService: NightModeService,
  ) {
    this.iconsToRegister.forEach(icon => {
      this.registerSvgIcon(icon);
    });
  }

  registerSvgIcon(iconName: string) {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/svg/${ iconName }.svg`
      )
    );
  }
}
