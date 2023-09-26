import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentPageComponent } from './appoinment-page.component';

describe('AppoinmentPageComponent', () => {
  let component: AppoinmentPageComponent;
  let fixture: ComponentFixture<AppoinmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentPageComponent]
    });
    fixture = TestBed.createComponent(AppoinmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
