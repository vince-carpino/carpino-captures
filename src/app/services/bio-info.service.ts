import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BioInfoService {
  private baseUrl = 'https://s3-us-west-1.amazonaws.com/carpino-captures/';
  private bioUrl = this.baseUrl + 'bio.json';

  constructor(private http: HttpClient) { }

  getBioFromS3(): Observable<BioInfo> {
    return this.http.get<BioInfo>(this.bioUrl).pipe(
      catchError(this.handleError)
    );
  }

  handleError() {
    return throwError(new Error('Something went wrong'));
  }
}
