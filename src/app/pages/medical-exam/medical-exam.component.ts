import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MedicalExam} from '../../models/medical-exam';
import {HttpDataService} from '../../services/http-data.service';
import {Obstetrician} from '../../models/obstetrician';

@Component({
  selector: 'app-medical-exam',
  templateUrl: './medical-exam.component.html',
  styleUrls: ['./medical-exam.component.css']
})
export class MedicalExamComponent implements OnInit {

  @ViewChild('studentForm', {static: false})
  MedicalExamForm: NgForm;

  MedicalExamData: MedicalExam;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'idMother', 'idObstetrician', 'examType', 'Description', 'Result', 'datePrescription', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.MedicalExamData = {} as MedicalExam;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator; // Para manejar la paginacion de la tabla
  }

  getAllMedicalExams() {
    this.httpDataService.getListM().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  addMedicalExam() {
    this.httpDataService.createItemM(this.MedicalExamData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map(o => {
        return o;
      });
    });
  }

  updateMedicalExam() {
    this.httpDataService.updateItemM(this.MedicalExamData.id, this.MedicalExamData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: MedicalExam) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }

  onSubmit() {
    if (this.MedicalExamForm.form.valid) {
      if (this.isEditMode) {
        this.updateMedicalExam();
      }
      else {
        this.addMedicalExam();
      }
    }
    else {
      console.log('Invalid Data');
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.MedicalExamForm.resetForm();
  }
}
