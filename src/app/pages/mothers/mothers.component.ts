import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpDataService} from '../../services/http-data.service'; // Para interactuar con el servicio
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Mother} from '../../models/mother';
import * as _ from 'lodash';

@Component({
  selector: 'app-mothers',
  templateUrl: './mothers.component.html',
  styleUrls: ['./mothers.component.css']
})
export class MothersComponent implements OnInit {

  @ViewChild('studentForm', {static: false})
  motherForm: NgForm;

  motherData: Mother;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.motherData = {} as Mother;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator; // Para manejar la paginacion de la tabla
  }

  getAllMothers() {
    this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  addMother() {
    this.httpDataService.createItem(this.motherData).subscribe((response: any) => {
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map(o => {
        return o;
      });
    });
  }

  updateMother() {
    this.httpDataService.updateItem(this.motherData.id, this.motherData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Mother) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }

  onSubmit() {
    if (this.motherForm.form.valid) {
      if (this.isEditMode) {
        this.updateMother();
      }
      else {
        this.addMother();
      }
    }
    else {
      console.log('Invalid Data');
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.motherForm.resetForm();
  }
}
