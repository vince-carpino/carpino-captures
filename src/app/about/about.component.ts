import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle = 'About Me';

  constructor() {}

  ngOnInit() {}
}
