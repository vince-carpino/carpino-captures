import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PortfolioImagesService } from '../services/portfolio-images.service';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioResolver implements Resolve<Picture[]> {
  constructor(private imageService: PortfolioImagesService) {}

  resolve(): Observable<Picture[]> {
    return this.imageService.getImagesFromManifest();
  }
}
