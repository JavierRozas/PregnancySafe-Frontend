import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Mother } from '../models/mother';
import {Obstetrician} from '../models/obstetrician';
import {MedicalExam} from '../models/medical-exam';
import {Observable, pipe, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  // Endpoint
  basePath = 'http://localhost:3000/api/mother';
  basePathO = 'http://localhost:3000/api/obstetrician';
  basePathM = 'http://localhost:3000/api/medicalExam';

  constructor(private http: HttpClient) {}

  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  // API Errors Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.error('An error occurred: ', error.error.message);
    }
    else {
      // Unsuccessful Response Code Error returned from Backend
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  // Create Mother
  createItem(item): Observable<Mother> {
    return this.http.post<Mother>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Get Mothers Data
  getList(): Observable<Mother> {
    return this.http.get<Mother>(this.basePath)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Update Mother
  updateItem(id, item): Observable<Mother> {
    return this.http.put<Mother>(this.basePath + '/' + id,
      JSON.stringify(item), this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Create Obstetrician
  createItemO(item): Observable<Obstetrician> {
    return this.http.post<Obstetrician>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Get Obstetricians Data
  getListO(): Observable<Obstetrician> {
    return this.http.get<Obstetrician>(this.basePathO)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Update Obstetrician
  updateItemO(id, item): Observable<Obstetrician> {
    return this.http.put<Obstetrician>(this.basePathO + '/' + id,
      JSON.stringify(item), this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Create MedicalExam
  createItemM(item): Observable<MedicalExam> {
    return this.http.post<MedicalExam>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Get MedicalExams Data
  getListM(): Observable<MedicalExam> {
    return this.http.get<MedicalExam>(this.basePathM)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }

  // Update MedicalExam
  updateItemM(id, item): Observable<MedicalExam> {
    return this.http.put<MedicalExam>(this.basePathM + '/' + id,
      JSON.stringify(item), this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }
}
