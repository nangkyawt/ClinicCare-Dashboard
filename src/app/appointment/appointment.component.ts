import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  appointments = [
    { name: 'Nang Kyawt', doctor: 'Dr. Kaung Khant Zaw', condition: 'Cold' },
    { name: 'Mg Mg', doctor: 'Dr. Kaung Khant Zaw', condition: 'Fracture' },
    { name: 'Su Su', doctor: 'Dr. Aike Khun', condition: 'Cold' },
    { name: 'Kyawt Kyawt', doctor: 'Dr. Aike Khun', condition: 'Allergy' },
  ];

  // New appointment object to hold the input data
  newAppointment = { name: '', doctor: '', condition: '' };

  doctors = [
    { name: 'Kaung Khant Zaw', visittime: '8:00Am' },
    { name: 'Kaung Khant Zaw', visittime: '12:00Pm' },
    { name: 'Aike Khun', visittime: '3:00Pm' },
    { name: 'Aike Khun', visittime: '10:00Am' },
  ];

  // Opens the Add appointment modal and resets the form
  openAddModal() {
    this.newAppointment = { name: '', doctor: '', condition: '' }; // Reset form fields
  }

  // Adds a new appointment to the list
  Addappointment() {
    if (
      this.newAppointment.name &&
      this.newAppointment.doctor &&
      this.newAppointment.condition
    ) {
      this.appointments.push({ ...this.newAppointment });
      this.newAppointment = { name: '', doctor: '', condition: '' }; // Reset form fields after adding
    } else {
      alert('Please fill in all fields');
    }
  }

  // Open edit modal for updating an existing appointment
  openEditModal(appointment: any) {
    // Implement editing logic here if needed
  }

  // Delete an appointment
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
