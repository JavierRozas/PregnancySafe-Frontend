import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MothersComponent } from './pages/mothers/mothers.component';
import { ObstetriciansComponent } from './pages/obstetricians/obstetricians.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MedicalExamComponent } from './pages/medical-exam/medical-exam.component';
import { MedicalAppointmentComponent } from './pages/medical-appointment/medical-appointment.component';
import { PregnancyStageComponent } from './pages/pregnancy-stage/pregnancy-stage.component';
import { AdviceComponent } from './pages/advice/advice.component';
import { VideoComponent } from './pages/video/video.component';


@NgModule({

  declarations: [
    AppComponent,
    MothersComponent,
    ObstetriciansComponent,
    HomepageComponent,
    MedicalExamComponent,
    MedicalAppointmentComponent,
    PregnancyStageComponent,
    AdviceComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
