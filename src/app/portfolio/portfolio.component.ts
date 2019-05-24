import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pageTitle = 'Portfolio';

  imageUrls: string[] = [
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/01.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/02.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/03.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/04.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/05.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/06.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/07.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/08.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/09.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/10.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/11.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/12.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/13.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/14.JPG',
    // 'https://s3-us-west-1.amazonaws.com/carpino-captures/15.JPG',
    'src/assets/photos/01_fav.JPG',
    'src/assets/photos/02_fav.JPG',
    'src/assets/photos/03_fav.JPG',
    'src/assets/photos/04_fav.JPG',
    'src/assets/photos/05_fav.JPG',
    'src/assets/photos/06_fav.JPG',
    'src/assets/photos/07_non.JPG',
    'src/assets/photos/08_non.JPG',
    'src/assets/photos/09_fav.JPG',
    'src/assets/photos/10_fav.JPG',
    'src/assets/photos/11_fav.JPG',
    'src/assets/photos/12_fav.JPG',
    'src/assets/photos/13_non.JPG',
    'src/assets/photos/14_non.JPG',
    'src/assets/photos/15_fav.JPG',
    'src/assets/photos/16_fav.JPG',
    'src/assets/photos/17_fav.JPG'
  ];

  master: string[] = [];
  favorites: string[] = [];
  nonFavorites: string[] = [];

  constructor() {}

  populateMasterImageList() {
    this.imageUrls.forEach(url => {
      if (url.includes('fav')) {
        this.favorites.push(url);
      } else {
        this.nonFavorites.push(url);
      }
    });

    this.favorites.reverse().forEach(pic => {
      this.master.push(pic);
    });

    this.nonFavorites.reverse().forEach(pic => {
      this.master.push(pic);
    });
  }

  ngOnInit() {
    this.populateMasterImageList();
  }
}
