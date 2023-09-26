import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMenuComponent } from './lab-menu.component';

describe('LabMenuComponent', () => {
  let component: LabMenuComponent;
  let fixture: ComponentFixture<LabMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabMenuComponent]
    });
    fixture = TestBed.createComponent(LabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
