import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBillComponent } from './lab-bill.component';

describe('LabBillComponent', () => {
  let component: LabBillComponent;
  let fixture: ComponentFixture<LabBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabBillComponent]
    });
    fixture = TestBed.createComponent(LabBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
