import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Picture } from '../interfaces/picture';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { NightModeService } from '../services/night-mode.service';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(400)])
    ])
  ]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  pageTitle = 'Portfolio';
  errorMessage = '';
  defaultImageUrl = 'https://via.placeholder.com/1100?text=loading...';
  isNight = this.nightModeService.isNight();
  master: Picture[] = [];

  constructor(
    private route: ActivatedRoute,
    public nightModeService: NightModeService
  ) {}

  ngOnInit() {
    this.getImagesFromS3();
  }

  ngAfterViewInit(): void {
    const el = document.getElementsByTagName('router-outlet')[0];
    el.scrollIntoView({ block: 'end' });
  }

  showFullSize(url: string) {
    const fullSizeUrl = this.getFullSizeUrl(url);
    window.open(fullSizeUrl, '_blank');
  }

  getFullSizeUrl(smallUrl: string): string {
    return smallUrl.replace('small', 'full');
  }

  getThumbnailUrl(picUrl: string): string {
    return picUrl.replace('small', 'smallest');
  }

  compareFunc = (a: Picture, b: Picture) => {
    if (a.fav && !b.fav) {
      return -1;
    }
    if (!a.fav && b.fav) {
      return 1;
    }
    return 0;
  }

  getImagesFromS3() {
    this.master = this.route.snapshot.data.images.sort(this.compareFunc);
  }

  imageLoaded() {}

  thumbnailLoaded() {}
}
