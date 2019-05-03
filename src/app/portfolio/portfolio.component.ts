import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  url: string;
}

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pageTitle = 'Portfolio';

  tiles: Tile[] = [
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
  ];
  tiles2: Tile[] = [
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
  ];
  tiles3: Tile[] = [
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
    {url: '/src/assets/photos/vert.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {url: '/src/assets/photos/horiz.jpeg', cols: 2, rows: 1, color: 'lightblue'},
  ];

  constructor() {}

  ngOnInit() {}
}
