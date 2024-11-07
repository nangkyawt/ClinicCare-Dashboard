import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isDarkMode = false;
  sidebarItems: any;

  @Input() darkMode: boolean = false;
  constructor(private router: Router) {}
  isDoctorListActive(): boolean {
    return this.router.url === '/home/doctor-list';
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
