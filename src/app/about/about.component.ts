import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'cc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(400)])
    ])
  ]
})
export class AboutComponent implements OnInit {
  pageTitle = 'About Me';

  imageUrlPrefix = 'https://s3-us-west-1.amazonaws.com/carpino-captures/';

  getBioImageUrl() {
    return this.imageUrlPrefix + 'me.jpg';
  }

  constructor() {}

  ngOnInit() {
    const el = document.getElementsByTagName('router-outlet')[0];
    el.scrollIntoView({ block: 'end' });
  }
}
