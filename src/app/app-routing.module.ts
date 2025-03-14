import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LayoutComponent } from './layout/layout.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     { path: '', component: HomeComponent }, // Default child route for HomeComponent
  //     { path: 'doctor-list', component: DoctorListComponent },
  //   ],
  // },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root path to home
  // { path: '**', redirectTo: '/home' },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'doctor-list', component: DoctorListComponent },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'setting', component: SettingComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
