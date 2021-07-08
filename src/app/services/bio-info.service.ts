import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BioInfo } from '../interfaces/bioInfo';

@Injectable({
  providedIn: 'root'
})
export class BioInfoService {
  private baseUrl = 'https://s3-us-west-1.amazonaws.com/carpino-captures';
  private bioUrl = this.baseUrl + '/bio.json';

  constructor(private http: HttpClient) { }

  getBioFromS3(): Observable<BioInfo> {
    return this.http.get<BioInfo>(this.bioUrl).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${ error.error.message }`;
    } else {
      errorMessage = `Code: ${ error.status }, Message: ${ error.message }`;
    }

    console.error('SADJFHASDJKFH' + errorMessage);
    return throwError('BLAH');
    // return throwError(errorMessage);
  }
}
