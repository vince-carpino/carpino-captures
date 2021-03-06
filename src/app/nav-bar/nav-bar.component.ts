import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../navLink/navLink';
import { NightModeService } from '../services/night-mode.service';

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  siteName = 'Carpino Captures';
  isNight = this.nightModeService.isNight();
  instagramUrl = 'https://www.instagram.com/vince.carpino/';

  navLinks: NavLink[] = [
    { title: 'Home', url: '/', iconName: 'home' },
    { title: 'Instagram', url: this.instagramUrl, iconName: 'instagram-icon' },
    { title: 'About', url: '/about', iconName: 'person' },
    { title: 'Contact', url: '/contact', iconName: 'email' }
  ];

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public nightModeService: NightModeService) { }

  ngOnInit() { }

  public toggleSidenav() {
    this.sidenavToggle.emit();
  }

  navButtonClicked(link: NavLink) {
    if (link === this.navLinks[1]) {
      this.openLink(this.instagramUrl);
    }
  }

  openLink(url: string) {
    window.open(url);
  }
}
