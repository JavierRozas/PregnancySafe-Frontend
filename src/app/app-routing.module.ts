import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components:
import { MothersComponent } from './pages/mothers/mothers.component';
import { ObstetriciansComponent } from './pages/obstetricians/obstetricians.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MedicalExamComponent } from './pages/medical-exam/medical-exam.component';

const routes: Routes = [
  { path: '',   redirectTo: '/PregnancySafe', pathMatch: 'full' },
  { path: 'PregnancySafe', component: HomepageComponent },
  { path: 'PregnancySafe/mother', component: MothersComponent },
  { path: 'PregnancySafe/medicalExam', component: MedicalExamComponent },
  { path: 'PregnancySafe/obstetrician', component: ObstetriciansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
