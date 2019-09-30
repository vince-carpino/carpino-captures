import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../navLink/navLink';

@Component({
  selector: 'cc-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  instagramUrl = 'https://www.instagram.com/vince_carpino/';
  mailToUrl =
    'mailto:contact.carpinocaptures@gmail.com?subject=Contact Form Submission';
  navLinks: NavLink[] = [
    { title: 'Home', url: '/', iconName: 'home' },
    { title: 'Instagram', url: this.instagramUrl, iconName: 'instagram-icon' },
    { title: 'About', url: '/about', iconName: 'person' }
    // { title: 'Contact', url: '/contact', iconName: 'email' }
  ];

  @Output() public toggleSidenav = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  closeSidenav() {
    this.toggleSidenav.emit();
  }

  handleClickedLink(link: NavLink) {
    this.closeSidenav();

    if (link === this.navLinks[1]) {
      window.open(link.url);
    }
  }

  getRouterLink(link: NavLink) {
    if (link !== this.navLinks[1]) {
      return link.url;
    }

    return '';
  }
}
