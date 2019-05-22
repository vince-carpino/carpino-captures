import { Component, OnInit } from '@angular/core';
import { Picture } from './picture/picture';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pageTitle = 'Portfolio';

  col1: Picture[] = [];
  col2: Picture[] = [];
  col3: Picture[] = [];

  allCols: Picture[][] = [this.col1, this.col2, this.col3];

  private imageUrls: string[] = [
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
    'src/assets/photos/07.JPG',
    'src/assets/photos/08.JPG',
    'src/assets/photos/09_fav.JPG',
    'src/assets/photos/10_fav.JPG',
    'src/assets/photos/11_fav.JPG',
    'src/assets/photos/12_fav.JPG',
    'src/assets/photos/13.JPG',
    'src/assets/photos/14.JPG',
    'src/assets/photos/15_fav.JPG',
    'src/assets/photos/16_fav.JPG',
    'src/assets/photos/17_fav.JPG',
  ];

  master: Picture[] = [
    { url: this.imageUrls[0], orientation: 1 },
    { url: this.imageUrls[1], orientation: 1 },
    { url: this.imageUrls[2], orientation: 1 },
    { url: this.imageUrls[3], orientation: 2 },
    { url: this.imageUrls[4], orientation: 1 },
    { url: this.imageUrls[5], orientation: 2 },
    { url: this.imageUrls[6], orientation: 2 },
    { url: this.imageUrls[7], orientation: 1 },
    { url: this.imageUrls[8], orientation: 2 },
    { url: this.imageUrls[9], orientation: 2 },
    { url: this.imageUrls[10], orientation: 1 },
    { url: this.imageUrls[11], orientation: 1 },
    { url: this.imageUrls[12], orientation: 2 },
    { url: this.imageUrls[13], orientation: 1 },
    { url: this.imageUrls[14], orientation: 2 },
    { url: this.imageUrls[15], orientation: 1 },
    { url: this.imageUrls[16], orientation: 1 },
  ];

  constructor() {}

  getColumnOrientationLength(col: Picture[]): number {
    let length = 0;

    col.forEach(pic => {
      length += pic.orientation;
    });

    return length;
  }

  isCol1Shortest(): boolean {
    return (
      this.getColumnOrientationLength(this.col1) <=
        this.getColumnOrientationLength(this.col2) &&
      this.getColumnOrientationLength(this.col1) <=
        this.getColumnOrientationLength(this.col3)
    );
  }

  isCol2Shortest(): boolean {
    return (
      this.getColumnOrientationLength(this.col2) <=
        this.getColumnOrientationLength(this.col1) &&
      this.getColumnOrientationLength(this.col2) <=
        this.getColumnOrientationLength(this.col3)
    );
  }

  isCol3Shortest(): boolean {
    return (
      this.getColumnOrientationLength(this.col3) <=
        this.getColumnOrientationLength(this.col1) &&
      this.getColumnOrientationLength(this.col3) <=
        this.getColumnOrientationLength(this.col2)
    );
  }

  splitPicsArray() {
    if (this.master.length < 3) {
      console.log('ERROR: master list must have at least [3] photos');
      return;
    }

    const favorites = this.master.filter(pic => {
      return pic.url.includes('fav');
    });

    const nonFavorites = this.master.filter(pic => {
      return !pic.url.includes('fav');
    });

    this.distributeFavorites(favorites.reverse());

    this.distributeNonFavorites(nonFavorites.reverse());

    // this.col1.push(this.master.pop());
    // this.col2.push(this.master.pop());
    // this.col3.push(this.master.pop());

    // while (this.master.length) {
    //   if (this.isCol1Shortest()) {
    //     this.col1.push(this.master.pop());
    //   } else if (this.isCol2Shortest()) {
    //     this.col2.push(this.master.pop());
    //   } else if (this.isCol3Shortest()) {
    //     this.col3.push(this.master.pop());
    //   }
    // }
  }

  private distributeNonFavorites(nonFavorites: Picture[]) {
    nonFavorites.forEach(pic => {
      if (this.isCol1Shortest()) {
        this.col1.push(pic);
      } else if (this.isCol2Shortest()) {
        this.col2.push(pic);
      } else if (this.isCol3Shortest()) {
        this.col3.push(pic);
      }
    });
  }

  private distributeFavorites(favorites: Picture[]) {
    favorites.forEach(pic => {
      if (this.isCol1Shortest()) {
        this.col1.push(pic);
      } else if (this.isCol2Shortest()) {
        this.col2.push(pic);
      } else if (this.isCol3Shortest()) {
        this.col3.push(pic);
      }
    });
  }

  checkForUnevenColumns() {
    const {
      col1Length,
      col2Length,
      col3Length
    } = this.getAllColumnOrientationLengths();

    // console.log(
    //   `col1: ${col1Length}\ncol2: ${col2Length}\ncol3: ${col3Length}\n`
    // );
    // console.log(`col1 last: ${this.col1[this.col1.length - 1].orientation}`);
    // console.log(`col2 last: ${this.col2[this.col2.length - 1].orientation}`);
    // console.log(`col3 last: ${this.col3[this.col3.length - 1].orientation}`);
    const colLengths = [col1Length, col2Length, col3Length];
    // console.log('shortest column value:', Math.min(...nums));
    // console.log(
    //   'number of short columns:',
    //   nums.filter(x => {
    //     return x === Math.min(...nums);
    //   }).length
    // );

    const numShortCols = colLengths.filter(x => {
      return x === Math.min(...colLengths);
    }).length;

    switch (numShortCols) {
      case 1:
        this.makeCenterColumnShortest(colLengths);
        if (
          this.isCol2Shortest() &&
          this.col2[this.col2.length - 1].orientation === 1
        ) {
          this.col2.push(this.getLongestColumn().pop());
        }
        break;
      case 2:
        this.makeCenterColumnLongest(colLengths);
        break;

      default:
        break;
    }
  }

  private getAllColumnOrientationLengths() {
    let col1Length = 0;
    let col2Length = 0;
    let col3Length = 0;

    this.col1.forEach((pic: Picture) => {
      col1Length += pic.orientation;
    });

    this.col2.forEach((pic: Picture) => {
      col2Length += pic.orientation;
    });

    this.col3.forEach((pic: Picture) => {
      col3Length += pic.orientation;
    });

    return { col1Length, col2Length, col3Length };
  }

  private makeCenterColumnShortest(colLengths: number[]) {
    const shortestColIndex = colLengths.indexOf(Math.min(...colLengths));
    const shortestCol = this.allCols[shortestColIndex];
    if (shortestCol === this.col1) {
      this.col1.push(this.col2.pop());
    } else if (shortestCol === this.col3) {
      this.col3.push(this.col2.pop());
    }
  }

  private makeCenterColumnLongest(colLengths: number[]) {
    const longestColIndex = colLengths.indexOf(Math.max(...colLengths));
    const longestCol = this.allCols[longestColIndex];
    if (longestCol !== this.col2) {
      this.col2.push(longestCol.pop());
    }
  }

  private getLongestColumn(): Picture[] {
    if (
      this.getColumnOrientationLength(this.col1) >
        this.getColumnOrientationLength(this.col2) &&
      this.getColumnOrientationLength(this.col1) >
        this.getColumnOrientationLength(this.col3)
    ) {
      return this.col1;
    } else if (
      this.getColumnOrientationLength(this.col2) >
        this.getColumnOrientationLength(this.col1) &&
      this.getColumnOrientationLength(this.col2) >
        this.getColumnOrientationLength(this.col3)
    ) {
      return this.col2;
    }

    return this.col3;
  }

  ngOnInit() {
    this.splitPicsArray();

    const image = new Image();
    image.src = this.imageUrls[1];
    console.log(`WIDTH: ${image.naturalWidth}\nHEIGHT: ${image.naturalHeight}`);

    this.checkForUnevenColumns();
  }
}
