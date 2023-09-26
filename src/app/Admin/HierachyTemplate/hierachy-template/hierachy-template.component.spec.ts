import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierachyTemplateComponent } from './hierachy-template.component';

describe('HierachyTemplateComponent', () => {
  let component: HierachyTemplateComponent;
  let fixture: ComponentFixture<HierachyTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierachyTemplateComponent]
    });
    fixture = TestBed.createComponent(HierachyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
