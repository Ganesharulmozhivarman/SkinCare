import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDataComponent } from './prescription-data.component';

describe('PrescriptionDataComponent', () => {
  let component: PrescriptionDataComponent;
  let fixture: ComponentFixture<PrescriptionDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionDataComponent]
    });
    fixture = TestBed.createComponent(PrescriptionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
