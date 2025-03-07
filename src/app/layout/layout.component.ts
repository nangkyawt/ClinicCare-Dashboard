import { Component, Injectable, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });
  }
}
