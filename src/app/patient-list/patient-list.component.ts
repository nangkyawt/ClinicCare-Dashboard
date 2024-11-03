import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  patients = [
    { name: 'Mark', specialization: 'Cardiology' },
    { name: 'Jacob', specialization: 'Pediatrics' },
    { name: 'Larry', specialization: 'Orthopedics' },
  ];
}
