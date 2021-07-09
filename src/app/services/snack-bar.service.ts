import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  successConfig: SnackBarConfig = { duration: 3000, panelClass: ['snack-bar-success'] };
  errorConfig: SnackBarConfig = { duration: 5000, panelClass: ['snack-bar-error'] };

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  error(message: string) {
    return this.snackBar.open(message, '', this.errorConfig);
  }

  success(message: string) {
    return this.snackBar.open(message, '', this.successConfig);
  }
}
