import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle = 'About Me';

  imageUrlPrefix = 'https://s3-us-west-1.amazonaws.com/carpino-captures/';

  getBioImageUrl() {
    return this.imageUrlPrefix + 'me.JPG';
  }

  constructor() {}

  ngOnInit() {}
}
