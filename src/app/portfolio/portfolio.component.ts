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
    '/src/assets/photos/01.jpg',
    '/src/assets/photos/02.jpg',
    '/src/assets/photos/03.jpg',
    '/src/assets/photos/04.jpg',
    '/src/assets/photos/05.jpg',
    '/src/assets/photos/06.jpg',
    '/src/assets/photos/07.jpg',
    '/src/assets/photos/08.jpg',
    '/src/assets/photos/09.jpg',
    '/src/assets/photos/10.jpg',
    '/src/assets/photos/11.jpg',
    '/src/assets/photos/12.jpg',
    '/src/assets/photos/13.jpg',
    '/src/assets/photos/14.jpg',
    '/src/assets/photos/15.jpg'
  ];

  master: Picture[] = [
    { url: this.imageUrls[0], orientation: 1, favorite: true },
    { url: this.imageUrls[1], orientation: 1, favorite: true },
    { url: this.imageUrls[2], orientation: 1, favorite: true },
    { url: this.imageUrls[3], orientation: 2, favorite: true },
    { url: this.imageUrls[4], orientation: 1, favorite: true },
    { url: this.imageUrls[5], orientation: 2, favorite: true },
    { url: this.imageUrls[6], orientation: 2, favorite: false },
    { url: this.imageUrls[7], orientation: 1, favorite: false },
    { url: this.imageUrls[8], orientation: 2, favorite: true },
    { url: this.imageUrls[9], orientation: 2, favorite: true },
    { url: this.imageUrls[10], orientation: 1, favorite: true },
    { url: this.imageUrls[11], orientation: 1, favorite: true },
    { url: this.imageUrls[12], orientation: 2, favorite: false },
    { url: this.imageUrls[13], orientation: 1, favorite: true },
    { url: this.imageUrls[14], orientation: 2, favorite: false }
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
      return pic.favorite;
    });

    const nonFavorites = this.master.filter(pic => {
      return !pic.favorite;
    });

    this.distributeFavorites(favorites);

    this.distributeNonFavorites(nonFavorites);

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
