import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';
// import {ApexCharts} from 'apexcharts'
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showCards: boolean = true;
  isDarkMode = false;

  appointments = [
    { name: 'Nang Kyawt', doctor: 'Dr. Kaung Khant Zaw', condition: 'Cold' },
    { name: 'Mg Mg', doctor: 'Dr. Kaung Khant Zaw', condition: 'Fracture' },
    { name: 'Su Su', doctor: 'Dr. Aike Khun', condition: 'Cold' },
    { name: 'Kyawt Kyawt', doctor: 'Dr. Aike Khun', condition: 'Allergy' },
  ];
  doctors = [
    { name: 'Kaung Khant Zaw', visittime: '8:00Am' },
    { name: 'Kaung Khant Zaw', visittime: '12:00Pm' },
    { name: 'Aike Khun', visittime: '3:00Pm' },
    { name: 'Aike Khun', visittime: '10:00Am' },
  ];
  selectedAppointment: any = {};

  bootstrap: any;
  selectedAppointmentIndex: any;
  selectedDoctorIndex: any;
  selectedDoctor: any;
  editModal: any;

  toogleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    // Subscribe to the dark mode observable
    this.darkModeService.darkMode$.subscribe((isDark: boolean) => {
      this.isDarkMode = isDark;
    });

    // Check if the current route is '/home' to show/hide cards
    this.router.events.subscribe(() => {
      this.showCards = this.router.url === '/home';
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  openEditModal(item: any) {
    console.log(this.selectedAppointment);
    this.selectedAppointment = { ...item };
    const modal = new bootstrap.Modal(this.editModal.nativeElement);
    console.log(this.editModal.nativeElement);
    modal.show();
  }

  // EditModaldv(item: any) {
  //   this.selectedAppointment = { ...item };
  //   const modal = new bootstrap.Modal(this.editModal.nativeElement);
  //   modal.show();
  // }

  saveChanges() {
    // Update the original list with the edited data
    const index = this.appointments.findIndex(
      (a) => a.name === this.selectedAppointment.name
    );
    if (index !== -1) {
      this.appointments[index] = { ...this.selectedAppointment };
    }
  }

  deleteAppointment(index: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointments.splice(index, 1);
    }
  }

  deleteDoctor(index: number) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctors.splice(index, 1);
    }
  }
}
