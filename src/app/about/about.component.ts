import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { NightModeService } from '../services/night-mode.service';

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
  isNight = this.nightModeService.isNight();

  imageUrlPrefix = 'https://s3-us-west-1.amazonaws.com/carpino-captures/';

  getBioImageUrl() {
    return this.imageUrlPrefix + 'me.jpg';
  }

  constructor(public nightModeService: NightModeService) {}

  ngOnInit() {
    const el = document.getElementsByTagName('h1')[0];
    el.scrollIntoView({ block: 'end' });
  }
}
