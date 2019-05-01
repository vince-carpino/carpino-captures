import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  siteName = 'Carpino Captures';
  linkNames = ['Home', 'Instagram', 'About Me', 'Contact'];
  instagramUrl = 'https://www.instagram.com/vince_carpino/';

  constructor() {}

  ngOnInit() {}

  navButtonClicked(link: string) {
    switch (link) {
      case this.linkNames[1]:
        this.openLink(this.instagramUrl);
        break;
      default:
        break;
    }
  }

  getLinkFromName(linkName: string): string {
    let link = '';

    switch (linkName) {
      case this.linkNames[2]:
        link = '/about';
        break;
      case this.linkNames[3]:
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
      case this.linkNames[0]:
        svgName = 'home-icon';
        break;
      case this.linkNames[1]:
        svgName = 'instagram-icon';
        break;
      case this.linkNames[2]:
        svgName = 'about-me-icon';
        break;
      case this.linkNames[3]:
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
