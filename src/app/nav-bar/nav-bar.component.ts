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

  openLink(url: string) {
    window.open(url);
  }
}
