import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBillComponent } from './doctor-bill.component';

describe('DoctorBillComponent', () => {
  let component: DoctorBillComponent;
  let fixture: ComponentFixture<DoctorBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorBillComponent]
    });
    fixture = TestBed.createComponent(DoctorBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
