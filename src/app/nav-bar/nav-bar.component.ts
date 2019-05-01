import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  siteName = 'Carpino Captures';
  linkNames = ['Home', 'Instagram', 'Contact'];
  instagramUrl = 'https://www.instagram.com/vince_carpino/';

  constructor() {}

  ngOnInit() {}

  navButtonClicked(link: string) {
    switch (link) {
      case 'Instagram':
        this.openLink(this.instagramUrl);
        break;
      default:
        break;
    }
  }

  getLinkFromName(linkName: string): string {
    let link = '';

    switch (linkName) {
      case 'Contact':
        link = '/contact';
        break;
      default:
        break;
    }

    return link;
  }

  getSvgFromLinkName(linkName: string): string {
    let svgName = '';

    switch (linkName) {
      case 'Home':
        svgName = 'home-icon';
        break;
      case 'Instagram':
        svgName = 'instagram-icon';
        break;
      case 'Contact':
        svgName = 'email-icon';
        break;
      default:
        break;
    }

    return svgName;
  }

  openLink(url: string) {
    window.open(url);
  }
}
