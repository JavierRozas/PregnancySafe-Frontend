import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Obstetrician} from '../../models/Obstetrician';
import {HttpDataService} from '../../services/http-data.service';

@Component({
  selector: 'app-obstetricians',
  templateUrl: './obstetricians.component.html',
  styleUrls: ['./obstetricians.component.css']
})
export class ObstetriciansComponent implements OnInit {
  @ViewChild('studentForm', {static: false})
  ObstetricianForm: NgForm;

  ObstetricianData: Obstetrician;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'age', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.ObstetricianData = {} as Obstetrician;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator; // Para manejar la paginacion de la tabla
  }

  getAllObstetricians() {
    this.httpDataService.getListO().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  addObstetrician() {
    this.httpDataService.createItemO(this.ObstetricianData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map(o => {
        return o;
      });
    });
  }

  updateObstetrician() {
    this.httpDataService.updateItemO(this.ObstetricianData.id, this.ObstetricianData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Obstetrician) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }

  onSubmit() {
    if (this.ObstetricianForm.form.valid) {
      if (this.isEditMode) {
        this.updateObstetrician();
      }
      else {
        this.addObstetrician();
      }
    }
    else {
      console.log('Invalid Data');
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.ObstetricianForm.resetForm();
  }
}
