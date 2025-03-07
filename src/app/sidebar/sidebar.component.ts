import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isDarkMode = false;
  sidebarItems: any;

  @Input() darkMode: boolean = false;
  darkModeService: any;
  constructor(private router: Router) {}

  ngOnInit() {
    // Check local storage for dark mode preference
    const storedDarkMode = localStorage.getItem('isDarkMode');
    this.isDarkMode = storedDarkMode === 'true';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleDarkMode() {
    console.log(this.isDarkMode);
    this.isDarkMode = !this.isDarkMode;
    console.log('DARKMODE WORK');
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  // ngOnInit(): void {
  //   // Subscribe to dark mode state from the DarkModeService
  //   this.darkModeService.darkMode$.subscribe((mode: boolean) => {
  //     this.isDarkMode = mode;
  //     document.body.classList.toggle('dark-mode', this.isDarkMode);
  //   });
  // }

  // toggleDarkMode() {
  //   console.log('darkmode work');
  //   this.darkModeService.toggleDarkMode();
  //   console.log(this.darkModeService); // Call the corrected method name
  // }
}
