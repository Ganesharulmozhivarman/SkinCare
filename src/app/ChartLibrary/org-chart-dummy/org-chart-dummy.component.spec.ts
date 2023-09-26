import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartDummyComponent } from './org-chart-dummy.component';

describe('OrgChartDummyComponent', () => {
  let component: OrgChartDummyComponent;
  let fixture: ComponentFixture<OrgChartDummyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgChartDummyComponent]
    });
    fixture = TestBed.createComponent(OrgChartDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
