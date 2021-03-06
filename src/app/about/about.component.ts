import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { NightModeService } from '../services/night-mode.service';
import { BioInfoService } from '../services/bio-info.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'cc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(400)])
    ])
  ]
})
export class AboutComponent implements OnInit {
  pageTitle: string = 'About Me';
  isNight: boolean = this.nightModeService.isNight();
  bioInfo$: Observable<BioInfo> = new Observable<BioInfo>();

  imageUrlPrefix: string = 'https://s3-us-west-1.amazonaws.com/carpino-captures/';

  constructor(
    public nightModeService: NightModeService,
    public bioInfoService: BioInfoService,
    private snackBarService: SnackBarService,
  ) { }

  getBioImageUrl() {
    return this.imageUrlPrefix + 'me.jpg';
  }

  ngOnInit() {
    const el = document.getElementsByTagName('h1')[0];
    el.scrollIntoView({ block: 'end' });

    this.getBioInfo();
  }

  private getBioInfo() {
    this.bioInfo$ = this.bioInfoService.getBioFromS3().pipe(
      catchError((err: Error) => {
        this.snackBarService.error(err.message);
        let fillerInfo: BioInfo = {
          header: 'There should be something here...',
          body: ['Something terrible has happened']
        };
        return of(fillerInfo);
      })
    );
  }
}
