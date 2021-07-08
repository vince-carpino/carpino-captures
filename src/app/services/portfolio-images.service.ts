import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Picture } from '../picture/picture';

@Injectable({
  providedIn: 'root'
})
export class PortfolioImagesService {
  private baseUrl = 'https://s3-us-west-1.amazonaws.com/carpino-captures';
  private manifestUrl = this.baseUrl + '/manifest.json';

  constructor(private http: HttpClient) { }

  getImagesFromManifest(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.manifestUrl).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${error.error.message}`;
    } else {
      errorMessage = `Code: ${error.status}, Message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
