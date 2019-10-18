import { Component, OnInit } from '@angular/core';
import { NightModeService } from '../services/night-mode.service';

@Component({
  selector: 'cc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isNight = this.nightModeService.isNight();

  constructor(public nightModeService: NightModeService) {}

  ngOnInit() {}
}
