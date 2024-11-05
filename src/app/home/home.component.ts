import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import {ApexCharts} from 'apexcharts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showCards: boolean = true;

  appointments = [
    { name: 'Nang Kyawt', doctor: 'Dr. Kaung Khant Zaw', condition: 'Cold' },
    { name: 'Mg Mg', doctor: 'Dr. Kaung Khant Zaw', condition: 'Fracture' },
    { name: 'Su Su', doctor: 'Dr. Aike Khun', condition: 'Cold' },
    { name: 'Kyawt Kyawt', doctor: 'Dr. Aike Khun', condition: 'Allergy' },
  ];
  doctors = [
    {
      name: 'Kaung Khant Zaw',
      visittime: '8:00Am',
    },
    { name: 'Kaung Khant Zaw', visittime: '12:00Pm', experience: 'Fracture' },
    { name: 'Aike Khun', visittime: '3:00Pm', experience: 'Cold' },
    { name: 'Aike Khun', visittime: '10:00Am', experience: 'Allergy' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showCards = this.router.url === '/home';
    });
  }
}
