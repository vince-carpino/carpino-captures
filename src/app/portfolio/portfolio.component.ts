import { Component, OnInit } from '@angular/core';
import { PortfolioImagesService } from '../services/portfolio-images.service';
import { Picture } from '../picture/picture';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pageTitle = 'Portfolio';
  errorMessage = '';
  master: Picture[] = [];

  constructor(private imageService: PortfolioImagesService) {}

  showFullSize(url: string) {
    const fullSizeUrl = this.getFullSizeUrl(url);
    console.log(fullSizeUrl);
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
        pics = pics.reverse().sort(this.compareFunc);
        this.master = pics;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  ngOnInit() {
    this.getImagesFromS3();
  }
}
