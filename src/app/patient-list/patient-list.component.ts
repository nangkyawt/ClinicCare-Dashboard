import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  deletePatient(_t15: number) {
    throw new Error('Method not implemented.');
  }
  openEditModal(_t14: { name: string; age: string; gender: string }) {
    throw new Error('Method not implemented.');
  }
  patients = [
    { name: 'Mark', age: '30', gender: 'Male', contact: 'uuuuu' },
    { name: 'Jacob', age: '30', gender: 'Male', contact: 'uuuuu' },
    { name: 'Larry', age: '30', gender: 'Male', contact: 'uuuuu' },
  ];
}
