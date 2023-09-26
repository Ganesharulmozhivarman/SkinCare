import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSummaryComponent } from './lab-summary.component';

describe('LabSummaryComponent', () => {
  let component: LabSummaryComponent;
  let fixture: ComponentFixture<LabSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabSummaryComponent]
    });
    fixture = TestBed.createComponent(LabSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
