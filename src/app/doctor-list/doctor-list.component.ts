import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  doctors = [
    { name: 'Dr. Kaung Khant Zaw', specialization: 'Cardiology' },
    { name: 'Dr. Jacob', specialization: 'Pediatrics' },
    { name: 'Dr. Larry', specialization: 'Orthopedics' },
  ];
}
