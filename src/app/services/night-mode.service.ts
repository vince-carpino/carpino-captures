import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {
  constructor() {}

  isNight(): boolean {
    const hours = new Date().getHours();
    return hours > 19 || hours < 8;
  }
}
