import { Component, OnInit } from '@angular/core';

export interface Picture {
  url: string;
  orientation: number;
}

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pageTitle = 'Portfolio';

  col1: Picture[] = [];
  col2: Picture[] = [];
  col3: Picture[] = [];

  master: Picture[] = [
    { url: '/src/assets/photos/01.jpg', orientation: 1 },
    { url: '/src/assets/photos/02.jpg', orientation: 1 },
    { url: '/src/assets/photos/03.jpg', orientation: 1 },
    { url: '/src/assets/photos/04.jpg', orientation: 2 },
    { url: '/src/assets/photos/05.jpg', orientation: 1 },
    { url: '/src/assets/photos/06.jpg', orientation: 2 },
    { url: '/src/assets/photos/07.jpg', orientation: 2 },
    { url: '/src/assets/photos/08.jpg', orientation: 1 },
    { url: '/src/assets/photos/09.jpg', orientation: 2 },
    { url: '/src/assets/photos/10.jpg', orientation: 2 },
    { url: '/src/assets/photos/11.jpg', orientation: 1 },
    { url: '/src/assets/photos/12.jpg', orientation: 1 },
    { url: '/src/assets/photos/13.jpg', orientation: 2 },
    { url: '/src/assets/photos/14.jpg', orientation: 1 },
    { url: '/src/assets/photos/15.jpg', orientation: 2 }
  ];

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
    this.col1.push(this.master.pop());
    this.col2.push(this.master.pop());
    this.col3.push(this.master.pop());

    while (this.master.length) {
      if (this.isCol1Shortest()) {
        this.col1.push(this.master.pop());
      } else if (this.isCol2Shortest()) {
        this.col2.push(this.master.pop());
      } else if (this.isCol3Shortest()) {
        this.col3.push(this.master.pop());
      }
    }
  }

  checkForUnevenColumns() {
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

    console.log(
      `col1: ${col1Length}\ncol2: ${col2Length}\ncol3: ${col3Length}\n`
    );
    console.log(`col1 last: ${this.col1[this.col1.length - 1].orientation}`);
    console.log(`col2 last: ${this.col2[this.col2.length - 1].orientation}`);
    console.log(`col3 last: ${this.col3[this.col3.length - 1].orientation}`);
    const nums = [col1Length, col2Length, col3Length];
    console.log(Math.min(...nums));
  }

  constructor() {}

  ngOnInit() {
    this.splitPicsArray();

    this.checkForUnevenColumns();
  }
}
