import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PortfolioImagesService } from '../services/portfolio-images.service';
import { Picture } from '../picture/picture';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioResolver implements Resolve<Picture[]> {
  constructor(private imageService: PortfolioImagesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Picture[]> {
    return this.imageService.getImagesFromManifest();
  }
}