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
  constructor(private router: Router) {}

  ngOnInit() {
    // Check local storage for dark mode preference
    const storedDarkMode = localStorage.getItem('isDarkMode');
    this.isDarkMode = storedDarkMode === 'true';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    // Save to local storage
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
