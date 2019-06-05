import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pageTitle = 'Portfolio';

  imageUrlPrefix = 'https://s3-us-west-1.amazonaws.com/carpino-captures/';
  favPrefix = 'https://s3-us-west-1.amazonaws.com/carpino-captures/f/small/';
  nonPrefix = 'https://s3-us-west-1.amazonaws.com/carpino-captures/n/small/';
  canStillFindImages = true;

  errorMessage = '';

  master: string[] = [];
  favorites: string[] = [];
  nonFavorites: string[] = [];

  imageUrls: string[] = [
    '1_fav.JPG',
    '2_fav.JPG',
    '3_fav.JPG',
    '4_fav.JPG',
    '5_fav.JPG',
    '6_fav.JPG',
    '7_fav.JPG',
    '8_fav.JPG',
    '9_fav.JPG',
    '10_fav.JPG',
    '11_fav.JPG',
    '12_fav.JPG',
    '13_fav.JPG',
    '1_non.JPG',
    '2_non.JPG',
    '3_non.JPG',
    '4_non.JPG'
  ];

  constructor(
    private http: HttpClient,
  ) {}

  getImagesFromS3() {
    const urlPrefix = this.favPrefix;
    let url = '';

    for (let i = 1; i < 15; ++i) {
      if (this.canStillFindImages) {
        url = `${urlPrefix + i.toString()}.JPG`;
        this.http.get(url, { responseType: 'blob' }).subscribe(
          () => {
            console.log('found image');
            this.master.push(url);
          },
          () => {
            console.log('invalid image');
            this.canStillFindImages = false;
          }
        );
      }
    }
  }

  createFullImageUrls() {
    this.imageUrls.forEach(url => {
      if (url.includes('fav')) {
        url = this.favPrefix + url;
        this.favorites.push(url);
      } else {
        url = this.nonPrefix + url;
        this.nonFavorites.push(url);
      }
    });

    this.populateMasterImageList();
  }

  populateMasterImageList() {
    this.favorites.reverse().forEach(pic => {
      this.master.push(pic);
    });

    this.nonFavorites.reverse().forEach(pic => {
      this.master.push(pic);
    });
  }

  ngOnInit() {
    this.createFullImageUrls();
  }
}
