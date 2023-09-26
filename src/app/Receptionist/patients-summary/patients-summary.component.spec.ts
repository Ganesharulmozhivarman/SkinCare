import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSummaryComponent } from './patients-summary.component';

describe('PatientsSummaryComponent', () => {
  let component: PatientsSummaryComponent;
  let fixture: ComponentFixture<PatientsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsSummaryComponent]
    });
    fixture = TestBed.createComponent(PatientsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
