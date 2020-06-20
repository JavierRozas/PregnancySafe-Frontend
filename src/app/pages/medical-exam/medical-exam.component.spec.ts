import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExamComponent } from './medical-exam.component';

describe('MedicalExamComponent', () => {
  let component: MedicalExamComponent;
  let fixture: ComponentFixture<MedicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
