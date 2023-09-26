import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLeftChartChildComponent } from './right-left-chart-child.component';

describe('RightLeftChartChildComponent', () => {
  let component: RightLeftChartChildComponent;
  let fixture: ComponentFixture<RightLeftChartChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightLeftChartChildComponent]
    });
    fixture = TestBed.createComponent(RightLeftChartChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
