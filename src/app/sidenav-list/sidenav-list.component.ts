import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../navLink/navLink';
import { NightModeService } from '../services/night-mode.service';

@Component({
  selector: 'cc-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  isNight = this.nightModeService.isNight();
  instagramUrl = 'https://www.instagram.com/vince.carpino/';
  mailToUrl =
    'mailto:contact.carpinocaptures@gmail.com?subject=Contact Form Submission';
  navLinks: NavLink[] = [
    { title: 'Home', url: '/', iconName: 'home' },
    { title: 'Instagram', url: this.instagramUrl, iconName: 'instagram-icon' },
    { title: 'About', url: '/about', iconName: 'person' }
    // { title: 'Contact', url: '/contact', iconName: 'email' }
  ];

  @Output() public toggleSidenav = new EventEmitter();

  constructor(public nightModeService: NightModeService) {}

  ngOnInit() {}

  closeSidenav() {
    this.toggleSidenav.emit();
  }

  handleClickedLink(linkUrl: string) {
    this.closeSidenav();

    if (linkUrl === this.instagramUrl) {
      window.open(linkUrl);
    }
  }

  getRouterLink(linkUrl: string) {
    if (linkUrl !== this.instagramUrl) {
      return linkUrl;
    }

    return '';
  }
}
