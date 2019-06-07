import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioImagesService } from '../services/portfolio-images.service';
import { Picture } from '../picture/picture';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel
} from '@angular/router';

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
  master: Picture[] = [];
  loading = true;

  constructor(
    private imageService: PortfolioImagesService,
    private router: Router
  ) {
    this.loading = true;
  }

  showFullSize(url: string) {
    const fullSizeUrl = this.getFullSizeUrl(url);
    window.open(fullSizeUrl, '_blank');
  }

  getFullSizeUrl(smallUrl: string): string {
    return smallUrl.replace('small', 'full');
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
    this.imageService.getImagesFromManifest().subscribe(
      pics => {
        pics = pics.sort(this.compareFunc);
        this.master = pics;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  ngOnInit() {
    this.getImagesFromS3();
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }
}
