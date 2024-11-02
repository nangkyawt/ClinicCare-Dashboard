import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  doctors = [
    { firstName: 'Mark', lastName: 'Otto', specialization: 'Cardiology' },
    { firstName: 'Jacob', lastName: 'Thornton', specialization: 'Pediatrics' },
    { firstName: 'Larry', lastName: 'Bird', specialization: 'Orthopedics' },
  ];
}
