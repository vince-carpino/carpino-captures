import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../navLink/navLink';

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  siteName = 'Carpino Captures';
  instagramUrl = 'https://www.instagram.com/vince_carpino/';
  mailToUrl =
    'mailto:contact.carpinocaptures@gmail.com?subject=Contact Form Submission';

  navLinks: NavLink[] = [
    { title: 'Home', url: '/', iconName: 'home' },
    { title: 'Instagram', url: this.instagramUrl, iconName: 'instagram-icon' },
    { title: 'About', url: '/about', iconName: 'person' }
    // { title: 'Contact', url: '/contact', iconName: 'email' }
  ];

  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public toggleSidenav() {
    this.sidenavToggle.emit();
  }

  navButtonClicked(link: NavLink) {
    if (link === this.navLinks[1]) {
      this.openLink(this.instagramUrl);
    }
  }

  getUrlFromLink(link: NavLink): string {
    if (link !== this.navLinks[1]) {
      return link.url;
    }

    return '';
  }

  openLink(url: string) {
    window.open(url);
  }
}
