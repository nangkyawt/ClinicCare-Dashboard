import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  deleteAppointment(_t14: number) {
    throw new Error('Method not implemented.');
  }
  openEditModal(_t13: any) {
    throw new Error('Method not implemented.');
  }

  // appointments = [
  //   { name: 'Nang Kyawt', doctor: 'Dr. Kaung Khant Zaw', condition: 'Cold' },
  //   { name: 'Mg Mg', doctor: 'Dr. Kaung Khant Zaw', condition: 'Fracture' },
  //   { name: 'Su Su', doctor: 'Dr. Aike Khun', condition: 'Cold' },
  //   { name: 'Kyawt Kyawt', doctor: 'Dr. Aike Khun', condition: 'Allergy' },
  // ];

  doctors = [
    { name: 'Dr. Kaung Khant Zaw', specialization: 'Cardiology' },
    { name: 'Dr. Jacob', specialization: 'Pediatrics' },
    { name: 'Dr. Larry', specialization: 'Orthopedics' },
  ];
}
