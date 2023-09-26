import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLeftChartComponent } from './right-left-chart.component';

describe('RightLeftChartComponent', () => {
  let component: RightLeftChartComponent;
  let fixture: ComponentFixture<RightLeftChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightLeftChartComponent]
    });
    fixture = TestBed.createComponent(RightLeftChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
