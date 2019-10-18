import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {
  constructor() {}

  isNight(): boolean {
    const hours = new Date().getHours();
    return hours > 16 || hours < 8;
  }
}
