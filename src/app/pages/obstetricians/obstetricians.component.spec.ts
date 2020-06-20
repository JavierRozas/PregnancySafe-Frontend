import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetriciansComponent } from './obstetricians.component';

describe('ObstetriciansComponent', () => {
  let component: ObstetriciansComponent;
  let fixture: ComponentFixture<ObstetriciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstetriciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstetriciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
