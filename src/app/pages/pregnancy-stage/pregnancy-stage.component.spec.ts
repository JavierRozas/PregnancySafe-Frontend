import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyStageComponent } from './pregnancy-stage.component';

describe('PregnancyStageComponent', () => {
  let component: PregnancyStageComponent;
  let fixture: ComponentFixture<PregnancyStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregnancyStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
