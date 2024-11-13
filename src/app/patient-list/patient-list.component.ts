import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  patients = [
    { name: 'Mark', age: '30', gender: 'Male' },
    { name: 'Jacob', age: '30', gender: 'Male' },
    { name: 'Larry', age: '30', gender: 'Male' },
  ];
}
