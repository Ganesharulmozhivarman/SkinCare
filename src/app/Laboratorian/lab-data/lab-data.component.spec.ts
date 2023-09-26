import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDataComponent } from './lab-data.component';

describe('LabDataComponent', () => {
  let component: LabDataComponent;
  let fixture: ComponentFixture<LabDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabDataComponent]
    });
    fixture = TestBed.createComponent(LabDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
