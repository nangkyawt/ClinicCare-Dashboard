import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode = false;

  constructor() {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    this.isDarkMode = storedDarkMode === 'true';
  }

  setDarkMode(value: boolean) {
    this.isDarkMode = value;
    localStorage.setItem('isDarkMode', value.toString());
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  getDarkMode(): boolean {
    return this.isDarkMode;
  }
}
